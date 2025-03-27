
const sliderThumb = document.getElementById("sliderThumb");
const movingCircle = document.getElementById("movingCircle");
const sliderTrack = document.querySelector(".slider-track");
const buttons = document.querySelectorAll(".range-btn");

// Price Labels
const minLabel = document.getElementById("min-label");
const midLabel = document.getElementById("mid-label");
const maxLabel = document.getElementById("max-label");
const plusSign = document.querySelector(".plus-sign");

// Input Fields
const minInput = document.querySelector(".min-input");
const maxInput = document.querySelector(".max-output");

// Min, Mid, and Max Values
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

  // Move the moving circle
  movingCircle.style.left = `${percentage}%`;
  movingCircle.style.transform = `translateX(-50%)`;

  // Show or hide labels based on position
  minLabel.style.opacity = value === MIN ? "1" : "0";
  midLabel.style.opacity = value === MID ? "1" : "0";
  maxLabel.style.opacity = value === MAX ? "1" : "0";

  // Show "+" sign only when max price is reached
  plusSign.style.opacity = value === MAX ? "1" : "0";

  // Enable input fields when slider value is 0, otherwise disable them
  if (value === MIN) {
    enableInputs();
  } else {
    disableInputs();
  }
}

// Disable input fields
function disableInputs() {
  minInput.disabled = true;
  maxInput.disabled = true;
}

// Enable input fields
function enableInputs() {
  minInput.disabled = false;
  maxInput.disabled = false;
}

// Enable the slider buttons
function enableSliderButtons() {
  buttons.forEach(button => {
    button.disabled = false;
  });
}

// Disable the slider buttons
function disableSliderButtons() {
  buttons.forEach(button => {
    button.disabled = true;
  });
}

// Initialize slider
window.onload = function () {
  updateSlider(MIN);
};

// Add event listeners for slider buttons
buttons.forEach(button => {
  button.addEventListener("click", function () {
    let value = parseInt(this.getAttribute("data-value"));
    updateSlider(value);

    // If the slider is set to 0, allow input
    if (value !== MIN) {
      disableInputs();
    }
  });
});

// Add event listeners to the input boxes to disable slider buttons when typing
[minInput, maxInput].forEach(input => {
  input.addEventListener("input", function () {
    disableSliderButtons(); // Disable slider buttons when input is used
  });
});

// Add event listeners to re-enable slider buttons when input boxes are cleared
[minInput, maxInput].forEach(input => {
  input.addEventListener("blur", function () {
    if (minInput.value.trim() === "" && maxInput.value.trim() === "") {
      enableSliderButtons(); // Enable slider buttons again if both inputs are empty
    }
  });
});
































