const btnStart = document.querySelector('#start'),
    btnApply = document.querySelector('#apply'),
    btnStop = document.querySelector('#stop'),
    btnReset = document.querySelector('#reset'),
    btnRandom = document.querySelector('#random')
let play
createField()
gameField()

// Start button 
btnStart.addEventListener('click', function startLife() {
    play = true
    timer()
})

// Stop button
btnStop.addEventListener('click', () => {
    play = false
    timer()
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
    play = false
    timer()
    randomCell()
})

// Apply field size
btnApply.addEventListener('click', () => {
    play = false
    timer()
    createField()
    gameField()
})