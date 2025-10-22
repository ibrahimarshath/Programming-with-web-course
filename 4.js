const messageInput = document.querySelector('#messageInput');
const counter = document.querySelector('#counter');
const submitBtn = document.querySelector('#submitBtn');

messageInput.addEventListener('input', function() {
    const length = messageInput.value.length;
    
    counter.textContent = 'Characters: ' + length + '/100';
    
    if (length > 90) {
        counter.style.color = 'red';
    } else {
        counter.style.color = '#333';
    }
    
    if (length >= 100) {
        submitBtn.disabled = true;
    } else {
        submitBtn.disabled = false;
    }
});