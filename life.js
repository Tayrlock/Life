const canvas = document.getElementById('life'),
    ctx = canvas.getContext('2d');

let cell = [],
    fieldWidth,
    fieldHeight,
    cellSize,
    y1,
    x1

// Обработчики событий
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

// Скорость шага
function timer() {
    let step = Math.floor(document.querySelector('#step').value || 5)
    let a = setTimeout(life, step)
    if (play == false) { clearTimeout(a) }
}

// Получение размеров поля
function updateField() {
    canvas.width = Math.floor(document.querySelector('#width').value || 500)
    canvas.height = Math.floor(document.querySelector('#height').value || 600)
    cellSize = Math.floor(document.querySelector('#cell').value || 5)
    canvas.width = canvas.width - canvas.width % cellSize
    canvas.height = canvas.height - canvas.height % cellSize
    sumY = canvas.height / cellSize 
    sumX = canvas.width / cellSize
    fieldHeight = sumY * cellSize 
    fieldWidth = sumX * cellSize
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
            cell[i][j] = false
        }
    }
    // console.log(cell)
}
// Рандомное заполнение поля
function randomCell() {
    for (let i = 0; i < sumY; i++) {
        cell[i] = []
        for (let j = 0; j < sumX; j++) {
            (Math.random() > 0.6) ? cell[i][j] = true : cell[i][j] = false
        }
    }
    drawCell()
}

// Получение клеток по координатам
function takeCoord(e) {
    let x = e.offsetX,
        y = e.offsetY
    x = Math.floor(x / cellSize)
    y = Math.floor(y / cellSize)
    saveCoord(y, x)
}
// Сохранение координат 
function saveCoord(y, x) {
    if (x == x1 && y == y1) return
    else {
        if (cell[y][x] == false) {
            cell[y][x] = true;
            x1 = x
            y1 = y
            addCell(x, y)
        } else {
            cell[y][x] = false
            clearCell(x, y)
            x1 = x
            y1 = y
        }
    }
}

// Отрисовка
function addCell(x, y) {
    ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize)
}
function clearCell(x, y) {
    ctx.clearRect(x * cellSize, y * cellSize, cellSize, cellSize)
}
function drawCell() {
    ctx.clearRect(0, 0, fieldWidth, fieldHeight)
    for (let i = 0; i < sumY; i++) {
        for (let j = 0; j < sumX; j++) {
            if (cell[i][j] == true) {
                ctx.fillRect(j * cellSize, i * cellSize, cellSize, cellSize)
            }
        }
    }
}

function life() {
    // проверка соседних клеток на живые клетки
    let newCell = []
    for (let i = 0; i < sumY; i++) {
        newCell[i] = []
        for (let j = 0; j < sumX; j++) {
            let live = 0
            if (cell[torYEnd(i) + 1][j] == true) live++ //[1,0] down ↓
            if (cell[torYBgn(i) - 1][j] == true) live++ //[-1,0] up ↑
            if (cell[i][torXEnd(j) + 1] == true) live++ //[0,1] right →
            if (cell[i][torXBgn(j) - 1] == true) live++ //[0,-1]  left ←
            if (cell[torYEnd(i) + 1][torXEnd(j) + 1] == true) live++ //[1,1] ↓→
            if (cell[torYBgn(i) - 1][torXEnd(j) + 1] == true) live++ //[-1,1] ↑→
            if (cell[torYBgn(i) - 1][torXBgn(j) - 1] == true) live++ //[-1,-1] ←↑
            if (cell[torYEnd(i) + 1][torXBgn(j) - 1] == true) live++ //[1,-1] ←↓
            if (live == 2) { newCell[i][j] = cell[i][j] } // 2 live = stay, 3 live = born, other = dead
            else {
                if (live == 3) { newCell[i][j] = true }
                else { newCell[i][j] = false }
            }
        }
    }
    cell = newCell
    drawCell()
    timer()
}

// Реализация тор для разносторонних прямоугольников
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
