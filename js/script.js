const generateBtn = document.getElementById("generateBtn");
const paletteSizeSelect = document.getElementById("paletteSize");
const paletteContainer = document.getElementById("paletteContainer");

function generateRandomColor() {
    const h = Math.floor(Math.random() * 360);
    const s = Math.floor(Math.random() * 50) + 50;
    const l = Math.floor(Math.random() * 30) + 40;
    return { h, s, l };
}

function hslToString(color) {
    return `hsl(${color.h}, ${color.s}%, ${color.l}%)`;
}

function hslToHex(color) {
    const div = document.createElement("div");
    div.style.color = hslToString(color);
    document.body.appendChild(div);
    const rgb = getComputedStyle(div).color;
    document.body.removeChild(div);

    const valores = rgb.match(/\d+/g).map(Number);
    return "#" + valores.slice(0, 3).map(n => n.toString(16).padStart(2, "0")).join("");
}
