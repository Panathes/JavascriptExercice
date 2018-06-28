var ui = {
    restart_screen: document.querySelector('#game-over'),
    restart_btn: document.querySelector('#game-over button'),
    start_screen: document.querySelector('#game-start'),
    start_btn: document.querySelector('#game-start button'),
    time_left: document.querySelector('.time span'),
    flags: document.querySelectorAll('.flag'),
    flags_img: document.querySelectorAll('.flag img'),
    title: document.querySelector('h2'),
    lives: document.querySelectorAll('.lives img'),
    score: document.querySelector('.score strong')
};


var flags_copy = flags.slice();
var time_left = 20;
var time_id;
var life_left = 3;
var score = 0;
var game_is_over = false;
var flag_to_find;
var flags_to_show;


ui.start_btn.addEventListener('click', function() {
    setEvents();
    startGame();

    ui.start_screen.classList.remove('is-open');
});


ui.restart_btn.addEventListener('click', function() {
    time_left = 20;
    life_left = 3;
    score = 0;
    game_is_over = false;
    flags = flags_copy.slice();


    for (var i = 0; i < ui.lives.length; i++) {
        ui.lives[i].classList.remove('is-active');
    }


    ui.time_left.textContent = time_left;
    ui.score.textContent = score;

    startGame();

    ui.restart_screen.classList.remove('is-open');
});


function setEvents() {
    for (var i = 0; i < ui.flags.length; i++) {
        addClickEventOnFlag(i);
    }
}

function addClickEventOnFlag(index) {
    ui.flags[index].addEventListener('click', function() {

        if (game_is_over || ui.flags[index].classList.contains('is-active')) {
            return;
        }


        if (flags_to_show[index].name === flag_to_find.name) {
            addScore();
            renderFlags();
        } else {
            removeLife();
            ui.flags[index].classList.add('is-active');
        }
    });
}

function renderFlags() {

    var random = Math.floor( Math.random() * flags.length );

    flag_to_find = flags[random];


    flags = flags.filter(function(flag) {
        return flag.name !== flag_to_find.name;
    });


    flags_to_show = [];


    var best_match = flags.filter(function (flag) {
        var count = 0;
        var colors = flag_to_find.colors;

        for (var i = 0; i < colors.length; i++) {
            if (flag.colors.indexOf(colors[i]) > -1) {
                count++;
            }
        }


        return count === colors.length;
    });


    if (best_match.length < 3) {

        var remaining = flags.filter(function(flag) {
            return best_match.indexOf(flag) === -1;
        });

        var new_best_match = remaining.filter(function (flag) {
            var count = 0;
            var colors = flag_to_find.colors;

            for (var i = 0; i < colors.length; i++) {
                if (flag.colors.indexOf(colors[i]) > -1) {
                    count++;
                }
            }

            return count >= 1;
        });


        best_match = best_match.concat(new_best_match);
    }


    flags_to_show = best_match.slice(0, 3);

    flags_to_show.push(flag_to_find);

    flags_to_show = shuffling(flags_to_show);


    for (var i = 0; i < flags_to_show.length; i++) {
        var code = flags_to_show[i].code.toLowerCase();
        ui.flags_img[i].src = 'flags/' + code + '.svg';

        ui.flags[i].classList.remove('is-active');
    }


    ui.title.textContent = flag_to_find.name;
}

function startGame() {
    startTimer();
    renderFlags();
}

function startTimer() {
    time_id = setInterval(function() {
        time_left--;

        if (time_left <= 0) {
            gameOver();
        }

        ui.time_left.textContent = time_left;
    }, 1000);
}

function removeLife() {
    life_left--;

    if (life_left <= 0) {
        gameOver();
        return;
    }

    ui.lives[life_left].classList.add('is-active');
}

function gameOver() {
    game_is_over = true;
    clearInterval(time_id);
    ui.restart_screen.classList.add('is-open');
}

function shuffling(tab_to_shuffle) {

    var temp, random;

    for (var i = 0; i < tab_to_shuffle.length; i++) {
        random = Math.floor( Math.random() * tab_to_shuffle.length );
        temp = tab_to_shuffle[i];
        tab_to_shuffle[i] = tab_to_shuffle[random];
        tab_to_shuffle[random] = temp;
    }

    return tab_to_shuffle;
}

function addScore() {
    time_left += 5;
    score++;

    if (time_left > 30) {
        time_left = 30;
    }

    ui.score.textContent = score;
}
