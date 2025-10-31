# 📋 Mini CRUD - Lista de Tareas

Aplicación web para gestionar tareas con funcionalidades extendidas.

## 📂 Estructura del Proyecto

```
proyecto/
├── index.html
├── css/styles.css
├── js/script.js
└── README.md
```

---

## 🔍 Análisis del JavaScript Añadido

### **1. Sistema de Imágenes Personalizadas**

```javascript
let imgURL = prompt("Pega la URL de la imagen para esta tarea (o deja vacío para usar una por defecto):");
if (imgURL === "" || imgURL === null) imgURL = "emoji.jpg";
```

**¿Qué hace?**
- Solicita al usuario una URL de imagen usando `prompt()`
- Si el usuario cancela (`null`) o deja el campo vacío (`""`), asigna `"emoji.jpg"` como valor por defecto

**¿Por qué `prompt()`?**
- Función nativa del navegador para obtener input del usuario
- Retorna un string con lo que el usuario escribió, o `null` si cancela
- Es simple y no requiere crear formularios adicionales

**Operador `||` (OR):**
- Evalúa de izquierda a derecha
- Si `imgURL === ""` es true, asigna `"emoji.jpg"` inmediatamente
- Si es false, evalúa `imgURL === null`
- Solo necesita que UNA condición sea verdadera

**Inserción en el DOM:**
```javascript
<img src="${imgURL}" class="img">
```
- Usa template literals para interpolar la variable `imgURL`
- El navegador carga la imagen desde esa URL

---

### **2. Función `cambColor()` - Cambiar Color de Fondo**

```javascript
function cambColor(boton) {
    let li = boton.parentElement;
    let color = prompt("Digita un color (nombre o código HEX):");
    if (color) li.style.backgroundColor = color;
}
```

**¿Qué hace cada línea?**

**`let li = boton.parentElement;`**
- `boton` es el elemento que disparó el evento `onclick`
- `parentElement` obtiene el elemento padre directo (el `<li>`)
- Permite acceder a toda la tarea, no solo al botón

**`let color = prompt("Digita un color...");`**
- Solicita un color al usuario
- Acepta nombres CSS (`red`, `blue`) o códigos HEX (`#FF5733`)

**`if (color) li.style.backgroundColor = color;`**
- `if (color)` valida que la variable tenga contenido (truthy/falsy)
- Si el usuario canceló → `color = null` → no ejecuta
- Si dejó vacío → `color = ""` → no ejecuta
- Si escribió algo → ejecuta el código
- `li.style.backgroundColor` aplica el color como estilo inline al `<li>`

**¿Por qué funciona con cualquier formato?**
- El navegador interpreta automáticamente los valores CSS válidos
- Si el valor es inválido, simplemente lo ignora

---

### **3. Función `editarTarea()` - Editar Texto de la Tarea**

```javascript
function editarTarea(boton) {
    let li = boton.parentElement;
    let span = li.querySelector("span");
    let nuevoTxt = prompt("Editar la tarea: ", span.textContent);

    if (nuevoTxt !== null && nuevoTxt !== ""){
        span.textContent = nuevoTxt;
    }
}
```

**¿Qué hace cada línea?**

**`let li = boton.parentElement;`**
- Obtiene el `<li>` que contiene toda la tarea

**`let span = li.querySelector("span");`**
- `querySelector()` busca el primer `<span>` dentro del `<li>`
- El `<span>` es donde está el texto de la tarea
- Retorna el elemento encontrado

**`let nuevoTxt = prompt("Editar la tarea: ", span.textContent);`**
- `prompt()` tiene dos parámetros:
  - Primer parámetro: el mensaje que ve el usuario
  - Segundo parámetro: el valor por defecto (prellenado)
- `span.textContent` obtiene el texto actual de la tarea
- El usuario ve el texto actual y puede modificarlo sin reescribir todo

**`if (nuevoTxt !== null && nuevoTxt !== "")`**
- Validación de dos condiciones con el operador `&&` (AND)
- `nuevoTxt !== null` → el usuario no canceló
- `nuevoTxt !== ""` → el usuario no dejó el campo vacío
- Ambas deben cumplirse para actualizar el texto

**`span.textContent = nuevoTxt;`**
- Actualiza el texto del `<span>` con el nuevo valor
- Usa `textContent` en lugar de `innerHTML` por seguridad
- `textContent` no interpreta HTML, solo texto plano (previene XSS)

---

## 🎯 Conceptos JavaScript Utilizados

**`prompt(mensaje, valorPorDefecto)`**
- Muestra un cuadro de diálogo para obtener input
- Retorna string o null
- Bloquea la ejecución hasta que el usuario responde

**`parentElement`**
- Propiedad que retorna el elemento padre directo en el DOM
- Permite navegar hacia arriba en el árbol de elementos

**`querySelector(selector)`**
- Busca el primer elemento que coincida con el selector CSS
- Retorna el elemento o null si no lo encuentra

**`textContent`**
- Lee o modifica el texto plano de un elemento
- No interpreta HTML (seguro contra inyecciones)

**`style.propiedad`**
- Accede o modifica estilos inline del elemento
- Se escribe en camelCase (`backgroundColor` en lugar de `background-color`)

**Operador `||` (OR)**
- Retorna el primer valor truthy
- Útil para valores por defecto

**Operador `&&` (AND)**
- Todas las condiciones deben ser true
- Se usa para validaciones múltiples

**Truthy/Falsy**
- `if (variable)` evalúa si la variable tiene un valor "verdadero"
- Falsy: `null`, `""`, `undefined`, `0`, `false`
- Truthy: cualquier otro valor

---

### Etiquetas
![HTML5](https://img.shields.io/badge/HTML5-5-E34F26?style=for-the-badge&logo=html5&logoColor=white)  
![CSS3](https://img.shields.io/badge/CSS3-3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## Autor 

* **Victor Cordoba** - *Creador y desarrollador principal* - [VoctorX](https://github.com/VoctorX)

## Fecha 
* *Octubre 30 del 2025*