const accordeon = () => {
  const accElems = document.querySelectorAll(".accordeon .element");
  const elemContent = document.querySelectorAll(".accordeon .element-content");

  const toggleActiveClass = (index) => {
    accElems.forEach((el, i) => {
      if (i === index) {
        el.classList.toggle("active");
        if (el.classList.contains("active")) {
          elemContent[i].style.display = "block";
        } else {
          elemContent[i].style.display = "none";
        }
      } else {
        el.classList.remove("active");
        elemContent[i].style.display = "none";
      }
    });
  };

  accElems.forEach((el, index) => {
    el.addEventListener("click", () => {
      toggleActiveClass(index);
    });
  });
};

export default accordeon;
