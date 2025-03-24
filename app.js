const sliderThumb = document.getElementById("sliderThumb");
const movingCircle = document.getElementById("movingCircle");
const sliderTrack = document.querySelector(".slider-track");
const buttons = document.querySelectorAll(".range-btn");

// Price Tags
const minLabel = document.getElementById("min-label");
const midLabel = document.getElementById("mid-label");
const maxLabel = document.getElementById("max-label");
const plusSign = document.querySelector(".plus-sign"); // Select the "+" sign

// Min, mid, and max values
const MIN = 0;
const MID = 25000;
const MAX = 50000;

/**
 * Update the slider thumb, track fill, moving circle, and label visibility.
 * @param {number} value - The target value for the slider.
 */
function updateSlider(value) {
  let percentage = ((value - MIN) / (MAX - MIN)) * 100;

  // Update slider track width
  sliderTrack.style.width = `${percentage}%`;

  // Move the slider thumb
  sliderThumb.style.left = `${percentage}%`;
  sliderThumb.style.transform = `translateX(-50%)`;

  // Move the circle along with the thumb
  movingCircle.style.left = `${percentage}%`;
  movingCircle.style.transform = `translateX(-50%)`;

  // Show or hide labels based on position
  minLabel.style.opacity = value === MIN ? "1" : "0";
  midLabel.style.opacity = value === MID ? "1" : "0";
  maxLabel.style.opacity = value === MAX ? "1" : "0";
  
  // Show "+" only when max price is visible
  plusSign.style.opacity = value === MAX ? "1" : "0";
}

// Initialize slider
window.onload = function () {
  updateSlider(MIN);
};

// Add event listeners for buttons
buttons.forEach(button => {
  button.addEventListener("click", function () {
    let value = parseInt(this.getAttribute("data-value"));
    updateSlider(value);
  });
});
