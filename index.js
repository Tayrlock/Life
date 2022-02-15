const btnStart = document.querySelector('#start'),
    btnApply = document.querySelector('#apply'),
    btnStop = document.querySelector('#stop'),
    btnReset = document.querySelector('#reset')

function startLife(play){


}
// Start button
btnStart.addEventListener('click', function startLife() {
    life();
    // if (play = true) { btnStart.removeEventListener('click', startLife) }
})

// Apply field size
btnApply.addEventListener('click', () => {
    createField()
    gameField()
})

// Stop button
btnStop.addEventListener('click', () => {
    clearTimeout(step)
    // play = false
    // btnStart.addEventListener('click', startLife())
})


// reset button
btnReset.addEventListener('click', () => {
    createField()
    gameField()
    clearTimeout(step)
})
