// console.log('hello')
let userInput = ''

let home = 0
let away = 0



function draw() {
    document.getElementById('select-away-team').innerText = home
}

function drawScore() {
    document.getElementById('select-home-team').innerText = away
}

function drawTotal() {
    // This function would contain both of the document updates for both Id's that we can call in any function
    document.getElementById('select-away-team').innerText = away
    document.getElementById('select-home-team').innerText = home
}
function getTotalScore() {
    userInput += '🧶'
    getTotalScore()

}
function selectAwayTeam() {
    userInput += '🏀'
    away++
    drawScore()
}

function selectHomeTeam() {
    userInput += '⚽️'
    home++
    draw()
}
console.log(away)
console.log(home)
draw()
drawScore()


let getScoreElement = document.getElementById('get score')