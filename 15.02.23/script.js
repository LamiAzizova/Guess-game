const numberEl = document.querySelector('.number')
const messageEl = document.querySelector('.message')
const checkBtn = document.querySelector('.check')
const guessEl = document.querySelector('.guess')
const bodyEl = document.querySelector('.body')
const scoreEl = document.querySelector('.score')
const againBtn = document.querySelector('.again')

const secretNumber = Math.trunc(Math.random()*20+1);
let score = 20;
let highScore = 0;


scoreEl.textContent = score;


checkBtn.addEventListener('click', function(){
    let guess = +guessEl.value
    if (!guess) {
        messageEl.textContent = "🚫 No Number";
        guessEl.value = "";
    } else if (guess === secretNumber) {
        messageEl.textContent = "Correct Number!";
        bodyEl.style.backgroundColor = "#60b347";
        numberEl.style.width = "300px";
        numberEl.textContent = secretNumber;
    } else if (guess > secretNumber) {
        guessEl.value = "";
    if (score > 1) {
        score--;
        scoreEl.textContent = score;
        messageEl.textContent = "📉 Too High!";
    } else {
        scoreEl.textContent = 0;
        messageEl.textContent = "Game Over";
        bodyEl.style.backgroundColor = "red"
    }
} 
 else if (guess > secretNumber) {
    guessEl.value = "";
if (score > 1) {
    score--;
    scoreEl.textContent = score;
    messageEl.textContent = "📈 Too Low!";
} else {
    scoreEl.textContent = 0;
    messageEl.textContent = "Game Over";
    bodyEl.style.backgroundColor = "red"
}
}

});
againBtn.addEventListener ('click', function(){
    score = 20;
    Math.trunc(Math.random() * 20) + 1;
    numberEl.textContent = "?";
    bodyEl.style.backgroundColor = "#222";
    scoreEl.textContent = score;
    messageEl.textContent = "Start guessing...";
    guessEl.value = "";
    numberEl.style.widt = "150px";

});