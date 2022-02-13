const canvas = document.getElementById('life'),
    ctx = canvas.getContext('2d')
    
    


    console.log(canvas)
    
    

// x.textContent = '10123'

// координаты
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}
canvas.addEventListener('mousemove', function (evt) {
    var mousePos = getMousePos(canvas, evt);
    let x = document.getElementById('input_x')
    let y = document.getElementById('input_y')
    x.textContent = mousePos.x
    y.textContent = mousePos.y
})

// Игровое поле
function gameField(){
    let cellSize = document.querySelector('#cell').value || 10
    console.log(cellSize)
    canvas.width = document.querySelector('#width').value || 1000
    canvas.height = document.querySelector('#height').value || 1000
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
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


