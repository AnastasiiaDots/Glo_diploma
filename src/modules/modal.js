const modal = () => {
  const modal = document.querySelector(".modal-callback");
  const overlay = document.querySelector(".modal-overlay ");
  const callbackBtn = document.querySelectorAll(".callback-btn");

  callbackBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.display = "block";
      overlay.style.display = "block";
    });
  });

  const closeModal = () => {
    modal.style.display = "none";
    overlay.style.display = "none";
  };

  modal.addEventListener("click", (e) => {
    if (
      !e.target.closest("body") ||
      e.target.matches("img[alt='modal-close']")
    ) {
      closeModal();
    }
  });

  overlay.addEventListener("click", () => {
    closeModal();
  });
};
export default modal;
