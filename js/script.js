var lista = document.getElementById("lista");

function agregarTarea() {
    let tareaTexto = document.getElementById("tarea").value;
    if (tareaTexto === "") return;

    let imgURL = prompt("Pega la URL de la imagen para esta tarea (o deja vacío para usar una por defecto):");
    if (imgURL === "" || imgURL === null) imgURL = "assets/img/emoji.jpg";

    let li = document.createElement("li");
    li.innerHTML = `
    <img src="${imgURL}" class="img">
    <span>${tareaTexto}</span>
    <button class="change-btn" onclick="editarTarea(this)"><i class="fa-solid fa-pencil"></i></button>
    <button class="color-btn" onclick="cambColor(this)"><i class="fa-solid fa-palette"></i></button>
    <button class="delete-btn" onclick="eliminarTarea(this)"><i class="fa-solid fa-trash"></i></button>
    `;
    
    lista.appendChild(li);
    document.getElementById("tarea").value = "";
}

function eliminarTarea(boton) {
    let li = boton.parentElement;
    lista.removeChild(li);
}

function cambColor(boton) {
    let li = boton.parentElement;
    let color = prompt("Digita un color (nombre o código HEX):");
    if (color) li.style.backgroundColor = color;
}
function editarTarea(boton) {
    let li = boton.parentElement;
    let span = li.querySelector("span");
    let nuevoTxt= prompt("Editar la tarea: ", span.textContent);

    if (nuevoTxt !== null && nuevoTxt !==""){
        span.textContent= nuevoTxt;
    }
}