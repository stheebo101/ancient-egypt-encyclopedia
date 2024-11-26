document.addEventListener("DOMContentLoaded", () => {
  const sliderWrapper = document.querySelector(".slider-wrapper");
  const images = document.querySelectorAll(".slider-wrapper img");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");

  let currentIndex = 0;

  function showImage(index) {
    const offset = -index * 100; // Calculate the offset based on the current index
    sliderWrapper.style.transform = `translateX(${offset}%)`;
  }

  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Go back to the previous image
    showImage(currentIndex);
  });

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length; // Move to the next image
    showImage(currentIndex);
  });

  // Initialize with the first image
  showImage(currentIndex);
});
