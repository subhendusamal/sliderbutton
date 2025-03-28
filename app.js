

document.addEventListener("DOMContentLoaded", function () {
    const sliderThumb = document.getElementById("sliderThumb");
    const movingCircle = document.getElementById("movingCircle");
    const sliderTrack = document.querySelector(".slider-track");
    const sliderLabels = document.querySelectorAll(".price-tag");
    const rangeButtons = document.querySelectorAll(".range-btn");
    const minInput = document.querySelector(".min-input");
    const maxInput = document.querySelector(".max-input");
    const clearButton = document.getElementById("clearButton");
  
    let sliderActive = false;
    let inputActive = false;
  
    // Function to reset both the slider and input fields
    function resetAll() {
        sliderThumb.style.left = "0%";
        movingCircle.style.left = "0%";
        // movingCircle.textContent = "0";
        sliderTrack.style.width = "0%";
        sliderLabels.forEach(label => label.classList.remove("active"));
        document.getElementById("min-label").classList.add("active");
  
        minInput.value = "";
        maxInput.value = "";
  
        sliderActive = false;
        inputActive = false;
    }
  
    // Function to update slider
    function updateSlider(value) {
        let percentage = (value / 50000) * 100;
        sliderThumb.style.left = percentage + "%";
        movingCircle.style.left = percentage + "%";
        sliderTrack.style.width = percentage + "%";
        // movingCircle.textContent = value.toLocaleString();
    }
  
    // Slider Functionality
    rangeButtons.forEach(button => {
        button.addEventListener("click", function () {
            if (inputActive) return;
  
            sliderActive = true;
            minInput.value = "";
            maxInput.value = "";
  
            let value = parseInt(this.getAttribute("data-value"));
            updateSlider(value);
  
            sliderLabels.forEach(label => label.classList.remove("active"));
            if (value === 0) document.getElementById("min-label").classList.add("active");
            else if (value === 25000) document.getElementById("mid-label").classList.add("active");
            else if (value === 50000) document.getElementById("max-label").classList.add("active");
        });
    });
  
    // Min/Max Input Functionality
    minInput.addEventListener("click", function () {
        if (!inputActive) {
            resetSlider(); // Reset only slider, not input fields
        }
        inputActive = true;
    });
  
    maxInput.addEventListener("click", function () {
        if (!inputActive) {
            resetSlider(); // Reset only slider, not input fields
        }
        inputActive = true;
    });
  
    function resetSlider() {
        sliderThumb.style.left = "0%";
        movingCircle.style.left = "0%";
        // movingCircle.textContent = "0";
        sliderTrack.style.width = "0%";
        sliderLabels.forEach(label => label.classList.remove("active"));
        document.getElementById("min-label").classList.add("active");
        sliderActive = false;
    }
  
    // Detect when user leaves input fields and allow slider again
    function resetInputFocus() {
        inputActive = false;
    }
  
    minInput.addEventListener("blur", resetInputFocus);
    maxInput.addEventListener("blur", resetInputFocus);
  
    // Clear button functionality
    clearButton.addEventListener("click", resetAll);
  
    // Ensure everything resets to minimum value on page load
    resetAll();
  });
  