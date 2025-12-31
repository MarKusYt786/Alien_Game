const alien = document.getElementById('alien');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
let score = 0;
let timeLeft = 60;
let gameInterval;
let timerInterval;
let gameActive = true;

function moveAlien() {
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    alien.style.left = x + 'px';
    alien.style.top = y + 'px';
}

alien.addEventListener('mouseover', () => {
    if (gameActive) {
        score++;
        scoreDisplay.textContent = 'Score: ' + score;
        moveAlien();
    }
});

function updateTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timerDisplay.textContent = 'Time Left: ' + timeLeft + 's';
    } else {
        clearInterval(gameInterval);
        clearInterval(timerInterval);
        gameActive = false;
        alert('Time is up! Your final score is ' + score);
    }
}

function startGame() {
    moveAlien();
    gameInterval = setInterval(moveAlien, 1000); // Move alien every second
    timerInterval = setInterval(updateTimer, 1000); // Update timer every second
}

startGame();
