window.onload = iniciar;

function iniciar() {
    // Boton Agregar escucha el Click
    var btnAgregar = document.getElementById("btnAgregar");
    btnAgregar.addEventListener("click", clickBtnAgregar)

    // Renderizar la nota
    mostrarNotas();
}

function clickBtnAgregar() {
    // Traemos txtNota
    var txtNota = document.getElementById("txtNota");

    // Queda asignado al localStorage
    localStorage.nota = txtNota.value;
    mostrarNotas();
}

function mostrarNotas() {
    // Trae el Div Notas
    var divNotas = document.getElementById("divNotas");
    // Le asigna las notas desde el LocalStorage
    divNotas.innerHTML = localStorage.nota;
}