const loginForm = document.querySelector('#loginForm');
const emailInput = document.querySelector('#emailInput');
const passwordInput = document.querySelector('#passwordInput');
const emailError = document.querySelector('#emailError');
const passwordError = document.querySelector('#passwordError');
const successMessage = document.querySelector('#successMessage');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let isValid = true;
    
    if (emailInput.value === '') {
        emailInput.style.borderColor = '#e74c3c';
        emailError.textContent = 'Email is required';
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailInput.style.borderColor = '#ddd';
    }
    
    if (passwordInput.value === '') {
        passwordInput.style.borderColor = '#e74c3c';
        passwordError.textContent = 'Password is required';
        passwordError.style.display = 'block';
        isValid = false;
    } else {
        passwordInput.style.borderColor = '#ddd';
        passwordError.style.display = 'none';
    }
    
    if (isValid) {
        successMessage.textContent = 'Login Successful!';
        successMessage.style.display = 'block';
    }
});