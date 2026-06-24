const generateBtn = document.getElementById("generateBtn");
const paletteSizeSelect = document.getElementById("paletteSize");
const paletteContainer = document.getElementById("paletteContainer");

function generateRandomColor() {
    const h = Math.floor(Math.random() * 360);      // tono: 0-360
    const s = Math.floor(Math.random() * 51) + 50;   // saturación: 50-100%
    const l = Math.floor(Math.random() * 41) + 40;   // luminosidad: 40-80%

    return { h, s, l };
}

function hslToString(color) {
    return `hsl(${color.h}, ${color.s}%, ${color.l}%)`;
}

// Le pedimos al navegador que haga la conversión por nosotros:
// pintamos un elemento invisible con el color HSL y leemos
// cómo lo interpretó el navegador en formato RGB, luego lo pasamos a HEX.
function hslToHex(color) {
    const tempDiv = document.createElement("div");
    tempDiv.style.color = hslToString(color);
    document.body.appendChild(tempDiv);

    const rgbString = getComputedStyle(tempDiv).color; // ej: "rgb(120, 45, 200)"
    document.body.removeChild(tempDiv);

    const [r, g, b] = rgbString.match(/\d+/g).map(Number);

    const toHex = (n) => n.toString(16).padStart(2, "0");
    return "#" + toHex(r) + toHex(g) + toHex(b);
}

function generatePalette(size) {
    const palette = [];

    for (let i = 0; i < size; i++) {
        palette.push(generateRandomColor());
    }

    return palette;
}

function createColorCard(color) {
    const hslString = hslToString(color);
    const hex = hslToHex(color);

    const card = document.createElement("div");
    card.className = "color-card";
    card.style.backgroundColor = hslString;

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