const btnStart = document.querySelector('#start'),
    btnApply = document.querySelector('#apply'),
    btnStop = document.querySelector('#stop'),
    btnReset = document.querySelector('#reset')
let play
createField()
gameField()
function startLife(play) {
}


// Start button
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
