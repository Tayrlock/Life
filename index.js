const btnStart = document.querySelector('#start'),
    btnApply = document.querySelector('#apply'),
    btnStop = document.querySelector('#stop'),
    btnReset = document.querySelector('#reset'),
    btnRandom = document.querySelector('#random')
let play
createField()
gameField()
function startLife(play) {
}


// Start button - убрать обработчик canvas после нажатия
btnStart.addEventListener('click', function startLife() {
    play = true
    timer()
    // if (play = true) { btnStart.removeEventListener('click', startLife) }
})

// Apply field size
btnApply.addEventListener('click', () => {
    play = false
    timer()
    createField()
    gameField()
})

// Stop button
btnStop.addEventListener('click', () => {
    play = false
    timer()
    // play = false
    // btnStart.addEventListener('click', startLife())
})


// reset button
btnReset.addEventListener('click', () => {
    play = false
    timer()
    createField()
    gameField()

})

// Random Button
btnRandom.addEventListener('click', () => {
    play=false
    timer()
    randomCell()

})