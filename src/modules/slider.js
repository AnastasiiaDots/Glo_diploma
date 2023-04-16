const slider = () => {
  const sliderBlock = document.querySelector(".top-slider ");
  const slides = document.querySelectorAll(".item");
  const timeInterval = 2000;
  let currentSlide = 0;
  let interval;

  const dotContainer = document.createElement("div");
  dotContainer.classList.add("slider-dots");

  slides.forEach((slide, index) => {
    const dot = document.createElement("button");
    dot.classList.add("dot");
    dot.setAttribute("data-slide", index);
    dotContainer.appendChild(dot);
  });

  // define a function to show the next slide
  const showNextSlide = () => {
    // hide the current slide
    slides[currentSlide].classList.remove("active");
    // calculate the index of the next slide
    currentSlide = (currentSlide + 1) % slides.length;
    // show the next slide
    slides[currentSlide].classList.add("active");
  };

  // call the showNextSlide function every 3 seconds
  setInterval(showNextSlide, 3000);

  console.log(sliderBlock);
  console.log(slides);
};

export default slider;

// const slider = () => {
//   const slider = document.querySelector(".top-slider");
//   const sliderItems = slider.querySelectorAll(".item");
//   const dots = document.createElement("ul");
//   dots.classList.add("slick-dots");

//   // Создаем точки для каждого слайда
//   for (let i = 0; i < sliderItems.length; i++) {
//     const dot = document.createElement("li");
//     dot.setAttribute("data-slide", i);
//     dots.appendChild(dot);
//   }

//   // Добавляем точки к слайдеру
//   slider.appendChild(dots);

//   // Автопрокрутка слайдов
//   let currentSlide = 0;
//   const slideInterval = setInterval(() => {
//     currentSlide++;
//     if (currentSlide >= sliderItems.length) {
//       currentSlide = 0;
//     }
//     showSlide(currentSlide);
//   }, 3000);

//   // Функция отображения текущего слайда
//   function showSlide(slideIndex) {
//     // Скрываем все слайды
//     for (let i = 0; i < sliderItems.length; i++) {
//       sliderItems[i].style.display = "none";
//     }
//     // Отображаем текущий слайд
//     sliderItems[slideIndex].style.display = "block";
//     // Выделяем точку текущего слайда
//     const dotsList = dots.querySelectorAll("li");
//     for (let i = 0; i < dotsList.length; i++) {
//       if (i === slideIndex) {
//         dotsList[i].classList.add("slick-active");
//       } else {
//         dotsList[i].classList.remove("slick-active");
//       }
//     }
//   }

//   // Обработчик клика по точке
//   dots.addEventListener("click", (event) => {
//     if (event.target.tagName === "LI") {
//       clearInterval(slideInterval);
//       const slideIndex = parseInt(event.target.getAttribute("data-slide"));
//       currentSlide = slideIndex;
//       showSlide(slideIndex);
//     }
//   });
// };
