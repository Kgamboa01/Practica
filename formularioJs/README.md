# ⚡ Validación de Formularios con JavaScript Moderno

![Estado](https://img.shields.io/badge/estado-listo%20para%20uso-brightgreen)
![JavaScript](https://img.shields.io/badge/javascript-ES6+-yellow)
![HTML](https://img.shields.io/badge/html-5-orange)
![SweetAlert2](https://img.shields.io/badge/UI-SweetAlert2-blue)
![Licencia](https://img.shields.io/badge/licencia-académico-lightgrey)

---

## ✨ Descripción General

Proyecto académico que demuestra la implementación de validación de formularios en el frontend utilizando JavaScript moderno.

Incluye:

- ✅ Validación de campos obligatorios
- 🔐 Verificación de contraseñas coincidentes
- 🎨 Resaltado visual de errores
- 🔔 Alertas modernas con SweetAlert2
- 🧠 Manipulación del DOM
- 📌 Validación híbrida (HTML + JS)

---

## 🚀 Flujo de Funcionamiento

1. El usuario completa el formulario.
2. Se ejecuta la validación al presionar el botón.
3. JavaScript revisa:
   - Campos vacíos
   - Coincidencia de contraseñas
4. Se resaltan errores visualmente.
5. Se muestra feedback con SweetAlert.

---

## 🧩 Características Principales

| Funcionalidad | Descripción |
|--------------|------------|
| Validación de requeridos | Usa `:required` del DOM |
| Validación de contraseñas | Comparación directa de valores |
| UI feedback | SweetAlert2 |
| Manipulación DOM | `getElementById` y `querySelectorAll` |

---

## 📁 Estructura del Proyecto
📦 registro-formulario
┣ 📂 css
┃ ┗ 📜 index.css
┣ 📂 js
┃ ┗ 📜 index.js
┣ 📜 index.html
┗ 📜 README.md


---

## ⚙️ Lógica JavaScript

### Validación de campos

```js
camposRequeridos.forEach(campo =>{
    if(campo.value == ""){
        campo.classList.add("inputError");
    }
});

### Validación de contraseña

if(inputContrasenna.value !== inputConfirmacion.value){
    inputContrasenna.classList.add('inputError');
}

### Alertas con SweetAlert2
Swal.fire({
  title: "Usuario registrado con éxito",
  icon: "success"
});

##Buenas Prácticas

Separación HTML / CSS / JS

Validación en cliente

Feedback visual inmediato

Uso de librerías modernas

📌 Estado del Proyecto

🟢 Listo para uso académico
🟢 Ideal para principiantes en JavaScript

