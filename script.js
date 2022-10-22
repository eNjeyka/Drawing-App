let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

const btnIncrease = document.getElementById("increase");
const btnDecrease = document.getElementById("decrease");
const btnColor = document.getElementById("color");
const spanSize = document.getElementById("size");
const btnClear = document.getElementById("clear");

let size = 20;
let color = "black";
let x;
let y;
let isPressed = false;

canvas.addEventListener("mousedown", (e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
    isPressed = false;

    x = undefined;
    y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);

        x = x2;
        y = y2;
    }
});

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = btnColor.value;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = btnColor.value;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

btnIncrease.addEventListener("click", () => {
    if (size < 100) {
        size += 1;
        spanSize.innerHTML = size;
    }
});

btnDecrease.addEventListener("click", () => {
    if (size > 0) {
        size -= 1;
        spanSize.innerHTML = size;
    }
});

btnClear.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})

// btnColor.addEventListener('change', () => {
//     console.log(color)
//     color = btnColor.value
//     console.log(color)
// })