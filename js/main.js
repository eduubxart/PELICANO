// =========================
// MAR ANIMADO DO HERO
// =========================
const canvas = document.getElementById("waterCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  const hero = document.querySelector(".hero");
  const rect = hero.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height * 0.48;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let time = 0;

function drawWave(offsetY, amplitude, frequency, speed, color, alpha = 1) {
  ctx.beginPath();
  ctx.moveTo(0, canvas.height);

  for (let x = 0; x <= canvas.width; x++) {
    const y =
      offsetY +
      Math.sin(x * frequency + time * speed) * amplitude +
      Math.sin(x * frequency * 0.45 + time * speed * 0.8) * (amplitude * 0.4);

    ctx.lineTo(x, y);
  }

  ctx.lineTo(canvas.width, canvas.height);
  ctx.closePath();
  ctx.globalAlpha = alpha;
  ctx.fillStyle = color;
  ctx.fill();
  ctx.globalAlpha = 1;
}

function drawBubbles() {
  for (let i = 0; i < 12; i++) {
    const x = ((i * 131) + (time * 14)) % canvas.width;
    const y = canvas.height - 30 - ((time * (0.5 + i * 0.02) * 8) % 140);
    const r = 2 + (i % 4);

    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255,255,255,0.22)";
    ctx.fill();
  }
}

function animateWater() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // base
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, "rgba(117, 224, 244, 0.92)");
  gradient.addColorStop(1, "rgba(168, 244, 255, 0.98)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // ondas de profundidade
  drawWave(canvas.height * 0.20, 10, 0.014, 1.8, "rgba(0, 110, 220, 0.55)", 0.55);
  drawWave(canvas.height * 0.23, 8, 0.018, 2.2, "rgba(0, 160, 255, 0.35)", 0.48);
  drawWave(canvas.height * 0.18, 6, 0.023, 2.6, "rgba(255,255,255,0.78)", 0.75);

  // brilho do topo da água
  ctx.beginPath();
  for (let x = 0; x <= canvas.width; x++) {
    const y =
      canvas.height * 0.17 +
      Math.sin(x * 0.015 + time * 2.1) * 6 +
      Math.sin(x * 0.035 + time * 1.1) * 2.5;
    if (x === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.strokeStyle = "rgba(255,255,255,0.8)";
  ctx.lineWidth = 2.4;
  ctx.stroke();

  drawBubbles();

  time += 0.018;
  requestAnimationFrame(animateWater);
}

animateWater();

// =========================
// REVEAL AO DESCER
// =========================
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const trigger = window.innerHeight * 0.86;

  revealElements.forEach((element) => {
    const top = element.getBoundingClientRect().top;
    if (top < trigger) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// =========================
// SLIDER DO TIME
// =========================
const teamTrack = document.getElementById("teamTrack");
const teamPrev = document.getElementById("teamPrev");
const teamNext = document.getElementById("teamNext");
const teamCards = document.querySelectorAll(".team-card");

let teamIndex = 0;

function getVisibleCards() {
  if (window.innerWidth <= 1100) return 1;
  return 3;
}

function updateTeamSlider() {
  const visible = getVisibleCards();
  const maxIndex = Math.max(0, teamCards.length - visible);

  if (teamIndex > maxIndex) teamIndex = maxIndex;
  if (teamIndex < 0) teamIndex = 0;

  const cardWidth = teamCards[0].getBoundingClientRect().width;
  const offset = teamIndex * cardWidth;
  teamTrack.style.transform = `translateX(-${offset}px)`;
}

teamNext.addEventListener("click", () => {
  const visible = getVisibleCards();
  const maxIndex = Math.max(0, teamCards.length - visible);
  teamIndex = teamIndex >= maxIndex ? 0 : teamIndex + 1;
  updateTeamSlider();
});

teamPrev.addEventListener("click", () => {
  const visible = getVisibleCards();
  const maxIndex = Math.max(0, teamCards.length - visible);
  teamIndex = teamIndex <= 0 ? maxIndex : teamIndex - 1;
  updateTeamSlider();
});

window.addEventListener("resize", updateTeamSlider);
window.addEventListener("load", updateTeamSlider);