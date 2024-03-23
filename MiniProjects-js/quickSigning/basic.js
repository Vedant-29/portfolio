let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let isDrawing = false;

canvas.addEventListener('mousedown', (event) => {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    isDrawing = true;
    lastX = x;
    lastY = y;
});

canvas.addEventListener('mousemove', (event) => {
    if (isDrawing) {
        let rect = canvas.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;

        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.stroke();

        lastX = x;
        lastY = y;  
    }
});

canvas.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
});
  
document.getElementById("clear-button").addEventListener("click", function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

document.getElementById("save-button").addEventListener("click", function() {
    let image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    let link = document.createElement('a');
    link.download = "signature.png";
    link.href = image;
    link.click();
});
