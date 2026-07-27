(() => {
  "use strict";

  const STORAGE_KEY = "prmStudyProgress";
  const allIds = questions.map((question) => question.id);
  const questionMap = new Map(questions.map((question) => [question.id, question]));

  const shuffle = (items) => {
    const result = [...items];
    for (let index = result.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
    }
    return result;
  };

  const loadState = () => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (saved && Array.isArray(saved.order) && Array.isArray(saved.known)) {
        const validOrder = saved.order.filter((id) => questionMap.has(id));
        return {
          order: validOrder.length ? validOrder : shuffle(allIds),
          current: Math.min(Math.max(0, Number(saved.current) || 0), Math.max(0, validOrder.length - 1)),
          known: [...new Set(saved.known.filter((id) => questionMap.has(id)))]
        };
      }
    } catch {
      // Dữ liệu cũ không hợp lệ sẽ được tạo lại.
    }
    return { order: shuffle(allIds), current: 0, known: [] };
  };

  const state = loadState();
  const elements = {
    card: document.querySelector("#flashcard"),
    counter: document.querySelector("#card-counter"),
    knownCounter: document.querySelector("#known-counter"),
    progress: document.querySelector("#memory-progress-fill"),
    frontNumber: document.querySelector("#front-number"),
    frontQuestion: document.querySelector("#front-question"),
    backKey: document.querySelector("#back-key"),
    backAnswer: document.querySelector("#back-answer"),
    backExplanation: document.querySelector("#back-explanation"),
    prev: document.querySelector("#study-prev"),
    next: document.querySelector("#study-next"),
    completeModal: document.querySelector("#study-complete-modal"),
    completeMessage: document.querySelector("#study-complete-message"),
    reviewUnknown: document.querySelector("#review-unknown")
  };

  const save = () => localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  const currentQuestion = () => questionMap.get(state.order[state.current]);
  const isKnown = (id) => state.known.includes(id);

  const flipCard = (forceBack) => {
    const shouldShowBack = typeof forceBack === "boolean"
      ? forceBack
      : !elements.card.classList.contains("flipped");
    elements.card.classList.toggle("flipped", shouldShowBack);
    elements.card.setAttribute("aria-pressed", String(shouldShowBack));
  };

  const render = () => {
    const question = currentQuestion();
    if (!question) return;
    const correctOption = question.options.find((option) => option.key === question.correctAnswer);
    const currentPosition = state.current + 1;

    flipCard(false);
    elements.counter.textContent = `Thẻ ${currentPosition} / ${state.order.length}`;
    elements.knownCounter.textContent = `Đã nhớ ${state.known.length} / ${questions.length}`;
    elements.progress.style.width = `${(state.known.length / questions.length) * 100}%`;
    elements.frontNumber.textContent = `Câu ${String(question.id).padStart(2, "0")}`;
    elements.frontQuestion.textContent = question.question;
    elements.backKey.textContent = question.correctAnswer;
    elements.backAnswer.textContent = correctOption.text;
    elements.backExplanation.textContent = correctOption.explanation;
    elements.prev.disabled = state.current === 0;
    elements.next.disabled = state.current === state.order.length - 1;

    const rememberedButton = document.querySelector("#remembered");
    rememberedButton.classList.toggle("already-known", isKnown(question.id));
    rememberedButton.querySelector("div").firstChild.textContent = isKnown(question.id) ? "Đã đánh dấu" : "Đã nhớ";
  };

  const showComplete = () => {
    const unknownCount = questions.length - state.known.length;
    elements.completeMessage.textContent = unknownCount
      ? `Bạn đã nhớ ${state.known.length}/${questions.length} câu. Còn ${unknownCount} câu cần ôn lại.`
      : "Tuyệt vời! Bạn đã đánh dấu nhớ toàn bộ 100 câu.";
    elements.reviewUnknown.hidden = unknownCount === 0;
    elements.completeModal.hidden = false;
    document.body.style.overflow = "hidden";
  };

  const move = (direction, showModalAtEnd = false) => {
    const nextIndex = state.current + direction;
    if (nextIndex >= state.order.length) {
      if (showModalAtEnd) showComplete();
      return;
    }
    if (nextIndex < 0) return;
    state.current = nextIndex;
    save();
    render();
  };

  const markCurrent = (remembered) => {
    const question = currentQuestion();
    state.known = state.known.filter((id) => id !== question.id);
    if (remembered) state.known.push(question.id);
    save();
    move(1, true);
    if (state.current === state.order.length - 1 && state.order.length === 1) showComplete();
  };

  elements.card.addEventListener("click", () => flipCard());
  elements.prev.addEventListener("click", () => move(-1));
  elements.next.addEventListener("click", () => move(1));
  document.querySelector("#remembered").addEventListener("click", () => markCurrent(true));
  document.querySelector("#review-again").addEventListener("click", () => markCurrent(false));

  document.querySelector("#reset-study").addEventListener("click", () => {
    const confirmed = window.confirm("Xóa tiến trình ghi nhớ và học lại toàn bộ 100 câu?");
    if (!confirmed) return;
    state.order = shuffle(allIds);
    state.current = 0;
    state.known = [];
    save();
    render();
  });

  elements.reviewUnknown.addEventListener("click", () => {
    const unknownIds = allIds.filter((id) => !state.known.includes(id));
    if (!unknownIds.length) return;
    state.order = shuffle(unknownIds);
    state.current = 0;
    save();
    elements.completeModal.hidden = true;
    document.body.style.overflow = "";
    render();
  });

  elements.completeModal.addEventListener("click", (event) => {
    if (event.target === elements.completeModal) {
      elements.completeModal.hidden = true;
      document.body.style.overflow = "";
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.target.matches("input, textarea")) return;
    if (event.code === "Space") {
      event.preventDefault();
      flipCard();
    }
    if (event.key === "ArrowLeft") move(-1);
    if (event.key === "ArrowRight") move(1);
  });

  render();
})();
