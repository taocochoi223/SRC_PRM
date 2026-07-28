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

  /* ── CONFIG BATCH ── */
  const BATCH_SIZE = 7; // Học theo chặng 7 câu giống Quizlet

  /* ── SOUND TOGGLE ── */
  const SOUND_KEY = "prmLearnSound";
  let soundOn = localStorage.getItem(SOUND_KEY) !== "off";

  // Wrapper — chỉ phát khi soundOn = true
  const sound = (fn) => { if (soundOn) fn(); };

  /* ── STATE ── */
  let queue        = []; // danh sách id câu hỏi trong chặng hiện tại (tối đa 7 câu)
  let pendingIds   = []; // các id chưa vào chặng học
  let completedCount = 0;// số câu đã hoàn thành trọn vẹn
  let qIndex       = 0;  // vị trí hiện tại trong chặng queue (0-6)
  let round        = 1;  // số thứ tự chặng (Mỗi chặng = 7 câu)
  let correct      = 0;  // tổng đúng trong toàn phiên
  let wrong        = 0;  // tổng sai trong toàn phiên
  let wrongIds     = []; // toàn bộ ids từng sai (để có thể ôn lại cuối phiên)
  let batchWrongIds= []; // các ids sai TRONG chặng 7 câu hiện tại (để lặp lại ngay lập tức)
  let currentBatchTotal = 7; // tổng số câu của chặng ban đầu
  let isBatchRetry = false;  // đang ở chế độ làm lại các câu sai của chặng hiện tại?
  let answered     = false;  // đã chọn đáp án chưa?
  let autoTimer    = null;

  const allQuestions = questions; // từ questions.js

  /* Map để tra nhanh */
  const qMap = new Map(allQuestions.map((q) => [q.id, q]));

  /* ── LOAD / SAVE ── */
  const loadState = () => {
    try {
      const s = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (s && (Array.isArray(s.queue) || Array.isArray(s.pendingIds))) {
        // Tự động reset nếu đã học xong hết và không còn gì để làm
        if ((s.qIndex >= (s.queue ? s.queue.length - 1 : 0) || s.isCompleted) && (!s.pendingIds || s.pendingIds.length === 0) && (!s.batchWrongIds || s.batchWrongIds.length === 0) && (!s.wrongIds || s.wrongIds.length === 0)) {
          startFreshRound();
          return;
        }
        if (!s.pendingIds) {
          // Migration từ dữ liệu phiên bản cũ (khi queue chứa thẳng 100 câu)
          const allRem = s.queue.slice(s.qIndex || 0);
          queue = allRem.slice(0, BATCH_SIZE);
          pendingIds = allRem.slice(BATCH_SIZE);
          qIndex = 0;
          completedCount = s.qIndex || 0;
          currentBatchTotal = queue.length;
        } else {
          queue        = s.queue || [];
          pendingIds   = s.pendingIds || [];
          qIndex       = Math.min(s.qIndex || 0, Math.max(0, queue.length - 1));
          completedCount = s.completedCount || 0;
          currentBatchTotal = s.currentBatchTotal || queue.length || BATCH_SIZE;
        }
        round        = s.round || 1;
        correct      = s.correct || 0;
        wrong        = s.wrong   || 0;
        wrongIds     = s.wrongIds || [];
        batchWrongIds= s.batchWrongIds || [];
        isBatchRetry = s.isBatchRetry || false;
        return;
      }
    } catch { /* ignore */ }
    startFreshRound();
  };

  const saveState = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      queue, pendingIds, completedCount, qIndex, round, correct, wrong, wrongIds, batchWrongIds, currentBatchTotal, isBatchRetry
    }));
  };

  const startFreshRound = (ordered = false) => {
    const ids = ordered
      ? allQuestions.map((q) => q.id).sort((a, b) => a - b)
      : shuffle(allQuestions.map((q) => q.id));
    queue            = ids.slice(0, BATCH_SIZE);
    pendingIds       = ids.slice(BATCH_SIZE);
    completedCount   = 0;
    currentBatchTotal= queue.length;
    isBatchRetry     = false;
    qIndex           = 0;
    round            = 1;
    correct          = 0;
    wrong            = 0;
    wrongIds         = [];
    batchWrongIds    = [];
    saveState();
  };

  const startReviewRound = () => {
    // Chỉ ôn lại toàn bộ những câu từng trả lời sai
    const allMissed = shuffle([...new Set(wrongIds)]);
    queue            = allMissed.slice(0, BATCH_SIZE);
    pendingIds       = allMissed.slice(BATCH_SIZE);
    completedCount   = 0;
    currentBatchTotal= queue.length;
    isBatchRetry     = false;
    wrongIds         = [];
    batchWrongIds    = [];
    qIndex           = 0;
    round            = 1;
    saveState();
  };

  /* ── ELEMENTS ── */
  const elProgressBar = $("#learn-progress-bar");
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

  /* ── PROGRESS BAR RENDER (THEO TỪNG CHẶNG) ── */
  const renderProgressBar = (isAllDone = false) => {
    if (!elProgressBar) return;
    const totalAll = completedCount + pendingIds.length + (currentBatchTotal || queue.length || BATCH_SIZE);
    const totalStages = Math.max(1, Math.ceil(totalAll / BATCH_SIZE));
    const currentStageIdx = Math.min(totalStages - 1, Math.floor(completedCount / BATCH_SIZE));

    let html = "";
    for (let i = 0; i < totalStages; i++) {
      let fillWidth = "0%";
      let extraClass = "";
      if (isAllDone || i < currentStageIdx) {
        fillWidth = "100%";
        extraClass = "completed";
      } else if (i === currentStageIdx) {
        const stageDone = isBatchRetry ? (currentBatchTotal - queue.length + qIndex) : qIndex;
        const stagePct = Math.min(100, Math.max(0, Math.round((stageDone / Math.max(1, currentBatchTotal)) * 100)));
        fillWidth = `${stagePct}%`;
        extraClass = "active";
      }
      html += `
        <div class="learn-progress-seg ${extraClass}" title="Chặng ${i + 1} (${i * BATCH_SIZE + 1}–${Math.min(totalAll, (i + 1) * BATCH_SIZE)})">
          <div class="learn-progress-seg-fill" style="width: ${fillWidth};"></div>
        </div>`;
    }
    elProgressBar.innerHTML = html;
  };

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
    const totalAll = completedCount + pendingIds.length + currentBatchTotal;
    const currentGlobal = Math.min(totalAll, completedCount + Math.min(qIndex, currentBatchTotal) + 1);
    const totalRemaining = pendingIds.length + queue.length - qIndex;

    // Header stats
    elHdrCorr.textContent  = correct;
    elHdrTotal.textContent = correct + wrong;

    // Progress (Chia chặng động)
    renderProgressBar(false);

    // Round info
    elRoundBadge.textContent = `Chặng ${round}`;
    if (isBatchRetry) {
      elRoundCount.textContent = `🔁 Ôn lại ${queue.length - qIndex} câu chưa thuộc • Còn ${totalRemaining} câu tổng`;
    } else {
      elRoundCount.textContent = `Chùm ${queue.length} câu • Còn ${totalRemaining} câu tổng`;
    }

    // Card
    elQNum.textContent     = `Câu ${currentGlobal} / ${totalAll}`;
    elQuestion.textContent = q.question;
    elChooseLabel.textContent = "Chọn đáp án đúng";
    elHint.hidden          = true;
    elHint.className       = "learn-feedback-hint";
    elFooter.hidden        = true;

    // Options
    elOptions.innerHTML = opts.map((opt, i) => `
      <div class="learn-option" role="button" tabindex="0" data-correct="${opt.isCorrect}" aria-pressed="false">
        <span class="learn-option-num">${i + 1}</span>
        <span class="learn-option-text">${escHtml(opt.text)}</span>
        <span class="learn-option-icon" aria-hidden="true"></span>
      </div>
    `).join("");

    // Kích hoạt hiệu ứng chuyển tiếp mượt mà khi hiển thị câu hỏi mới
    elCard.classList.remove("leaving", "entering");
    void elCard.offsetWidth; // Force DOM reflow
    elCard.classList.add("entering");
  };

  /* ── RIPPLE EFFECT ── */
  const addRipple = (btn, e) => {
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 1.5;
    const x = (e.clientX ?? rect.left + rect.width / 2) - rect.left - size / 2;
    const y = (e.clientY ?? rect.top  + rect.height / 2) - rect.top  - size / 2;
    const ripple = document.createElement("span");
    ripple.className = "learn-option-ripple";
    Object.assign(ripple.style, {
      width: `${size}px`, height: `${size}px`,
      left: `${x}px`,   top:  `${y}px`
    });
    btn.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
  };

  /* ── HAPTIC ── */
  const haptic = (pattern) => {
    if (navigator.vibrate) navigator.vibrate(pattern);
  };

  /* ── HANDLE CHOICE ── */
  const handleChoice = (btn, evt) => {
    if (answered) return;
    answered = true;

    // Ripple ngay lập tức
    if (evt) addRipple(btn, evt);

    const isCorrect = btn.dataset.correct === "true";

    // Disable all
    elOptions.querySelectorAll(".learn-option").forEach((b) => {
      b.disabled = true;
      b.classList.add("disabled");
      b.removeAttribute("tabindex");
      b.setAttribute("aria-pressed", "false");
    });

    if (isCorrect) {
      correct++;
      sound(playCorrect);
      haptic([30]);          // Rung nhẹ 1 lần — đúng
      btn.classList.add("correct");
      btn.setAttribute("aria-pressed", "true");
      btn.style.setProperty("--auto-next", `${AUTO_NEXT_MS}ms`);

      // Dim others
      elOptions.querySelectorAll(".learn-option:not(.correct)").forEach((b) => b.classList.add("dimmed"));

      elHint.textContent = "✓ Chính xác!";
      elHint.classList.add("is-correct");
      elHint.hidden = false;

      autoTimer = setTimeout(() => advance(), AUTO_NEXT_MS);

    } else {
      wrong++;
      sound(playWrong);
      haptic([50, 30, 50]);  // Rung 2 lần — sai
      const id = queue[qIndex];
      if (!wrongIds.includes(id)) wrongIds.push(id);
      if (!batchWrongIds.includes(id)) batchWrongIds.push(id);

      btn.classList.add("wrong");

      elOptions.querySelectorAll(".learn-option").forEach((b) => {
        if (b.dataset.correct === "true") b.classList.add("correct");
        else if (b !== btn) b.classList.add("dimmed");
      });

      elHint.textContent = "Đừng lo, bạn vẫn đang học mà!";
      elHint.hidden = false;
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

      if (nextIndex >= queue.length) {
        // Hết chặng / chùm 7 câu hiện tại
        if (batchWrongIds.length > 0) {
          // ⚠️ Có câu trả lời sai trong chặng 7 câu này -> Lặp lại ngay lập tức các câu sai đó cho đến khi thuộc (đúng hết)!
          queue = shuffle([...batchWrongIds]);
          batchWrongIds = [];
          qIndex = 0;
          isBatchRetry = true;
          saveState();
          renderQuestion();
          return;
        }

        // ✅ Đã hoàn thành hoàn hảo chặng 7 câu hiện tại!
        completedCount += currentBatchTotal;

        if (pendingIds.length === 0) {
          // Đã hoàn thành trọn vẹn toàn bộ các câu hỏi trong khóa!
          renderProgressBar(true);
          showComplete();
          return;
        }

        // Bước sang chặng 7 câu tiếp theo
        queue = pendingIds.slice(0, BATCH_SIZE);
        pendingIds = pendingIds.slice(BATCH_SIZE);
        currentBatchTotal = queue.length;
        round++;
        qIndex = 0;
        batchWrongIds = [];
        isBatchRetry = false;
        saveState();
        renderQuestion();
      } else {
        qIndex = nextIndex;
        saveState();
        renderQuestion();
      }
    }, 230);
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
    // Không kích hoạt chọn đáp án nếu người dùng đang bôi đen (highlight) text để copy hoặc dịch
    const sel = window.getSelection();
    if (sel && sel.toString().trim().length > 0) return;

    const btn = e.target.closest(".learn-option");
    if (btn && !answered) handleChoice(btn, e);
  });
  elOptions.addEventListener("keydown", (e) => {
    if (["Enter", " "].includes(e.key)) {
      const btn = e.target.closest(".learn-option");
      if (btn && !answered) {
        e.preventDefault();
        handleChoice(btn, e);
      }
    }
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

    // Xáo trộn toàn bộ các câu còn lại và gom vào các chặng 7 câu mới
    const remaining = [...queue.slice(qIndex), ...pendingIds];
    const shuffledRem = shuffle([...new Set(remaining)]);
    queue = shuffledRem.slice(0, BATCH_SIZE);
    pendingIds = shuffledRem.slice(BATCH_SIZE);
    currentBatchTotal = queue.length;
    qIndex = 0;
    batchWrongIds = [];
    isBatchRetry = false;
    saveState();

    elCard.classList.remove("entering");
    elCard.classList.add("leaving");
    setTimeout(() => {
      elCard.classList.remove("leaving");
      renderQuestion();
    }, 230);
  });

  // Nút Thứ tự — sắp xếp câu hỏi theo id gốc từ 1 → 100 và chia chặng 7 câu
  document.querySelector("#btn-order")?.addEventListener("click", (e) => {
    const btn = e.currentTarget;
    const originalHtml = btn.innerHTML;
    btn.innerHTML = "<span>✓ Đã sắp xếp!</span>";
    btn.style.color = "var(--blue)";
    btn.style.borderColor = "var(--blue)";
    btn.style.background = "var(--blue-light)";
    setTimeout(() => {
      btn.innerHTML = originalHtml;
      btn.style.color = "";
      btn.style.borderColor = "";
      btn.style.background = "";
    }, 1400);

    // Bắt đầu lại theo đúng thứ tự 1 → 100 từng chặng 7 câu
    startFreshRound(true);

    elCard.classList.remove("entering");
    elCard.classList.add("leaving");
    setTimeout(() => {
      elCard.classList.remove("leaving");
      renderQuestion();
    }, 230);
  });

  // Nút Reset (Học lại từ đầu)
  document.querySelector("#btn-reset")?.addEventListener("click", () => {
    if (window.confirm("Bạn có chắc chắn muốn đặt lại toàn bộ tiến trình học từ đầu không?\n(Tiến trình sẽ được xóa và bắt đầu lại từ câu 1)")) {
      elCard.classList.remove("entering");
      elCard.classList.add("leaving");
      setTimeout(() => {
        elCard.classList.remove("leaving");
        startFreshRound();
        renderQuestion();
      }, 230);
    }
  });

  // Nút tắt/bật tiếng
  const btnSound = document.querySelector("#btn-sound");
  const updateSoundBtn = () => {
    if (!btnSound) return;
    btnSound.textContent = soundOn ? "🔊" : "🔇";
    btnSound.title = soundOn ? "Tắt tiếng" : "Bật tiếng";
    btnSound.setAttribute("aria-label", soundOn ? "Tắt tiếng" : "Bật tiếng");
    btnSound.classList.toggle("sound-off", !soundOn);
  };
  btnSound?.addEventListener("click", () => {
    soundOn = !soundOn;
    localStorage.setItem(SOUND_KEY, soundOn ? "on" : "off");
    updateSoundBtn();
    // Preview âm thanh khi bật lại
    if (soundOn) sound(playCorrect);
  });
  updateSoundBtn();

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
