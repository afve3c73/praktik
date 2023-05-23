import "./style.css";
function setupCarousel(carouselId) {
  const carousel = document.querySelector(`#${carouselId} .carousel-images`);
  const carouselImages = carousel.querySelectorAll(".carousel-image");
  const carouselDots = document.querySelectorAll(`#${carouselId} .dot`);
  const arrowLeft = document.querySelector(`#${carouselId} .left-arrow`);
  const arrowRight = document.querySelector(`#${carouselId} .right-arrow`);
  let imageIndex = 0;

  function hideImages() {
    carouselImages.forEach((image) => {
      image.style.display = "none";
    });
  }

  function resetDots() {
    carouselDots.forEach((dot) => {
      dot.classList.remove("active-dot", "hover-dot");
    });
  }

  function showImage(index) {
    hideImages();
    resetDots();
    carouselImages[index].style.display = "block";
    carouselDots[index].classList.add("active-dot");
    imageIndex = index;
    carouselDots.forEach((dot, dotIndex) => {
      if (dotIndex === index) {
        dot.classList.add("hover-dot");
      } else {
        dot.classList.remove("hover-dot");
      }
    });
  }

  function showNextImage() {
    imageIndex++;
    if (imageIndex >= carouselImages.length) {
      imageIndex = 0;
    }
    showImage(imageIndex);
  }

  function showPrevImage() {
    imageIndex--;
    if (imageIndex < 0) {
      imageIndex = carouselImages.length - 1;
    }
    showImage(imageIndex);
  }

  carouselDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showImage(index);
    });
    dot.addEventListener("mouseover", () => {
      if (!dot.classList.contains("active-dot")) {
        dot.classList.add("hover-dot");
      }
    });
    dot.addEventListener("mouseout", () => {
      dot.classList.remove("hover-dot");
    });
  });

  arrowLeft.addEventListener("click", showPrevImage);
  arrowRight.addEventListener("click", showNextImage);

  showImage(imageIndex);
}

setupCarousel("carousel1");
setupCarousel("carousel2");
setupCarousel("carousel3");
setupCarousel("carousel4");
