var start = document.getElementById('game-start');
var gameover = document.getElementById('game-over');
var game = document.getElementById('game');
var button = document.querySelector('button');
var startButton = document.querySelector('#game-start > button');
var restartButton = document.querySelector('#game-over > button');
var originalFlag = document.querySelector('.flag');

var title = document.querySelector('h2');

var time = document.querySelector('span');

// random name
var randomTitle = flags[Math.floor(Math.random() * flags.length)].name;

//randomCards
function randomCards() {
for (var i = 0; i < array.length; i++) {
  
}
}

// Start game

startButton.addEventListener('click', function() {
  time.textContent = 20;
  start.classList.remove('is-open');
  game.classList.add('is-open');
  title.textContent = randomTitle;
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
