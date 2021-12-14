window.onload = iniciar;

function iniciar() {
    var btnAgregar = document.getElementById("btnAgregar");
    btnAgregar.addEventListener("click", clickBtnAgregar)
}

function clickBtnAgregar() {
    var txtNota = document.getElementById("txtNota");
    alert(txtNota.value)
}