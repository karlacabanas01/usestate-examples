# 🟢 React State Playground - App Interactiva con useState y Dark Mode 🌙

## 📜 Descripción

Esta es una aplicación interactiva desarrollada en **React y Next.js** que explora el uso del **hook useState**. Permite experimentar con diferentes ejemplos prácticos, incluyendo:  
✔ Un **contador**.  
✔ Un **input dinámico**.  
✔ Un **gestor de tareas**.  
✔ Un **modo oscuro / claro** con persistencia.  
✔ Un **modal dinámico** que cambia según el tema.

## 🎨 Paleta de Colores

La aplicación sigue una estética basada en la siguiente paleta de colores personalizada:

- **Azul Oscuro:** `#27445D` (`primary`)
- **Verde Oscuro:** `#497D74` (`secondary`)
- **Verde Claro:** `#71BBB2` (`accent`)
- **Beige Claro:** `#EFE9D5` (`background`)

## 🛠️ Tecnologías Utilizadas

✔ **Next.js 15** - Framework de React.  
✔ **TypeScript** - Tipado estático.  
✔ **React Hooks** (`useState`, `useContext`) - Gestión de estado.  
✔ **Tailwind CSS** - Estilización eficiente.

## ✨ Funcionalidades

🔹 **Contador Interactivo:** Aumenta y disminuye valores con `useState`.  
🔹 **Input Dinámico:** Refleja en tiempo real el texto ingresado.  
🔹 **Lista de Tareas:** Agrega y visualiza tareas fácilmente.  
🔹 **Modo Oscuro/Claro:** Cambia el tema y se guarda en `localStorage`.  
🔹 **Modal Personalizado:** Contiene información y respeta el modo oscuro.

## 🚀 Instalación y Uso

### **1️⃣ Clonar el repositorio**

```sh
git clone https://github.com/karlacabanas01/usestate-examples.git
```

## Instalación dependencias

```sh
cd react-state-playground
npm install
```

## Iniciar la aplicación

```sh
npm run dev
```

## Configuración de tailwind.config.ts

```sh
theme: {
  extend: {
    colors: {
      primary: "#27445D",
      secondary: "#497D74",
      accent: "#71BBB2",
      background: "#EFE9D5",
    },
  },
},
```
