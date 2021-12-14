window.onload = iniciar;

function iniciar() {
    // Boton Agregar escucha el Click
    var btnAgregar = document.getElementById("btnAgregar");
    btnAgregar.addEventListener("click", clickBtnAgregar)

    // Boton Borrar escucha el Click
    var btnBorrar = document.getElementById("btnBorrar");
    btnBorrar.addEventListener("click", clickBtnBorrar)


    // Renderizar la nota
    mostrarNotas();
}

function clickBtnBorrar() {
    localStorage.clear();
    mostrarNotas();
}

function clickBtnAgregar() {
    // Traemos txtNota
    var txtNota = document.getElementById("txtNota");


    
    var notas = [];
    if (localStorage.notas) {
        notas = JSON.parse(localStorage.notas);
    }
    

    notas.push(txtNota.value);
    localStorage.notas = JSON.stringify(notas);
    mostrarNotas();
}

function mostrarNotas() {
    // Trae el Div Notas
    var divNotas = document.getElementById("divNotas");
    // Le asigna las notas desde el LocalStorage
    var notas = [];
    if (localStorage.notas) {
        notas = JSON.parse(localStorage.notas);
    }

    var html ="";
    for (var nota of notas) {
        html += nota + "<br/>"
    }
    divNotas.innerHTML = html;
}