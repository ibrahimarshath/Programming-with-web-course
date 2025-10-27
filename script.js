// Game data
const snakes = { 99: 41, 95: 77, 89: 53, 66: 45, 54: 31, 43: 18, 40: 3, 27: 5 };
const ladders = { 4: 25, 13: 46, 42: 63, 50: 69, 62: 81, 74: 92 };

// Game state
let player = 1;
let pos = [0, 0];
let gameOver = false;
let questions = [];
let qIndex = 0;

// Helper functions
const getPos = () => pos[player - 1];
const setPos = (val) => pos[player - 1] = val;
const decode = (txt) => { const t = document.createElement('textarea'); t.innerHTML = txt; return t.value; };
const show = (msg) => document.getElementById('gameStatus').textContent = msg;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadQuestions();
    document.getElementById('rollBtn').onclick = rollDice;
    document.getElementById('resetBtn').onclick = reset;
});

// Load questions
function loadQuestions() {
    fetch('https://opentdb.com/api.php?amount=5')
        .then(r => r.json())
        .then(d => { questions = d.results; qIndex = 0; })
        .catch(e => console.error(e));
}

// Roll dice
function rollDice() {
    if (gameOver) return;
    
    const btn = document.getElementById('rollBtn');
    btn.disabled = true;
    
    // Get roll from API
    fetch('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
        .then(r => r.text())
        .then(data => {
            const roll = parseInt(data.trim());
            document.querySelector('.dice-face').textContent = roll;
            move(roll);
        })
        .catch(err => {
            show('Error loading dice. Please check your internet connection.');
            btn.disabled = false;
        });
}

// Move player
function move(steps) {
    const current = getPos();
    let newPos = current + steps;
    
    // Bounce back logic if over 100
    if (newPos > 100) {
        const over = newPos - 100;
        newPos = 100 - over;
        show(`Player ${player} rolled ${steps}. Bounced back to ${newPos}!`);
    } else {
        show(`Player ${player} rolled ${steps}!`);
    }
    
    setPos(newPos);
    updateBoard();
    
    setTimeout(() => {
        if (ladders[newPos]) askQ('ladder', newPos, ladders[newPos]);
        else if (snakes[newPos]) askQ('snake', newPos, snakes[newPos]);
        else checkWin();
    }, 600);
}

// Ask question
function askQ(type, from, to) {
    if (qIndex >= questions.length) {
        loadQuestions();
        setTimeout(() => askQ(type, from, to), 1000);
        return;
    }
    
    const q = questions[qIndex++];
    const correct = decode(q.correct_answer);
    const answers = [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5);
    
    document.getElementById('quizTitle').textContent = type === 'ladder' ? '🪜 Ladder Quiz!' : '🐍 Snake Quiz!';
    document.getElementById('quizMessage').textContent = type === 'ladder' 
        ? `Answer correctly to climb from ${from} to ${to}!`
        : `Answer correctly to avoid sliding from ${from} to ${to}!`;
    document.getElementById('quizQuestion').textContent = decode(q.question);
    
    ['answer1', 'answer2', 'answer3', 'answer4'].forEach((id, i) => {
        const btn = document.getElementById(id);
        const ans = decode(answers[i]);
        btn.textContent = ans;
        btn.onclick = () => checkAns(ans === correct, type, from, to);
    });
    
    document.getElementById('quizModal').style.display = 'flex';
}

// Check answer
function checkAns(correct, type, from, to) {
    document.getElementById('quizModal').style.display = 'none';
    
    const climb = type === 'ladder' && correct;
    const slide = type === 'snake' && !correct;
    
    if (climb || slide) setPos(to);
    
    const msg = type === 'ladder'
        ? (correct ? `✅ Correct! Player ${player} climbs to ${to}!` : `❌ Wrong! Player ${player} stays at ${from}.`)
        : (correct ? `✅ Correct! Player ${player} avoids the snake!` : `❌ Wrong! Player ${player} slides to ${to}!`);
    
    show(msg);
    updateBoard();
    setTimeout(checkWin, 1500);
}

// Check winner
function checkWin() {
    if (getPos() === 100) {
        gameOver = true;
        show(`🎉 Player ${player} WINS! 🎉`);
        document.querySelector('.game-status').classList.add('winner');
    } else {
        nextTurn();
    }
}

// Next turn
function nextTurn() {
    player = player === 1 ? 2 : 1;
    document.querySelector('.player1').classList.toggle('active');
    document.querySelector('.player2').classList.toggle('active');
    if (!gameOver) show(`Player ${player}'s Turn`);
    document.getElementById('rollBtn').disabled = false;
}

// Update board
function updateBoard() {
    document.querySelectorAll('.player-marker').forEach(m => m.remove());
    
    pos.forEach((p, i) => {
        if (p > 0) {
            const cell = document.getElementById(`cell-${p}`);
            if (!cell) return;
            
            const marker = document.createElement('img');
            marker.className = 'player-marker';
            marker.src = `player${i + 1}.svg`;
            marker.alt = `Player ${i + 1}`;
            
            if (cell.querySelectorAll('.player-marker').length > 0) {
                marker.style.marginLeft = '25px';
            }
            
            cell.appendChild(marker);
        }
    });
    
    document.getElementById('player1Pos').textContent = pos[0];
    document.getElementById('player2Pos').textContent = pos[1];
}

// Reset game
function reset() {
    player = 1;
    pos = [0, 0];
    gameOver = false;
    qIndex = 0;
    
    document.querySelector('.dice-face').textContent = '🎲';
    document.querySelector('.game-status').classList.remove('winner');
    document.querySelector('.player1').classList.add('active');
    document.querySelector('.player2').classList.remove('active');
    document.getElementById('quizModal').style.display = 'none';
    document.getElementById('rollBtn').disabled = false;
    
    updateBoard();
    show("Player 1's Turn");
    loadQuestions();
}