# Juego de Decisiones: Pirámide de Maslow

Este es un juego interactivo de decisiones basado en la **Pirámide de Necesidades de Maslow**. El jugador asume el rol de un sobreviviente en una isla remota y debe tomar decisiones estratégicas para escalar los niveles de la pirámide (Fisiológicas, Seguridad, Afiliación, Reconocimiento, Autorrealización). 

Si el jugador intenta saltarse un nivel, el juego le avisará que necesita cubrir sus necesidades más básicas primero.

## 🛠️ Tecnologías Utilizadas

- **React:** Biblioteca principal para la construcción de interfaces y manejo del estado del juego.
- **Vite:** Herramienta de compilación y servidor de desarrollo ultrarrápido.
- **Vanilla CSS:** Estilos modernos utilizando variables de CSS y animaciones (estética Dark Mode y Glassmorphism).
- **Lucide React:** Conjunto de iconos elegantes utilizados para representar visualmente cada nivel de la pirámide.

## 📋 Requisitos Previos

Asegúrate de tener instalados los siguientes programas en tu entorno local antes de continuar:

- [Node.js](https://nodejs.org/es/) (Versión 18 o superior recomendada)
- npm (Viene incluido al instalar Node.js)

## 🚀 Instalación y Ejecución Local

Para que todo el equipo pueda probar y colaborar en el proyecto, sigan estos pasos:

1. **Clona este repositorio** en tu máquina local.
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd Maslow
   ```

2. **Instala las dependencias** necesarias del proyecto. Esto descargará React, Vite y Lucide React.
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**.
   ```bash
   npm run dev
   ```

4. **Abre el proyecto en tu navegador**. Vite te mostrará una URL en la terminal (por lo general, es `http://localhost:5173`). ¡Abre esa dirección y comienza a jugar!

## 📂 Estructura Principal del Proyecto

- `src/App.jsx`: Contiene la lógica principal del juego, control de estados y la validación de respuestas.
- `src/gameData.js`: Archivo donde se configuran los escenarios, preguntas, opciones y mensajes para cada nivel de la pirámide.
- `src/components/`: Contiene componentes reutilizables como las tarjetas de nivel (`LevelCard`) y el progreso de la pirámide (`PyramidProgress`).
- `src/index.css` y `src/App.css`: Contienen todos los estilos, animaciones y diseño "Glassmorphism".
