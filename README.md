# 🩺 Guía de Telemedicina

Una aplicación web interactiva y responsiva diseñada para guiar a los pacientes a través de sus consultas médicas online. Proporciona instrucciones claras para el uso de diferentes plataformas (Cal.com, MyClinic, Keet, AltSendMe), requisitos técnicos, comparativas y protocolos de seguridad.

![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=flat&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=flat&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.19-38B2AC?style=flat&logo=tailwind-css&logoColor=white)

## ✨ Características

- 📱 **Diseño Responsivo:** Funciona perfectamente en móviles, tablets y escritorios.
- 🎨 **UI/UX Moderna:** Interfaz limpia construida con **Radix UI** y estilizada con **Tailwind CSS**.
- ⚡ **Rendimiento:** Construido con **Vite** para tiempos de carga ultrarrápidos.
- 🔒 **Enfoque en Privacidad:** Secciones dedicadas a explicar el cifrado y manejo de datos de cada plataforma.
- 📊 **Comparativa Visual:** Tablas interactivas para elegir la mejor plataforma de videollamada.
- ♿ **Accesibilidad:** Componentes Radix UI asegurando una navegación accesible.

## 🛠️ Stack Tecnológico

Este proyecto utiliza tecnologías modernas para garantizar escalabilidad y mantenibilidad:

- **Framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Herramienta de Build:** [Vite](https://vitejs.dev/)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/) + [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge)
- **Componentes UI:** [Radix UI](https://www.radix-ui.com/) (Dialog, Alert, Accordion, etc.)
- **Iconos:** [Lucide React](https://lucide.dev/)
- **Validación de Formularios:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Utilidades:** [class-variance-authority](https://cva.style/)

## 🚀 Instalación y Uso

Sigue estos pasos para poner el proyecto en marcha en tu entorno local:

### Prerrequisitos

- Node.js (v20 o superior recomendado)
- npm, yarn o pnpm

### Pasos

1.  **Clona el repositorio**
    ```bash
    git clone <url-de-tu-repositorio>
    cd guia-telemedicina
    ```

2.  **Instala las dependencias**
    ```bash
    npm install
    ```

3.  **Inicia el servidor de desarrollo**
    ```bash
    npm run dev
    ```

4.  Abre tu navegador y navega a `http://localhost:5173`

## 📜 Scripts Disponibles

- `npm run dev` -> Inicia el servidor de desarrollo con Hot Module Replacement (HMR).
- `npm run build` -> Compila la aplicación para producción en la carpeta `dist`.
- `npm run preview` -> Previsualiza la build de producción localmente.
- `npm run lint` -> Ejecuta ESLint para verificar el código.

## 📂 Estructura del Proyecto

```text
guia-telemedicina/
├── public/          # Archivos estáticos
├── src/
│   ├── components/  # Componentes reutilizables de UI (Botones, Cards, Alerts)
│   ├── App.tsx      # Componente principal con la lógica de la guía
│   ├── main.tsx     # Punto de entrada de la aplicación
│   └── index.css    # Estilos globales y directivas de Tailwind
├── index.html
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## 📄 Licencia

Este proyecto es privado.

---

**Desarrollado con ❤️ para facilitar el acceso a la salud digital.**
