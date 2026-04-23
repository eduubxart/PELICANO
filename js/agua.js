const canvas = document.getElementById("agua");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight / 2;

let t = 0;

function onda() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();

  for (let x = 0; x < canvas.width; x++) {
    let y = 30 * Math.sin((x * 0.02) + t) +
            20 * Math.sin((x * 0.01) + t * 0.5) +
            canvas.height / 2;

    ctx.lineTo(x, y);
  }

  ctx.lineTo(canvas.width, canvas.height);
  ctx.lineTo(0, canvas.height);
  ctx.closePath();

  // cor da água (com transparência)
  ctx.fillStyle = "rgba(0, 180, 216, 0.7)";
  ctx.fill();

  t += 0.05;
  requestAnimationFrame(onda);
}

onda();