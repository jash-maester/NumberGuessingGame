// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI Elements
const game = document.getElementById('game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

// Assign UI Min & Max
minNum.textContent = min;
maxNum.textContent = max;

// Play Again event Listener
game.addEventListener('mousedown', function(e) {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
})

// Listen for guess
guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);

    //Validate 
    if (guess < min || guess > max || isNaN(guess)) {
        setMessage(`Please enter a number between ${min} & ${max}`, 'red')
    }
    // Check if won
    if (guess === winningNum) {
        // // Disable Input
        // guessInput.disabled = true;
        // // CHange border color
        // guessInput.style.bordercolor = 'green';
        // // Set Message
        // setMessage(`${winningNum} is correct, YOU WIN !!!`, 'green')
        gameOver(true, `${winningNum} is correct, YOU WIN !!!`);
    } else {
        // Wrong Number
        guessesLeft -= 1;
        if (guessesLeft === 0) {
            // Game Over -LOST
            /*  // Disable Input
            guessInput.disabled = true;
             // Change border color
            guessInput.style.bordercolor = 'red';
             // Set Message
             setMessage(`Game Over, you lost. The correct number was ${winningNum}`, 'red') */
            gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`)

        } else {
            //Game Continues - Answer Wrong
            // Change border color
            guessInput.style.bordercolor = 'red';
            // CLear Input
            guessInput.value = '';
            // Tell user its the wrong number
            setMessage(`${guess} is not correct. ${guessesLeft} guesses Left`, 'red');
        }
    }
})

// Game Over
function gameOver(won, msg) {

    let color;
    won === true ? color = 'green' : color = 'red';
    // Disable Input
    guessInput.disabled = true;
    // CHange border color
    guessInput.style.bordercolor = color;
    // Set Message
    setMessage(msg, color);
    // Play Again ?
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

// SetMessage
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}

// Get Winning Number
function getRandomNum(min, max) {
    // return Math.floor(Math.random() * (max - min + 1) + min);
    let a = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(a);
    return a;
}