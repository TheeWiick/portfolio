# 🌐 Portfolio Personal — JaviDev

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)

Sitio web personal y portfolio interactivo para presentar mis proyectos, habilidades técnicas y trayectoria Frontend.

[🌐 Visitar Portfolio](https://theewiick.github.io/portfolio/)

</div>

---

## ✨ Características

- **Diseño responsive** con CSS Grid, Flexbox y tipografía fluida (`clamp()`).
- **Tema oscuro** con degradados, rejilla de fondo y efecto *glass* en el header.
- **Menú móvil accesible** (hamburguesa) con cierre por clic, `Escape` y bloqueo de scroll.
- **Scroll-spy**: el enlace de la sección visible se resalta automáticamente.
- **Animaciones al hacer scroll** con `IntersectionObserver` y respeto por `prefers-reduced-motion`.
- **Accesibilidad**: skip-link, `aria-*`, foco visible, HTML semántico y contraste cuidado.
- **SEO y redes**: meta description, Open Graph, Twitter Card, JSON-LD (`Person`), `robots.txt` y `sitemap.xml`.
- **Rendimiento**: imágenes WebP optimizadas, `loading="lazy"`, `decoding="async"` y cero dependencias JS.

## 🚀 Proyectos destacados

### 1. ⚡ [Pulse Fitness](https://github.com/TheeWiick/Pulse-Fitness)

- **Descripción:** Landing page dark mode para un gimnasio de Alicante, con calculadora de calorías, tarifas dinámicas y páginas legales con rutas.
- **Stack:** React, TypeScript, Tailwind CSS, React Router, Vite.
- **Web:** [Visitar Web](https://theewiick.github.io/Pulse-Fitness/)

### 2. 🌤️ [Weather App](https://github.com/TheeWiick/Weather-App)

- **Descripción:** Aplicación meteorológica web para consultar el tiempo en tiempo real mediante APIs externas.
- **Stack:** HTML5, CSS3, JavaScript (ES6+), REST APIs.
- **Web:** [Visitar Web](https://theewiick.github.io/Weather-App/)

### 3. 🌍 [App-Lugares](https://github.com/TheeWiick/App-Lugares)

- **Descripción:** Plataforma multipágina interactiva para el descubrimiento de destinos turísticos y experiencias de viaje.
- **Stack:** HTML5, SCSS modular, JavaScript Vanilla.
- **Web:** [Visitar Web](https://theewiick.github.io/App-Lugares/)

### 4. 📝 [To-Do List](https://github.com/TheeWiick/To-Do-List)

- **Descripción:** Aplicación interactiva para la gestión eficiente de tareas con persistencia de datos local.
- **Stack:** HTML5, CSS3, JavaScript (localStorage).
- **Web:** [Visitar Web](https://theewiick.github.io/To-Do-List/)

## 🛠️ Habilidades y tecnologías

- **Frontend:** HTML5, CSS3, SCSS/Sass, JavaScript (ES6+), TypeScript.
- **Frameworks y librerías:** React, Angular, Astro, Tailwind CSS.
- **APIs:** consumo de APIs REST.
- **Herramientas:** Git, GitHub, VS Code.

## 📂 Estructura del proyecto

```text
portfolio/
├── img/
│   ├── favicon.svg
│   ├── og-image.webp        # Imagen para redes sociales (Open Graph)
│   ├── javidev.webp
│   ├── pulsefitness.webp
│   ├── todolist.webp
│   ├── weatherapp.webp
│   ├── applugares.webp
│   └── certificado.webp
├── index.html               # Estructura y contenido
├── style.css                # Estilos (tokens, componentes, responsive)
├── script.js                # Menú, scroll-spy y animaciones
├── robots.txt
├── sitemap.xml
└── README.md
```

## 💻 Desarrollo local

No necesita instalación ni build. Basta con abrir `index.html` o servir la carpeta:

```bash
# Con Python
python -m http.server 8000

# Con Node
npx serve .
```

Luego abre `http://localhost:8000`.

## 🚀 Despliegue

El sitio se publica automáticamente con **GitHub Pages** desde la rama principal.
Cualquier cambio en `index.html`, `style.css` o `script.js` se refleja al hacer `push`.

---

Hecho con HTML, CSS y JavaScript. Sin frameworks, sin dependencias. 🚀
