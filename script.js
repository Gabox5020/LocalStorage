window.onload = iniciar;

function iniciar() {
    var btnAgregar = document.getElementById("btnAgregar");
    btnAgregar.addEventListener("click", clickBtnAgregar)
    mostrarNotas();
}

function clickBtnAgregar() {
    var txtNota = document.getElementById("txtNota");

    localStorage.nota = txtNota.value;
    mostrarNotas();
}

function mostrarNotas() {
    var divNotas = document.getElementById("divNotas");
    divNotas.innerHTML = localStorage.nota;
}