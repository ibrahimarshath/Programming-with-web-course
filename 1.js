// Get elements
const colorBoxes = document.getElementsByClassName('color-box');
const colorDisplay = document.getElementById('colorDisplay');
const resetBtn = document.getElementById('resetBtn');

// Add click events to color boxes
for (let i = 0; i < colorBoxes.length; i++) {
    colorBoxes[i].addEventListener('mouseenter', function() {
        const bgColor = this.style.backgroundColor;
        document.body.style.backgroundColor = bgColor;
        colorDisplay.textContent = this.getAttribute('data-color');
    });
}

// Reset button
resetBtn.addEventListener('click', function() {
    document.body.style.backgroundColor = '#ffffff';
    colorDisplay.textContent = 'Select a color';
});

