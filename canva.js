const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
var heigth = 280;
var width = 380;

function draw_line(startX, startY, endX, endY, color) {
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.lineTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
}

function clear_screen() {
    ctx.fillStyle = "red";
    clearRect(10, 10, canvas.width, canvas.height)
}

function game_loop() {
    ctx.fillStyle = "red";
    ctx.fillRect(10, 10, width, heigth);
    ctx.lineWidth = 10;
    ctx.strokeRect(10, 10, 365, 265);
    draw_line(50, 120, 250, 120, "black");
    ctx.beginPath();
    ctx.arc(100, 75, 20, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(200, 75, 20, 0, 2 * Math.PI);
    ctx.stroke();
}

document.addEventListener("DOMContentLoaded", (event) => {
    setInterval(game_loop, 1000 / 30);
});
