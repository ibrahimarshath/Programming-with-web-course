// Get elements
const colorBoxes = document.getElementsByClassName('color-box');
const colorDisplay = document.getElementById('colorDisplay');
const resetBtn = document.getElementById('resetBtn');

// Add click events to color boxes
for (let i = 0; i < colorBoxes.length; i++) {
    colorBoxes[i].addEventListener('click', function() {
        document.body.style.backgroundColor = this.getAttribute('data-color');
        colorDisplay.textContent = this.getAttribute('data-name');
    });
}

// Reset button
resetBtn.addEventListener('click', function() {
    document.body.style.backgroundColor = '#f0f0f0';
    colorDisplay.textContent = 'Select a color';
});