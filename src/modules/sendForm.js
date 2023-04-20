import validation from "./validation";

const sendForm = () => {
  const form = document.querySelector('form[name="form-callback"]');
  const input = form.querySelectorAll("input");
  const statusBlock = document.createElement("div");
  const loadText = "Идет отправка...";
  const errorText = "ОШИБКА...";
  const successText = "Отправлено";

  const sendData = (data) =>
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => {
        console.error("Error sending data:", error);
        throw new Error("Unable to send data. Please try again later.");
      });

  const submitForm = (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const formBody = {};

    formData.forEach((val, key) => {
      val && (formBody[key] = val);
    });

    if (validation(input)) {
      statusBlock.textContent = loadText;
      form.appendChild(statusBlock);
      sendData(formBody)
        .then(() => {
          statusBlock.textContent = successText;
          setTimeout(() => {
            statusBlock.remove();
          }, 3000);
          form.reset();
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
          console.error("Error sending form data:", error);
        });
    }
  };

  form.addEventListener("submit", submitForm);
};

export default sendForm;
