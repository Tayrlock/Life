const canvas = document.getElementById('life'),
    ctx = canvas.getContext('2d');
let cell = [],
    step

// Игровое поле формирование
function createField() {
    let cellSize = document.querySelector('#cell').value || 10
    // console.log(cellSize)
    canvas.width = document.querySelector('#width').value || 300
    canvas.height = document.querySelector('#height').value || 300
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

// Игровое поле заполнение массивами

function gameField() {
    for (let i = 0; i < 30; i++) {
        cell[i] = []
        for (let j = 0; j < 30; j++) {
            cell[i][j] = 0
        }
    }
}

// Получение клеток по координатам

canvas.onclick = function (e) {
    let x = e.offsetX
    let y = e.offsetY
    console.log(x, y)
    x = Math.floor(x / 10)
    y = Math.floor(y / 10)
    console.log(y, x)
    cell[y][x] = 1
    console.log(cell)
    drawCell()
}

function drawCell() {
    // console.log(cell)
    ctx.clearRect(0, 0, 300, 300)
    for (let i = 0; i < 30; i++) {
        for (let j = 0; j < 30; j++) {
            if (cell[i][j] == 1) {
                ctx.fillRect(j * 10, i * 10, 10, 10)
            }
        }
    }
}

function life() {
    let play = true
    let newCell = []
    for (let i = 0; i < 30; i++) {
        newCell[i] = []
        for (let j = 0; j < 30; j++) {
            let live = 0
            if (cell[torEnd(i) + 1][j] == 1) live++ //[1,0] down ↓
            if (cell[torBgn(i) - 1][j] == 1) live++ //[-1,0] up ↑
            if (cell[i][torEnd(j) + 1] == 1) live++ //[0,1] right →
            if (cell[i][torBgn(j) - 1] == 1) live++ //[0,-1]  left ←
            if (cell[torEnd(i) + 1][torEnd(j) + 1] == 1) live++ //[1,1] ↓→
            if (cell[torBgn(i) - 1][torEnd(j) + 1] == 1) live++ //[-1,1] ↑→
            if (cell[torBgn(i) - 1][torBgn(j) - 1] == 1) live++ //[-1,-1] ←↑
            if (cell[torEnd(i) + 1][torBgn(j) - 1] == 1) live++ //[1,-1] ←↓
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
    step = setTimeout(life, 2)
}

function torBgn(i) {
    if (i == 0) return 30
    else return i
}
function torEnd(i) {
    if (i == 29) return -1
    else return i
}
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

