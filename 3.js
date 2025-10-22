const bulbImage = document.querySelector('#bulbImage');
const toggleBtn = document.querySelector('#toggleBtn');

const offBulb = 'https://www.w3schools.com/js/pic_bulboff.gif';
const onBulb = 'https://www.w3schools.com/js/pic_bulbon.gif';

bulbImage.setAttribute('src', offBulb);

toggleBtn.addEventListener('click', function() {
    if (bulbImage.src === offBulb) {
        bulbImage.setAttribute('src', onBulb);
        toggleBtn.textContent = 'Turn Off';
        toggleBtn.style.background = '#f39c12';
    } else {
        bulbImage.setAttribute('src', offBulb);
        toggleBtn.textContent = 'Turn On';
    }
    
});