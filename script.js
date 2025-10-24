const adviceNumber = document.getElementById('adviceNumber');
const adviceText = document.getElementById('adviceText');
const diceButton = document.getElementById('diceButton');

async function fetchAdvice() {
    try {
        adviceText.classList.add('loading');

        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();

        adviceNumber.textContent = `Advice #${data.slip.id}`;
        adviceText.textContent = `"${data.slip.advice}"`;
        
        adviceText.classList.remove('loading');
    } 
    
    catch (error) {
        console.log('Error fetching advice:', error);
        adviceText.textContent = 'Oops! Could not fetch advice. Please try again.';
    }
}

diceButton.addEventListener('click', fetchAdvice);