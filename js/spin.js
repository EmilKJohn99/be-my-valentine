const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");
const spinBtn = document.getElementById("spinBtn");
const resultDiv = document.getElementById("result");

const rewards = [
  "🎁 Reward of Your Choice",
  "Dalba Truffle Serum",
  "MAC Foundation",
  "Dozen Scented Candles",
  "MAC Foundation",
  "VS Pure Seduction",
  "VS Very Sexy Night"
];

const colors = [
  "#ffb3c6",
  "#ffc8dd",
  "#ffd6e0",
  "#ffcad4",
  "#f4acb7",
  "#ffafcc",
  "#ffc2d1"
];

// Bigger wheel
const size = 460;
canvas.width = size;
canvas.height = size;

const center = size / 2;
const radius = size / 2;
const sliceAngle = (2 * Math.PI) / rewards.length;

let angle = 0;
let spinning = false;

/* Draw Wheel */
function drawWheel() {
  ctx.clearRect(0, 0, size, size);

  rewards.forEach((reward, i) => {
    const start = angle + i * sliceAngle;
    const end = start + sliceAngle;

    ctx.beginPath();
    ctx.moveTo(center, center);
    ctx.arc(center, center, radius, start, end);
    ctx.fillStyle = colors[i % colors.length];
    ctx.fill();

    ctx.save();
    ctx.translate(center, center);
    ctx.rotate(start + sliceAngle / 2);
    ctx.textAlign = "right";
    ctx.fillStyle = "#333";
    ctx.font = "16px Poppins";
    ctx.fillText(reward, radius - 20, 6);
    ctx.restore();
  });
}

drawWheel();

/* Spin Logic – slow cinematic stop */
spinBtn.addEventListener("click", () => {
  if (spinning) return;

  spinning = true;
  spinBtn.disabled = true;
  resultDiv.classList.add("hidden");

  const spinDuration = 5000; // ⏳ longer
  const rotations = Math.random() * 3 + 7; // 7–10 full spins
  const startAngle = angle;
  const targetAngle = angle + rotations * 2 * Math.PI;

  const startTime = performance.now();

  function animate(time) {
    const elapsed = time - startTime;
    const progress = Math.min(elapsed / spinDuration, 1);

    // Smooth dramatic slow-down
    const easeOut = 1 - Math.pow(1 - progress, 4);

    angle = startAngle + (targetAngle - startAngle) * easeOut;
    drawWheel();

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      finishSpin();
    }
  }

  requestAnimationFrame(animate);
});

/* Finish Spin */
function finishSpin() {
  spinning = false;
  spinBtn.disabled = false;

  // Pointer at top
  const pointerAngle = (3 * Math.PI) / 2;
  const normalized =
    (2 * Math.PI + pointerAngle - (angle % (2 * Math.PI))) % (2 * Math.PI);

  const index = Math.floor(normalized / sliceAngle) % rewards.length;

  resultDiv.classList.remove("hidden");
  resultDiv.innerHTML = `
    <h2>🎉 Congratulations!</h2>
    <p>You won:</p>
    <h3>${rewards[index]}</h3>
  `;
}
