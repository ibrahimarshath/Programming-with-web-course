const nameInput = document.querySelector('#nameInput');
const imageInput = document.querySelector('#imageInput');
const descriptionInput = document.querySelector('#descriptionInput');
const colorInput = document.querySelector('#colorInput');

const profileName = document.querySelector('#profileName');
const profileImage = document.querySelector('#profileImage');
const profileDescription = document.querySelector('#profileDescription');
const profileCard = document.querySelector('#profileCard');

nameInput.addEventListener('input', function() {
    profileName.textContent = nameInput.value;
});

imageInput.addEventListener('input', function() {
    if (imageInput.value !== '') {
        profileImage.setAttribute('src', imageInput.value);
    } 
});

descriptionInput.addEventListener('input', function() {
    profileDescription.textContent = descriptionInput.value;
});

colorInput.addEventListener('change', function() {
    profileCard.style.backgroundColor = colorInput.value;
});

