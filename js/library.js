(() => {
  "use strict";

  const STORAGE_KEY = "prmStudyProgress";
  const list = document.querySelector("#library-list");
  const searchInput = document.querySelector("#question-search");
  const visibleCount = document.querySelector("#visible-count");
  const emptyState = document.querySelector("#library-empty");
  const revealButton = document.querySelector("#reveal-all");
  const backToTop = document.querySelector("#back-to-top");
  let activeFilter = "all";
  let allRevealed = false;

  const escapeHtml = (value) => {
    const node = document.createElement("div");
    node.textContent = value;
    return node.innerHTML;
  };

  const loadProgress = () => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (saved && Array.isArray(saved.known)) return saved;
    } catch {
      // Nếu dữ liệu lỗi, tạo lại tiến trình tối thiểu.
    }
    return { order: questions.map((question) => question.id), current: 0, known: [] };
  };

  let progress = loadProgress();
  const saveProgress = () => localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  const isKnown = (id) => progress.known.includes(id);
  const normalize = (value) => value.toLocaleLowerCase("vi").normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  const getFilteredQuestions = () => {
    const keyword = normalize(searchInput.value.trim());
    return questions.filter((question) => {
      const matchesStatus = activeFilter === "all"
        || (activeFilter === "known" && isKnown(question.id))
        || (activeFilter === "unknown" && !isKnown(question.id));
      const searchableText = normalize([
        question.question,
        ...question.options.map((option) => option.text)
      ].join(" "));
      return matchesStatus && (!keyword || searchableText.includes(keyword));
    });
  };

  const render = () => {
    const filtered = getFilteredQuestions();
    visibleCount.textContent = filtered.length;
    emptyState.hidden = filtered.length !== 0;

    list.innerHTML = filtered.map((question) => {
      const correctOption = question.options.find((option) => option.key === question.correctAnswer);
      const options = question.options.map((option) => `
        <div class="library-option ${option.key === question.correctAnswer ? "correct" : ""}">
          <b>${option.key}</b>
          <span>${escapeHtml(option.text)}${option.key === question.correctAnswer ? " ✓" : ""}</span>
        </div>`).join("");
      return `
        <article class="library-item${allRevealed ? " open" : ""}" data-id="${question.id}">
          <button class="library-question" type="button" aria-expanded="${allRevealed}">
            <span class="library-number">${String(question.id).padStart(2, "0")}</span>
            <strong>${escapeHtml(question.question)}</strong>
            <span class="library-chevron">⌄</span>
          </button>
          <div class="library-answer">
            ${options}
            <p class="library-explanation"><strong>Giải thích:</strong> ${escapeHtml(correctOption.explanation)}</p>
            <button class="btn btn-outline known-toggle${isKnown(question.id) ? " is-known" : ""}" type="button">
              ${isKnown(question.id) ? "✓ Đã nhớ" : "Đánh dấu đã nhớ"}
            </button>
          </div>
        </article>`;
    }).join("");
  };

  list.addEventListener("click", (event) => {
    const item = event.target.closest(".library-item");
    if (!item) return;

    if (event.target.closest(".library-question")) {
      item.classList.toggle("open");
      item.querySelector(".library-question").setAttribute("aria-expanded", String(item.classList.contains("open")));
      return;
    }

    if (event.target.closest(".known-toggle")) {
      const id = Number(item.dataset.id);
      if (isKnown(id)) progress.known = progress.known.filter((knownId) => knownId !== id);
      else progress.known.push(id);
      saveProgress();
      render();
    }
  });

  searchInput.addEventListener("input", render);
  document.querySelector("#library-filters").addEventListener("click", (event) => {
    const button = event.target.closest(".filter-btn");
    if (!button) return;
    activeFilter = button.dataset.filter;
    document.querySelectorAll(".filter-btn").forEach((item) => item.classList.toggle("active", item === button));
    render();
  });

  revealButton.addEventListener("click", () => {
    allRevealed = !allRevealed;
    revealButton.textContent = allRevealed ? "Ẩn tất cả đáp án" : "Hiện tất cả đáp án";
    document.querySelectorAll(".library-item").forEach((item) => {
      item.classList.toggle("open", allRevealed);
      item.querySelector(".library-question").setAttribute("aria-expanded", String(allRevealed));
    });
  });

  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("show", window.scrollY > 500);
  }, { passive: true });
  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  render();
})();
