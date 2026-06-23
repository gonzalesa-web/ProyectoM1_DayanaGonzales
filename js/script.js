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

function generatePalette(size) {
    const palette = [];
    for (let i = 0; i < size; i++) {
        palette.push(generateRandomColor());
    }
    return palette;
}

function createColorCard(color) {
    const card = document.createElement("div");
    card.className = "color-card";
    card.style.backgroundColor = hslToString(color);

    const code = document.createElement("span");
    code.className = "color-code";
    code.textContent = hslToHex(color);

    card.appendChild(code);
    return card;
}

function renderPalette(palette) {
    paletteContainer.innerHTML = "";
    palette.forEach(color => {
        const card = createColorCard(color);
        paletteContainer.appendChild(card);
    });
}

generateBtn.addEventListener("click", () => {
    const size = parseInt(paletteSizeSelect.value, 10);
    const palette = generatePalette(size);
    renderPalette(palette);
});

