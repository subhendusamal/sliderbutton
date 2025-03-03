const sliderThumb = document.getElementById("sliderThumb");
const priceBubble = document.getElementById("priceBubble");
const currentValue = document.getElementById("current-value");
const sliderTrack = document.querySelector(".slider-track");
const buttons = document.querySelectorAll(".range-btn");

// Define your min and max values
const MIN = 0;
const MAX = 50000;

/**
 * Update the custom slider thumb, track fill, and price tag position.
 * @param {number} value - The target value for the slider.
 */
function updateSlider(value) {
  // Calculate the percentage position
  let percentage = ((value - MIN) / (MAX - MIN)) * 100;

  // Update the slider track width (the orange fill)
  sliderTrack.style.width = `${percentage}%`;

  // Move the slider thumb. We subtract half the thumb's width (≈6px)
  sliderThumb.style.left = `calc(${percentage}% - 6px)`;

  // Move the price tag similarly. Adjust the offset as needed.
  priceBubble.style.left = `calc(${percentage}% - 20px)`;

  // Update the displayed value in the price tag
  currentValue.innerHTML = value === MAX ? `${value.toLocaleString()}<br>+` : value.toLocaleString();
}

// Set the initial position without transition (if needed)
window.onload = function () {
  updateSlider(MIN);
};

// Add event listeners to buttons for smooth transitions
buttons.forEach(button => {
  button.addEventListener("click", function () {
    let value = parseInt(this.getAttribute("data-value"));
    updateSlider(value);
  });
});
