(() => {
  "use strict";

  /* ── CONFIG ── */
  const STORAGE_KEY  = "prmLearnProgress";   // lưu tiến trình
  const DISTRACTORS  = 3;                    // số đáp án sai đi kèm
  const AUTO_NEXT_MS = 900;                  // ms tự động qua câu khi đúng

  /* ── HELPERS ── */
  const $ = (sel) => document.querySelector(sel);
  const shuffle = (arr) => {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  /* ── SOUND ENGINE (Web Audio API — không cần file âm thanh) ── */
  let _audioCtx = null;
  const getAudioCtx = () => {
    if (!_audioCtx) _audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    // Resume nếu bị suspended (browser policy)
    if (_audioCtx.state === "suspended") _audioCtx.resume();
    return _audioCtx;
  };

  /**
   * Phát một note với: frequency (Hz), loại sóng, volume, thời điểm bắt đầu,
   * attack và release (giây).
   */
  const playNote = (freq, type, vol, startAt, attack, release) => {
    const ctx = getAudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = type;
    osc.frequency.setValueAtTime(freq, startAt);
    gain.gain.setValueAtTime(0, startAt);
    gain.gain.linearRampToValueAtTime(vol, startAt + attack);
    gain.gain.exponentialRampToValueAtTime(0.0001, startAt + attack + release);
    osc.start(startAt);
    osc.stop(startAt + attack + release + 0.05);
  };

  /* 🟢 Đúng: Tiếng "ding" vui — 2 note tăng dần (perfect fifth) */
  const playCorrect = () => {
    try {
      const ctx = getAudioCtx();
      const now = ctx.currentTime;
      playNote(523.25, "sine", 0.18, now,       0.008, 0.22); // C5
      playNote(783.99, "sine", 0.14, now + 0.1,  0.008, 0.32); // G5
    } catch { /* ignore nếu browser block */ }
  };

  /* 🔴 Sai: Tiếng "thud" nhẹ — note thấp, tắt nhanh */
  const playWrong = () => {
    try {
      const ctx = getAudioCtx();
      const now = ctx.currentTime;
      playNote(200, "sawtooth", 0.10, now,       0.005, 0.12);
      playNote(150, "sine",     0.08, now + 0.07, 0.005, 0.18);
    } catch { /* ignore */ }
  };

  /* 🎉 Hoàn thành vòng: Fanfare 4 note */
  const playComplete = () => {
    try {
      const ctx = getAudioCtx();
      const now = ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5 E5 G5 C6
      notes.forEach((freq, i) => {
        playNote(freq, "sine", 0.15, now + i * 0.14, 0.01, 0.25);
      });
    } catch { /* ignore */ }
  };

  /* ── STATE ── */
  let queue   = [];      // danh sách câu hỏi trong vòng hiện tại (ids)
  let qIndex  = 0;       // vị trí hiện tại trong queue
  let round   = 1;       // vòng học (mỗi vòng = hết queue)
  let correct = 0;       // đúng trong toàn phiên
  let wrong   = 0;       // sai (dù vẫn tính là "xem rồi")
  let wrongIds = [];     // ids trả lời sai cần ôn lại
  let answered = false;  // đã chọn đáp án chưa?
  let autoTimer = null;

  const allQuestions = questions; // từ questions.js

  /* Map để tra nhanh */
  const qMap = new Map(allQuestions.map((q) => [q.id, q]));

  /* ── LOAD / SAVE ── */
  const loadState = () => {
    try {
      const s = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (s && Array.isArray(s.queue) && s.queue.length) {
        // Tự động reset nếu người dùng trước đó đã học hết và không còn câu sai nào
        if ((s.qIndex >= s.queue.length - 1 || s.isCompleted) && (!s.wrongIds || s.wrongIds.length === 0)) {
          startFreshRound();
          return;
        }
        queue    = s.queue;
        qIndex   = Math.min(s.qIndex || 0, queue.length - 1);
        round    = s.round || 1;
        correct  = s.correct || 0;
        wrong    = s.wrong   || 0;
        wrongIds = s.wrongIds || [];
        return;
      }
    } catch { /* ignore */ }
    startFreshRound();
  };

  const saveState = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      queue, qIndex, round, correct, wrong, wrongIds
    }));
  };

  const startFreshRound = () => {
    queue    = shuffle(allQuestions.map((q) => q.id));
    qIndex   = 0;
    round    = 1;
    correct  = 0;
    wrong    = 0;
    wrongIds = [];
    saveState();
  };

  const startReviewRound = () => {
    // Chỉ ôn lại những câu đã sai
    queue    = shuffle([...new Set(wrongIds)]);
    wrongIds = [];
    qIndex   = 0;
    round   += 1;
    saveState();
  };

  /* ── ELEMENTS ── */
  const elProgress  = $("#learn-progress-fill");
  const elRoundBadge= $("#round-badge");
  const elRoundCount= $("#round-count");
  const elCard      = $("#learn-card");
  const elQNum      = $("#learn-q-num");
  const elQuestion  = $("#learn-question");
  const elOptions   = $("#learn-options");
  const elHint      = $("#learn-feedback-hint");
  const elFooter    = $("#learn-footer");
  const elContinue  = $("#learn-continue-btn");
  const elModal     = $("#learn-complete-modal");
  const elHdrCorr   = $("#hdr-correct");
  const elHdrTotal  = $("#hdr-total");
  const elChooseLabel = $("#learn-choose-label");

  /* ── BUILD OPTIONS ── */
  /**
   * Dùng đúng 4 đáp án A/B/C/D gốc của câu hỏi, chỉ xáo trộn thứ tự hiển thị.
   * Trả về mảng { text, isCorrect }
   */
  const buildOptions = (q) => {
    const correctText = q.options.find((o) => o.key === q.correctAnswer).text;
    const opts = q.options.map((o) => ({
      text: o.text,
      isCorrect: o.text === correctText
    }));
    return shuffle(opts);
  };

  /* ── RENDER ── */
  const renderQuestion = () => {
    answered = false;
    clearTimeout(autoTimer);

    const id = queue[qIndex];
    const q  = qMap.get(id);
    if (!q) return;

    const opts = buildOptions(q);
    const total = queue.length;
    const done  = qIndex; // câu đã qua

    // Header stats
    elHdrCorr.textContent  = correct;
    elHdrTotal.textContent = correct + wrong;

    // Progress
    elProgress.style.width = `${(done / total) * 100}%`;

    // Round info
    elRoundBadge.textContent = `Vòng ${round}`;
    elRoundCount.textContent = `${total - done} câu còn lại`;

    // Card
    elQNum.textContent     = `Câu ${done + 1} / ${total}`;
    elQuestion.textContent = q.question;
    elChooseLabel.textContent = "Chọn đáp án đúng";
    elHint.hidden          = true;
    elHint.className       = "learn-feedback-hint";
    elFooter.hidden        = true;

    // Options
    elOptions.innerHTML = opts.map((opt, i) => `
      <button class="learn-option" type="button" data-correct="${opt.isCorrect}" aria-pressed="false">
        <span class="learn-option-num">${i + 1}</span>
        <span class="learn-option-text">${escHtml(opt.text)}</span>
        <span class="learn-option-icon" aria-hidden="true"></span>
      </button>
    `).join("");

    // Kích hoạt hiệu ứng chuyển tiếp mượt mà khi hiển thị câu hỏi mới
    elCard.classList.remove("leaving", "entering");
    void elCard.offsetWidth; // Force DOM reflow
    elCard.classList.add("entering");
  };

  /* ── HANDLE CHOICE ── */
  const handleChoice = (btn) => {
    if (answered) return;
    answered = true;

    const isCorrect = btn.dataset.correct === "true";

    // Disable all
    elOptions.querySelectorAll(".learn-option").forEach((b) => {
      b.disabled = true;
      b.setAttribute("aria-pressed", "false");
    });

    if (isCorrect) {
      correct++;
      playCorrect(); // 🟢 Âm thanh đúng
      btn.classList.add("correct");
      btn.setAttribute("aria-pressed", "true");

      // Dim others
      elOptions.querySelectorAll(".learn-option:not(.correct)").forEach((b) => b.classList.add("dimmed"));

      elHint.textContent = "✓ Chính xác!";
      elHint.classList.add("is-correct");
      elHint.hidden = false;

      // Tự động chuyển sau AUTO_NEXT_MS
      autoTimer = setTimeout(() => advance(), AUTO_NEXT_MS);

    } else {
      wrong++;
      playWrong(); // 🔴 Âm thanh sai
      const id = queue[qIndex];
      if (!wrongIds.includes(id)) wrongIds.push(id);

      btn.classList.add("wrong");

      // Highlight correct
      elOptions.querySelectorAll(".learn-option").forEach((b) => {
        if (b.dataset.correct === "true") b.classList.add("correct");
        else if (b !== btn) b.classList.add("dimmed");
      });

      elHint.textContent = "Đừng lo, bạn vẫn đang học mà!";
      elHint.hidden = false;

      // Show footer
      elFooter.hidden = false;
    }

    elHdrCorr.textContent  = correct;
    elHdrTotal.textContent = correct + wrong;
    saveState();
  };

  /* ── ADVANCE ── */
  const advance = () => {
    clearTimeout(autoTimer);
    const nextIndex = qIndex + 1;

    if (nextIndex >= queue.length) {
      // Hết vòng
      elProgress.style.width = "100%";
      showComplete();
    } else {
      // Animate card & footer exit mượt mà
      elCard.classList.remove("entering");
      elCard.classList.add("leaving");
      if (elFooter && !elFooter.hidden) {
        elFooter.style.transition = "opacity 0.2s ease, transform 0.2s ease";
        elFooter.style.opacity = "0";
        elFooter.style.transform = "translateY(100%)";
      }
      setTimeout(() => {
              elCard.classList.remove("leaving");
        if (elFooter && !elFooter.hidden) {
          elFooter.hidden = true;
          elFooter.style.opacity = "";
          elFooter.style.transform = "";
          elFooter.style.transition = "";
        }
        qIndex = nextIndex;
        saveState();
        renderQuestion();
      }, 320);
    }
  };

  /* ── COMPLETE ── */
  const showComplete = () => {
    playComplete(); // 🎉 Fanfare hoàn thành vòng
    const accuracy = correct + wrong > 0 ? Math.round((correct / (correct + wrong)) * 100) : 0;
    const stillWrong = wrongIds.length;

    $("#learn-complete-title").textContent = stillWrong
      ? "Hoàn thành vòng học!"
      : "🎉 Tuyệt vời! Bạn đã nhớ hết!";

    $("#learn-complete-msg").textContent = stillWrong
      ? `Còn ${stillWrong} câu cần ôn lại. Hãy tiếp tục nhé!`
      : "Bạn đã trả lời đúng toàn bộ câu hỏi trong phiên học này!";

    $("#learn-complete-stats").innerHTML = `
      <div class="learn-stat-item">
        <span class="learn-stat-val green">${correct}</span>
        <span class="learn-stat-label">Đúng</span>
      </div>
      <div class="learn-stat-item">
        <span class="learn-stat-val red">${wrong}</span>
        <span class="learn-stat-label">Sai</span>
      </div>
      <div class="learn-stat-item">
        <span class="learn-stat-val">${accuracy}%</span>
        <span class="learn-stat-label">Chính xác</span>
      </div>
    `;

    const actions = $("#learn-complete-actions");
    if (stillWrong) {
      actions.innerHTML = `
        <button class="btn btn-secondary" id="lc-restart" type="button">↺ Học lại từ đầu</button>
        <button class="btn btn-primary" id="lc-review" type="button">⚡ Ôn ${stillWrong} câu sai</button>
      `;
      $("#lc-review").addEventListener("click", () => {
        elModal.hidden = true;
        startReviewRound();
        renderQuestion();
      });
    } else {
      // Tự động reset tiến trình đã học xong hoàn chỉnh để lần vào tiếp theo bắt đầu lại từ đầu
      localStorage.removeItem(STORAGE_KEY);
      actions.innerHTML = `
        <a class="btn btn-secondary" href="index.html">⌂ Trang chủ</a>
        <button class="btn btn-primary" id="lc-restart" type="button">↺ Học lại từ đầu</button>
      `;
    }
    document.querySelector("#lc-restart")?.addEventListener("click", () => {
      elModal.hidden = true;
      startFreshRound();
      renderQuestion();
    });

    elModal.hidden = false;
    document.body.style.overflow = "hidden";
  };

  /* ── KEYBOARD ── */
  document.addEventListener("keydown", (e) => {
    if (elModal && !elModal.hidden) return;
    if (elCard.classList.contains("leaving")) return;
    // 1-4 chọn đáp án
    if (/^[1-4]$/.test(e.key)) {
      const options = elOptions.querySelectorAll(".learn-option");
      const idx = Number(e.key) - 1;
      if (!answered && options[idx]) handleChoice(options[idx]);
      return;
    }
    // Phím bất kỳ khi đã trả lời sai → tiếp tục
    if (answered && elFooter && !elFooter.hidden) {
      if (["Enter", " ", "ArrowRight"].includes(e.key)) {
        e.preventDefault();
        advance();
      }
    }
  });

  /* ── EVENTS ── */
  elOptions.addEventListener("click", (e) => {
    const btn = e.target.closest(".learn-option");
    if (btn && !answered) handleChoice(btn);
  });

  elContinue.addEventListener("click", () => advance());

  elModal.addEventListener("click", (e) => {
    if (e.target === elModal) {
      elModal.hidden = true;
      document.body.style.overflow = "";
    }
  });

  // Nút Trộn câu hỏi (Xáo trộn các câu chưa làm)
  document.querySelector("#btn-shuffle")?.addEventListener("click", (e) => {
    const btn = e.currentTarget;
    const originalHtml = btn.innerHTML;
    btn.innerHTML = "<span>✓ Đã trộn!</span>";
    btn.style.color = "var(--success)";
    btn.style.borderColor = "var(--success)";
    setTimeout(() => {
      btn.innerHTML = originalHtml;
      btn.style.color = "";
      btn.style.borderColor = "";
    }, 1200);

    if (queue.length - qIndex <= 1) {
      queue = shuffle(queue);
      qIndex = 0;
    } else {
      const past = queue.slice(0, qIndex);
      const remaining = shuffle(queue.slice(qIndex));
      queue = [...past, ...remaining];
    }
    saveState();
    elCard.classList.remove("entering");
    elCard.classList.add("leaving");
        setTimeout(() => {
      elCard.classList.remove("leaving");
      renderQuestion();
    }, 320);
  });

  // Nút Reset (Học lại từ đầu)
  document.querySelector("#btn-reset")?.addEventListener("click", () => {
    if (window.confirm("Bạn có chắc chắn muốn đặt lại toàn bộ tiến trình học từ đầu không?")) {
      elCard.classList.remove("entering");
      elCard.classList.add("leaving");
          setTimeout(() => {
        elCard.classList.remove("leaving");
        startFreshRound();
        renderQuestion();
      }, 320);
    }
  });

  /* ── UTIL ── */
  function escHtml(str) {
    const d = document.createElement("div");
    d.textContent = str;
    return d.innerHTML;
  }

  /* ── INIT ── */
  loadState();
  renderQuestion();
})();
