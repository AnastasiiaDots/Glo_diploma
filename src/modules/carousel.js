const carousel = () => {
  const carouselElements = document.querySelectorAll("#service-element");
  const arrowRight = document.querySelector(".arrow-right");
  const arrowLeft = document.querySelector(".arrow-left");
  const modal = document.querySelector(".modal-callback");
  const overlay = document.querySelector(".modal-overlay ");
  const callbackBtn = document.querySelectorAll(".services-elements .element ");

  let currentElementIndex = 0;

  // Initially show the first three elements and hide the rest
  for (let i = 0; i < carouselElements.length; i++) {
    if (i < 3) {
      carouselElements[i].style.display = "block";
    } else {
      carouselElements[i].style.display = "none";
    }
  }

  arrowRight.addEventListener("click", () => {
    // Hide the current three elements
    for (let i = currentElementIndex; i < currentElementIndex + 3; i++) {
      carouselElements[i].style.display = "none";
    }

    // Show the next three elements
    currentElementIndex += 3;
    if (currentElementIndex >= carouselElements.length) {
      currentElementIndex = 0;
    }
    for (let i = currentElementIndex; i < currentElementIndex + 3; i++) {
      carouselElements[i].style.display = "block";
    }
  });

  arrowLeft.addEventListener("click", () => {
    // Hide the current three elements
    for (let i = currentElementIndex; i < currentElementIndex + 3; i++) {
      carouselElements[i].style.display = "none";
    }

    // Show the previous three elements
    currentElementIndex -= 3;
    if (currentElementIndex < 0) {
      currentElementIndex = carouselElements.length - 3;
    }
    for (let i = currentElementIndex; i < currentElementIndex + 3; i++) {
      carouselElements[i].style.display = "block";
    }
  });

  callbackBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.display = "block";
      overlay.style.display = "block";
    });
  });
};

export default carousel;
