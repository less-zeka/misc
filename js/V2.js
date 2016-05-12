var animator;
var hitBox;
var gameIsRunning = false;
var counter = 0;
var randomLeft;
var randomTop;
var randomWidth;
var randomHeight;
//0 = easy, 1 = hard
var gameMode = 0; 

$(document).ready(function () {
    init();

    function init() {
        hitBox = $("#hitBox");
        animate();
    }

    hitBox.click(function () {
        if (gameIsRunning) {
            counter = counter + 1;
            $("#score").text(counter);
        }
    });

    $("#newGameEasy").click(function () {
        $(".newGame").addClass('hidden');
        gameMode = 0;
        startGame();
    });
    $("#newGameHard").click(function () {
        $(".newGame").addClass('hidden');
        gameMode = 1;
        startGame();
    });
    function animate() {
            randomLeft = Math.floor((Math.random() * 1000));
            randomTop = Math.floor((Math.random() * 300));
            randomWidth = Math.floor((Math.random() * 200) + 20);
            randomHeight = Math.floor((Math.random() * 200) + 20);
            hitBox.animate({ left: randomLeft, top: randomTop, width: randomWidth, height: randomHeight }, "slow");
    }

    function startGame() {
        counter = 0;
        $("#score").text(counter);
        $("#scoreBoard").removeClass("jumbotron");
        //10 sec to play
        window.setTimeout(stopGame, 10000);
        gameIsRunning = true;
        //gamespeed 1 sec
        animator = setInterval(animate, 1000-500*gameMode);
    }

    function stopGame() {
        gameIsRunning = false;
        clearTimeout(animator);
        $(".newGame").removeClass('hidden');
        $("#scoreBoard").addClass("jumbotron");
    }
})