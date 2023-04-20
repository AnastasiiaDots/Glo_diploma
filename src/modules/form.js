import validation from "./validation";

const form = () => {
  const inputName = document.querySelectorAll('input[name="fio"]');

  const inputPhone = document.querySelectorAll('input[name="tel"]');

  inputName.forEach((input) => {
    input.addEventListener("input", ({ target }) => {
      target.value = target.value.replace(/[^а-яёЁ\s-]/gi, "");

      if (target.classList.contains("error")) {
        validation([input]);
      }
    });
  });

  inputPhone.forEach((input) => {
    input.addEventListener("input", ({ target }) => {
      target.value = target.value.replace(/[^\d\s()+-]/gi, "");

      target.classList.contains("error") && validation([input]);
    });
  });
};

export default form;
