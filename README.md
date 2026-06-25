# Colorfly Studio

Generador de paletas de colores aleatorias para diseño rápido e intuitivo. Proyecto Integrador Módulo 1 - Full Stack (SoyHenry).

**Autora:** Dayana Gonzales

## Descripción

Colorfly Studio es una aplicación web estática e interactiva que permite generar paletas de colores aleatorias con un solo clic. Cada color se genera en formato HSL y se muestra también en formato HEX, pensada como herramienta de apoyo para diseño rápido.

## Funcionalidades

- Selección del tamaño de la paleta (6, 8 o 9 colores).
- Generación de colores aleatorios en formato HSL, mostrados también en HEX.
- Copiar el código HEX al portapapeles haciendo clic sobre un color.
- Microfeedback visual mediante notificaciones tipo toast.
- Diseño accesible: labels asociados, contraste adecuado y foco visible al navegar con teclado.

## Cómo usar la aplicación

1. Elegí la cantidad de colores que querés en la paleta usando el selector ("6 colores", "8 colores" o "9 colores").
2. Haz clic en el botón **"Generar paleta"**.
3. Se mostrará una nueva paleta con esa cantidad de colores, cada uno con su código HEX visible.
4. Haz clic sobre cualquier color de la paleta para copiar su código HEX al portapapeles. Vas a ver una notificación confirmando la copia.

## Cómo ejecutar el proyecto localmente

1. Clona el repositorio:
   ```bash
   git clone https://github.com/gonzalesa-web/ProyectoM1_DayanaGonzales.git
   ```
2. Entra a la carpeta del código fuente:
   ```bash
   cd ProyectoM1_DayanaGonzales/Desarrollo
   ```
3. Abre el archivo `index.html` directamente en el navegador, o usá una extensión como **Live Server** (VS Code) para levantarlo en un servidor local.

No requiere instalación de dependencias ni paquetes: es HTML, CSS y JavaScript.

## Despliegue

La aplicación está desplegada con **GitHub Pages** y puede visitarse en:

`https://gonzalesa-web.github.io/ProyectoM1_DayanaGonzales/`

## Decisiones técnicas

- **Generación de color en HSL:** se eligió generar el color de forma nativa en HSL (tono, saturación, luminosidad aleatorios dentro de rangos controlados) en lugar de RGB, ya que permite evitar colores demasiado oscuros, claros o desaturados, dando paletas más prolijas visualmente.
- **Conversión de HSL a HEX:** en vez de implementar manualmente la fórmula matemática de conversión de color, se optó por delegarle el cálculo al navegador: se crea un elemento temporal, se le asigna el color en formato `hsl()`, y se lee el resultado interpretado en RGB mediante `getComputedStyle`, para luego convertirlo a HEX. Esta decisión prioriza código simple y legible por sobre una implementación más compleja.
- **Sin frameworks ni librerías externas:** el proyecto usa JavaScript, separando la lógica en funciones pequeñas con una responsabilidad cada una (generar color, convertir formato, crear tarjeta, renderizar paleta, mostrar feedback).
- **Accesibilidad:** se usaron etiquetas semánticas (`header`, `main`, `footer`), labels asociados al selector, y estilos de foco visibles (`:focus-visible`) para navegación con teclado.

## Posibles mejoras
- Soporte de teclado en las tarjetas de color (tabindex + Enter/Espacio)
- Extra credit: bloqueo de colores y guardado en localStorage
- Agregar modo oscuro

## Estructura del proyecto

```
ProyectoM1_DayanaGonzales/
│   ├── index.html
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── script.js
│   └── assets/
Documentación
    ├── README.md
    └── uso-de-ia.md
```

## Tecnologías utilizadas

- HTML5
- CSS3 (Flexbox)
- JavaScript (vanilla)
- Git y GitHub
- GitHub Pages