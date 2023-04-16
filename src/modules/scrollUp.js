const scrollUp = () => {
  const servicesSection = document.querySelector("#services");
  const upArrow = document.querySelector(".up");

  upArrow.style.display = "none";

  window.addEventListener("scroll", () => {
    if (window.pageYOffset >= servicesSection.offsetTop) {
      upArrow.style.display = "block";
    } else {
      upArrow.style.display = "none";
    }
  });

  upArrow.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
};

export default scrollUp;
