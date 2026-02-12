# 🌐 React Context Practice: Auth Flow & Global State

Este repositorio es un laboratorio práctico diseñado para dominar **React Context API**. El objetivo es entender cómo gestionar el estado global de una aplicación, específicamente para un flujo de autenticación, evitando el _prop drilling_ y mejorando la arquitectura del proyecto.

## 🚀 Características del Proyecto

- **Global Auth State:** Gestión centralizada del usuario mediante `UserContext`.
- **Formik + Yup:** Login robusto con validaciones de esquemas en tiempo real.
- **Renderizado Condicional:** Interfaz dinámica que reacciona según si el usuario está autenticado o no.
- **Alertas Interactivas:** Feedback visual mediante SweetAlert2 para una mejor experiencia de usuario.
- **Styled Components:** Arquitectura de estilos basada en componentes, modular y escalable.

---

## 🛠️ Stack Tecnológico

- **React:** Biblioteca principal y uso de Context API (`createContext`, `useContext`).
- **Formik:** Gestión eficiente del estado del formulario de login.
- **Yup:** Validación de esquemas (email, contraseña, etc.).
- **Styled Components:** Estilos dinámicos y encapsulados mediante CSS-in-JS.
- **SweetAlert2:** Notificaciones y alertas estéticas.

---

## 📂 Contenido del Laboratorio

| Sección          | Concepto Clave                        | Herramienta                         |
| :--------------- | :------------------------------------ | :---------------------------------- |
| **Global State** | Creación y provisión del contexto     | `Context API`                       |
| **Auth Flow**    | Login y Logout con estado persistente | `UserContext.Provider`              |
| **Validación**   | Validación de credenciales y feedback | `Formik` & `Yup`                    |
| **UI/UX**        | Estilos dinámicos y alertas           | `Styled Components` & `SweetAlert2` |

---

## 🔧 Configuración Local

1.  **Clonar el repo:**

    ```bash
    git clone [https://github.com/ignacioDorigo/nombre-del-repo](https://github.com/ignacioDorigo/nombre-del-repo)
    ```

2.  **Instalar las dependencias:**

    ```bash
    npm install
    ```

3.  **Lanzar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

---

## 💡 ¿Por qué usar Context API?

> Context API es la solución nativa de React para compartir datos que pueden considerarse "globales" (como el usuario actual, el tema o el idioma) sin tener que pasar props manualmente por cada nivel del árbol de componentes.

---

## 👤 Autor

- **Ignacio Tomás Dorigo** - [GitHub](https://github.com/ignacioDorigo)
- **LinkedIn** - [LinkedIn](https://www.linkedin.com/in/ignacio-dorigo-3aa267203)
