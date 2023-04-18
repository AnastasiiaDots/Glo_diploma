const slider = () => {
  const sliderBlock = document.querySelector(".top-slider");
  const slides = document.querySelectorAll(".item");
  const timeInterval = 3000;
  let currentSlide = 0;
  let interval;

  const dots = document.createElement("ul");
  dots.classList.add("slick-dots");
  sliderBlock.appendChild(dots);

  slides.forEach((slide, index) => {
    const dot = document.createElement("li");
    dot.classList.add("slick-dot");
    if (index === 0) dot.classList.add("slick-active");
    dots.appendChild(dot);
  });

  // const dotList = dots.querySelectorAll("li");
  // dotList.forEach((dot, index) => {
  //   dot.addEventListener("click", () => {
  //     clearTimeout(interval);

  //     currentSlide = index;
  //     showSlides();
  //   });
  // });

  const hideSlides = () => {
    slides.forEach((slide) => {
      slide.style.display = "none";
    });
  };

  const showSlides = () => {
    hideSlides();

    slides[currentSlide].style.display = "block";

    const activeDot = dots.querySelector(".slick-active");
    if (activeDot) {
      activeDot.classList.remove("slick-active");
    }
    dots.children[currentSlide].classList.add("slick-active");

    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    interval = setTimeout(showSlides, timeInterval);
  };

  showSlides();
};

export default slider;
