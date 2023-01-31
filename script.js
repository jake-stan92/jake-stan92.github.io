// initialise score counters
let playerScoreCount = 0
let pcScoreCount = 0


// randomly generate computer choice
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3)
    if (num === 0) {
        choice = 'Rock'
    } else if (num === 1) {
        choice = 'Paper'
    } else {
        choice = 'Scissors'
    }
    return choice
};

// decide winner of round 
function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toUpperCase();
    let pc = computerSelection.toUpperCase(); 
    console.log('func player choice: ' + player);
    console.log('func pc choice: ' + pc);   

    if (player === 'ROCK' && pc === 'SCISSORS') {
        playerScoreCount += 1;
        return 'Player Wins!'
    } else if (player === 'ROCK' && pc === 'PAPER') {
        pcScoreCount += 1;
        return 'PC Wins!'
    } else if (player === 'PAPER' && pc === 'SCISSORS') {
        pcScoreCount += 1;
        return 'PC wins!'
    } else if (player === 'PAPER' && pc === 'ROCK'){
        playerScoreCount += 1;
        return 'Player Wins!'
    } else if (player === 'SCISSORS' && pc === 'ROCK') {
        pcScoreCount += 1;
        return 'PC Wins!'
    } else if (player === 'SCISSORS' && pc === 'PAPER') {
        playerScoreCount += 1;
        return 'Player Wins!'
    } else if (player === pc) {
        return "It's a Tie!"
    }
};


// define button functions (they pass their value (R,P,S) to the playGame func)
const rockButton = document.querySelector('#rockButton');
rockButton.addEventListener('click', function() {    
    playGame('rock');
});

const paperButton = document.querySelector('#paperButton');
paperButton.addEventListener('click', function() {     
    playGame('paper');
});

const scissorsButton = document.querySelector('#scissorsButton');
scissorsButton.addEventListener('click', function() {    
    playGame('scissors');
});


// configure play again button
const playAgainButton = document.querySelector('#playAgainButton');
playAgainButton.disabled = true;

playAgainButton.addEventListener('click', function() {
    playerScoreCount = 0;
    pcScoreCount = 0;
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
    playAgainButton.disabled = true;
    document.getElementById('playerScoreCount').textContent = playerScoreCount;
    document.getElementById('pcScoreCount').textContent = pcScoreCount;
});


// Plays a game to 5 updating score and declaring winner
function playGame(pick) {
    let pcChoice = getComputerChoice();
    let humanChoice = pick;
    // display JS details in HTML
    document.getElementById('outcomeText').textContent = playRound(humanChoice, pcChoice);    
    document.getElementById('playerScoreCount').innerHTML = playerScoreCount;
    document.getElementById('pcScoreCount').innerHTML = pcScoreCount;

    // decide winner
    if (playerScoreCount === 5) {
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        playAgainButton.disabled = false;
        return alert('Player is first to 5.. Player Wins!');
    } else if (pcScoreCount === 5) {
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        playAgainButton.disabled = false;
        return alert('PC is first to 5... PC Wins!');
    }
};

