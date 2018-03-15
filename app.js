var start = document.getElementById('game-start');
var gameover = document.getElementById('game-over');
var game = document.getElementById('game');
var button = document.querySelector('button');
var startButton = document.querySelector('#game-start > button');
var restartButton = document.querySelector('#game-over > button');
var life = 3;

var rand = function(max) {
  return Math.floor(Math.random() * max);
}

var title = document.querySelector('h2');

var time = document.querySelector('span');
var score = document.querySelector('strong');

// random ID - random Id name - random Id flags
var randomGoodId = flags[Math.floor(Math.random() * flags.length)];
var randomGoodIdname = randomGoodId.name;
var randonGoodIdCode = randomGoodId.code.toLowerCase()
var randomGoodIdflags = 'flags/' + randomGoodId.code.toLowerCase() + '.svg';

// random name
 var  randomTitle = flags[Math.floor(Math.random() * flags.length)].name;
//var goodIndex = flags[rand(flag.length)];

//var randomTitle = flags[rand(flag.length)].name;

// randomflags
var randomflags = flags[Math.floor(Math.random() * flags.length)].code;

//urlflagchange
var originalFlag = 'flags/' + flags[Math.floor(Math.random() * flags.length)].code.toLowerCase() + '.svg';
// Selection du flag clickable - des flags - du flag elu
var oneFlag = document.querySelector('.flag img')
var flag = document.querySelectorAll('.flag img');
var flagId = flag[Math.floor(Math.random() * flag.length)]


// random colors
// liste conditions pour couleurs/puis titre = 1 drapeau/puis perte de vie + augmentation temps

//Definir un drapeau et son nom a placer
/*function positionGoodFlag () {
  title.textContent = randomGoodId

}*/

//randomCards
function randomCards() {
  for (var i = 0; i < flag.length; i++) {
    flag[i].src = 'flags/' + flags[Math.floor(Math.random() * flags.length)].code.toLowerCase() + '.svg';
  }
}

//Random good card : placer le flag de manière aléatoire
function randomGoodIdPlace() {
  title.textContent = randomGoodIdname;
  flagId.src = randomGoodIdflags;
}

// Start game

startButton.addEventListener('click', function() {
  time.textContent = 20;
  start.classList.remove('is-open');
  game.classList.add('is-open');
  randomCards();
  randomGoodIdPlace();
});

//Restart game
restartButton.addEventListener('click', function(){
  time.textContent = 20;
  gameover.classList.remove('is-open');
  game.classList.add('is-open');
  randomCards();
  randomGoodIdPlace();
});

timer();
// Countdown

function timer() {
  if (time.textContent > '0') {
    time.textContent --
  }
  if (time.textContent === '0') {
  gameover.classList.add('is-open');
  };
  if (time.textContent === '20') {
    time.textContent === '20';
  }
  setTimeout(timer, 1000);
};

/* fonction verifiant au click si le nom et le drapeau correspond :
  Si c'est bon on ajoute 3 secondes au temps total
  Si ce n'est pas bon on retire une vie*/
for (let i = 0; i < flag.length; i++) {
    flag[i].addEventListener('click', function(){
      if (flag[i].src.match(randomGoodId.code.toLowerCase() + '.svg')) {
        time.textContent = parseInt(time.textContent) + 3
      } else {
        life = life - 1
        score.textContent = parseInt(score.textContent) + 1
      }
  });
};
