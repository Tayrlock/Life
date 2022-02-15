const canvas = document.getElementById('life'),
    ctx = canvas.getContext('2d');

let cell = [],

    fieldWidth,
    fieldHeight,
    cellSize

function timer() {
    let step = Math.floor(document.querySelector('#step').value || 5)
    let a = setTimeout(life, step)
    if (play == false){ clearTimeout(a)}
}
function updateField() {
    canvas.width = Math.floor(document.querySelector('#width').value || 500)
    canvas.height = Math.floor(document.querySelector('#height').value || 600)
    cellSize = Math.floor(document.querySelector('#cell').value || 5)
    canvas.width = canvas.width - canvas.width % cellSize
    canvas.height = canvas.height - canvas.height % cellSize
    sumY = canvas.height / cellSize // 30
    sumX = canvas.width / cellSize
    fieldHeight = sumY * cellSize //10*30
    fieldWidth = sumX * cellSize
    // console.log('sumY = ' + sumY)
    // console.log('sumX = ' + sumX)
    // console.log('cell = ' + cellSize)
    // console.log('width = ' + fieldWidth)
    // console.log('height = ' + fieldHeight)
}
// Игровое поле формирование
function createField() {
    updateField()
    ctx.clearRect(0, 0, fieldWidth, fieldHeight)
}

// Игровое поле заполнение массивами
function gameField() {
    for (let i = 0; i < sumY; i++) {
        cell[i] = []
        for (let j = 0; j < sumX; j++) {
            cell[i][j] = 0
        }
    }
    // console.log(cell)
}

// Получение клеток по координатам
function takeCoord(e) {
    let x = e.offsetX
    let y = e.offsetY
    // console.log(y, x)
    x = Math.floor(x / cellSize)
    y = Math.floor(y / cellSize)
    // console.log(y, x)
    cell[y][x] = 1;                                         // добавить повторное наведение
    // if (cell[y][x] == 1) { cell[y][x] = 0 } else { cell[y][x] = 1 }
    // console.log(cell)
    drawCell()
}

let mouseIsDown = false;
canvas.onmousedown = function (e) {
    mouseIsDown = true;
    takeCoord(e)
}
canvas.onmouseup = function (e) {
    if (mouseIsDown) takeCoord(e);
    mouseIsDown = false;
}
canvas.onmousemove = function (e) {
    if (!mouseIsDown) return;
    takeCoord(e)
    return false
}

// Отрисовка
function drawCell() {
    // console.log(cell)
    ctx.clearRect(0, 0, fieldWidth, fieldHeight)
    for (let i = 0; i < sumY; i++) {
        for (let j = 0; j < sumX; j++) {
            if (cell[i][j] == 1) {
                ctx.fillRect(j * cellSize, i * cellSize, cellSize, cellSize)
            }
        }
    }
}

function life() {
    let play = true
    let newCell = []
    for (let i = 0; i < sumY; i++) {
        newCell[i] = []
        for (let j = 0; j < sumX; j++) {
            let live = 0
            if (cell[torYEnd(i) + 1][j] == 1) live++ //[1,0] down ↓
            if (cell[torYBgn(i) - 1][j] == 1) live++ //[-1,0] up ↑
            if (cell[i][torXEnd(j) + 1] == 1) live++ //[0,1] right →
            if (cell[i][torXBgn(j) - 1] == 1) live++ //[0,-1]  left ←
            if (cell[torYEnd(i) + 1][torXEnd(j) + 1] == 1) live++ //[1,1] ↓→
            if (cell[torYBgn(i) - 1][torXEnd(j) + 1] == 1) live++ //[-1,1] ↑→
            if (cell[torYBgn(i) - 1][torXBgn(j) - 1] == 1) live++ //[-1,-1] ←↑
            if (cell[torYEnd(i) + 1][torXBgn(j) - 1] == 1) live++ //[1,-1] ←↓
            if (live == 2) { newCell[i][j] = cell[i][j] } // 2 live = stay, 3 live = born, other = dead
            else {
                if (live == 3) { newCell[i][j] = 1 }
                else { newCell[i][j] = 0 }
            }
        }
    }
    // console.log(newCell)
    cell = newCell
    drawCell()
    timer()
}
function torYBgn(i) {
    if (i == 0) return (sumY)
    else return i
}
function torYEnd(i) {
    if (i == sumY - 1) return -1
    else return i
}
function torXBgn(i) {
    if (i == 0) return (sumX)
    else return i
}
function torXEnd(i) {
    if (i == sumX - 1) return -1
    else return i
}

// function torBgn(i) {
//     if (i == 0) return 30
//     else return i
// }
// function torEnd(i) {
//     if (i == 29) return -1
//     else return i
// }
// gameField()
// var n = y * canvas.width + x;
// console.log(n)


// the data[] array position for pixel [x,y]
// var n = y * canvas.width + x;

// function writeMessage(canvas, message) {
//     var context = canvas.getContext('2d');
//     context.clearRect(0, 0, canvas.width, canvas.height);
//     context.font = '18pt Calibri';
//     context.fillStyle = 'black';
//     context.fillText(message, 10, 25);
// }
// function getMousePos(canvas, evt) {
//     var rect = canvas.getBoundingClientRect();
//     return {
//         x: evt.clientX - rect.left,
//         y: evt.clientY - rect.top
//     };
// }
// var canvas = document.getElementById('myCanvas');
// var context = canvas.getContext('2d');

// canvas.addEventListener('mousemove', function (evt) {
//     var mousePos = getMousePos(canvas, evt);
//     var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
//     writeMessage(canvas, message);
// }, false);

// getImageData

// the data[] array position for pixel [x,y]
// var n = y * canvas.width + x;

// Вы можете получить сплошную черную линию с 1 пикселем, указав линию на полупикселе:
// context.moveTo(0,5.5);
// context.lineto(5,5.5);

// координаты
// function getMousePos(canvas, evt) {
//     var rect = canvas.getBoundingClientRect();
//     return {
//         x: evt.clientX - rect.left,
//         y: evt.clientY - rect.top
//     };
// }
// canvas.addEventListener('mousemove', function (evt) {
//     var mousePos = getMousePos(canvas, evt);
//     let x = document.getElementById('input_x')
//     let y = document.getElementById('input_y')
//     x.textContent = mousePos.x
//     y.textContent = mousePos.y
// })

