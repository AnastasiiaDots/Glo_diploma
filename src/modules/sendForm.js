const sendForm = () => {
  const form = document.querySelector('form[name="form-callback"]');
  const nameInput = form.querySelector('input[name="fio"]');
  const telInput = form.querySelector('input[name="tel"]');

  const sendData = (data) =>
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

  // Prevent form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
};

export default sendForm;
