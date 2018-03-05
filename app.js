var start = document.getElementById('game-start');
var gameover = document.getElementById('game-over');
var game = document.getElementById('game');
var button = document.querySelector('button');
var startButton = document.querySelector('#game-start > button');
var restartButton = document.querySelector('#game-over > button');

var time = document.querySelector('span');

// Start game

startButton.addEventListener('click', function() {
  time.textContent = 20;
  start.classList.remove('is-open');
  game.classList.add('is-open');
});

//Restart game
restartButton.addEventListener('click', function(){
  time.textContent = 20;
  gameover.classList.remove('is-open');
  game.classList.add('is-open');
});

timer();
// Countdown

function timer() {
  if (time.textContent > 0) {
    time.textContent --
  }
  if (time.textContent === '0') {

    gameover.classList.add('is-open');
  };
  setTimeout(timer, 1000);
};
