

var array = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png",
]

const player1 = firstDice()
const player2 = secondDice()


function firstDice() {

    var x = 1 + (getRandomIntInclusive(0, array.length - 1));
    var randomSrc = array[x - 1]
    document.querySelector(".img1").setAttribute("src", randomSrc);
    return x
}

function secondDice() {

    var y = 1 + (getRandomIntInclusive(0, array.length - 1));
    var randomSrc = array[y - 1]
    document.querySelector(".img2").setAttribute("src", randomSrc);
    return y
}

function getRandomIntInclusive(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

announceWinner(player1, player2)
function announceWinner(x, y) {

    if (x > y) {
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
    } else if (y > x) {
        document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!"
    } else {
        document.querySelector("h1").innerHTML = "🚩 DRAW!!"
    }
}

