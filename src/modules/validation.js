const validation = (input) => {
  const phoneRegex = /^\+?\d{1,3}(\d{3}){2}\d{4}$/;
  const nameRegex = /^[\u0400-\u04FF\s]{2,}$/;
  let success = true;

  if (input && input.length) {
    input.forEach((item) => {
      item.classList.remove("error");
      switch (item.getAttribute("name")) {
        case "fio":
          if (item.value.trim().length < 2 || !nameRegex.test(item.value))
            break;
          return;
        case "tel":
          if (!phoneRegex.test(item.value)) break;
        default:
          return;
      }
      item.classList.add("error");
      success = false;
    });
  }
  return success;
};
export default validation;
