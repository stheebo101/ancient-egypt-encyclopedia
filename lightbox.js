// Get the images and the modal (lightbox)
const images = document.querySelectorAll(
  ".illustration, .poster, .throne-room"
); // All images
const lightbox = document.getElementById("lightbox"); // The lightbox modal
const lightboxImg = document.getElementById("lightbox-img"); // The image inside the lightbox
const closeBtn = document.getElementById("close-btn"); // The close button inside the lightbox

// Open the lightbox with the clicked image
images.forEach((image) => {
  image.addEventListener("click", () => {
    lightbox.style.display = "flex"; // Show lightbox
    lightboxImg.src = image.src; // Set the lightbox image source to the clicked image's source
  });
});

// Close the lightbox when the close button is clicked
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none"; // Hide lightbox
});

// Close the lightbox when clicking anywhere outside the image
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none"; // Hide lightbox if clicked outside the image
  }
});
