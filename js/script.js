const generateBtn = document.getElementById("generateBtn");
const paletteSizeSelect = document.getElementById("paletteSize");
const paletteContainer = document.getElementById("paletteContainer");

function generateRandomColor() {
  const h = Math.floor(Math.random() * 360);
  const s = Math.floor(Math.random() * 50) + 50;
  const l = Math.floor(Math.random() * 30) + 40;
  return { h, s, l };
}



