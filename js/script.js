const generateBtn = document.getElementById("generateBtn");
const paletteSizeSelect = document.getElementById("paletteSize");
const paletteContainer = document.getElementById("paletteContainer");

function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return { r, g, b };
}

function rgbToHex(color) {
    const toHex = (n) => n.toString(16).padStart(2, "0");
    return "#" + toHex(color.r) + toHex(color.g) + toHex(color.b);
}

function generatePalette(size) {
    const palette = [];

    for (let i = 0; i < size; i++) {
        palette.push(generateRandomColor());
    }

    return palette;
}

function createColorCard(color) {
    const hex = rgbToHex(color);

    const card = document.createElement("div");
    card.className = "color-card";
    card.style.backgroundColor = hex;

    const code = document.createElement("span");
    code.className = "color-code";
    code.textContent = hex;
    card.appendChild(code);

    card.addEventListener("click", () => {
        navigator.clipboard.writeText(hex);
        showToast(`${hex} copiado`);
    });

    return card;
}

function renderPalette(palette) {
    paletteContainer.innerHTML = "";

    palette.forEach((color) => {
        const card = createColorCard(color);
        paletteContainer.appendChild(card);
    });
}

function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 2000);
}

generateBtn.addEventListener("click", () => {
    const size = parseInt(paletteSizeSelect.value, 10);
    const palette = generatePalette(size);

    renderPalette(palette);
    showToast("Paleta generada");
});