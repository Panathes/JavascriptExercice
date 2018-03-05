var start = document.getElementById('game-start');
var gameover = document.getElementById('game-over');
var game = document.getElementById('game');
var button = document.querySelector('button');

var time = document.querySelector('span');

// Start game

button.addEventListener('click', function() {
  time.textContent = 20;
  start.classList.remove('is-open');
  game.classList.add('is-open');
timer();
});

// Countdown

function timer() {
  if (time.textContent > 0) {
    time.textContent --
  }
  if (time.textContent === '0') {
    gameover.classList.remove('is-open');
    gameover.classList.add('is-open');
  };
  setTimeout(timer, 1000);
};
