const canvas = document.getElementById('market-canvas');
const context = canvas.getContext('2d');

const state = {
  width: 0,
  height: 0,
  points: [],
};

function resize() {
  const scale = window.devicePixelRatio || 1;
  state.width = canvas.clientWidth;
  state.height = canvas.clientHeight;
  canvas.width = Math.floor(state.width * scale);
  canvas.height = Math.floor(state.height * scale);
  context.setTransform(scale, 0, 0, scale, 0, 0);
  state.points = Array.from({ length: 68 }, (_, index) => ({
    x: (index / 67) * state.width,
    base: state.height * (0.35 + Math.random() * 0.32),
    amp: 18 + Math.random() * 54,
    speed: 0.0007 + Math.random() * 0.0012,
    phase: Math.random() * Math.PI * 2,
  }));
}

function draw(timestamp) {
  context.clearRect(0, 0, state.width, state.height);
  context.lineWidth = 2;

  const tracks = [
    ['rgba(226, 184, 76, 0.95)', 0],
    ['rgba(56, 189, 248, 0.7)', 72],
    ['rgba(34, 197, 94, 0.48)', 144],
  ];

  for (const [color, offset] of tracks) {
    context.beginPath();
    state.points.forEach((point, index) => {
      const y = point.base + Math.sin(timestamp * point.speed + point.phase + offset) * point.amp;
      if (index === 0) context.moveTo(point.x, y);
      else context.lineTo(point.x, y);
    });
    context.strokeStyle = color;
    context.stroke();
  }

  context.fillStyle = 'rgba(255, 255, 255, 0.12)';
  for (let x = 0; x < state.width; x += 72) {
    context.fillRect(x, 0, 1, state.height);
  }
  for (let y = 80; y < state.height; y += 72) {
    context.fillRect(0, y, state.width, 1);
  }

  requestAnimationFrame(draw);
}

window.addEventListener('resize', resize);
resize();
requestAnimationFrame(draw);
