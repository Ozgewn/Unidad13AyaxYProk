window.onload = inicializaEventos;
function inicializaEventos() {
    document.getElementById("btnName").addEventListener("click", saludo, false);
}
function saludo() {
    var miLlamada = new XMLHttpRequest();
    miLlamada.open("GET", "https://crudpersonasaspcr7.azurewebsites.net/api/Persona");
    miLlamada.onreadystatechange = function () {
        if (miLlamada.readyState == 4 && miLlamada.status == 200) {
            var arrayPersonas = JSON.parse(miLlamada.responseText);
            document.getElementById("divNombre").innerHTML = arrayPersonas[0].apellidos;
        }
    }
    miLlamada.send();
}