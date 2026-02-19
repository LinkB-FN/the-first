# FortFlix - Aplicación de Cine en React

Este proyecto es una implementación de la capa visual para una aplicación de cine ficticia llamada "FortFlix". Fue desarrollado con React y CSS, basándose en una guía visual de Figma y una arquitectura de componentes predefinida.

## Características Implementadas

La aplicación cuenta con una interfaz limpia, responsiva y coherente, dividida en las siguientes secciones:

1.  **Cartelera**:
    *   Muestra las películas disponibles en formato de tarjetas.
    *   Diseño en cuadrícula (grid) que se adapta a diferentes tamaños de pantalla.

2.  **Alimentos**:
    *   Una nueva sección visual que presenta productos de dulcería.
    *   Los productos están organizados por categorías: Bebidas, Comestibles y Dulces.
    *   Cada producto se muestra en una tarjeta reutilizable.

3.  **Otros**:
    *   Contiene elementos secundarios de la aplicación.
    *   Incluye información sobre Promociones, Membresías, Preventas y Formatos Especiales.

## Diseño y Estilos

*   **Paleta de Colores y Tipografía**: Se aplicaron los estilos definidos en la guía de Figma para mantener la consistencia visual.
*   **Diseño Responsivo**: Se utilizó CSS Flexbox y Grid para asegurar que la aplicación se vea bien tanto en dispositivos móviles como en escritorio.
*   **Componentes Reutilizables**: La interfaz se construyó utilizando componentes modulares y estilizados como `MovieCard`, `FoodCard`, y `InfoCard`.

## Tecnologías Utilizadas

*   **React**: Biblioteca principal para la construcción de la interfaz de usuario.
*   **CSS Moderno**: Para estilos, animaciones y diseño responsivo (Flexbox y Grid).
*   **Vite**: Como herramienta de construcción y servidor de desarrollo.

## Cómo Empezar

Sigue estos pasos para ejecutar el proyecto en tu máquina local.

1.  **Clona el repositorio** (una vez que lo hayas subido a GitHub):
    ```sh
    git clone https://github.com/tu-usuario/tu-repositorio.git
    ```
2.  **Instala las dependencias**:
    ```sh
    npm install
    ```
3.  **Ejecuta el servidor de desarrollo**:
    ```sh
    npm run dev
    ```