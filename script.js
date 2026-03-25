function guardarDatos() {

let nombre = document.getElementById("nombre").value;
let telefono = document.getElementById("telefono").value;
let email = document.getElementById("email").value;

if (!nombre) {
alert("Introduce un nombre");
return;
}

let participantes = JSON.parse(localStorage.getItem("participantes")) || [];

participantes.push({
nombre: nombre,
telefono: telefono,
email: email
});

localStorage.setItem("participantes", JSON.stringify(participantes));

document.getElementById("mensaje").innerText = "Datos enviados correctamente";

document.getElementById("nombre").value = "";
document.getElementById("telefono").value = "";
document.getElementById("email").value = "";

}

function descargarTXT() {

let participantes = JSON.parse(localStorage.getItem("participantes")) || [];

let texto = "";

participantes.forEach(p => {
texto += p.nombre + " - " + p.telefono + " - " + p.email + "\n";
});

let blob = new Blob([texto], { type: "text/plain" });

let enlace = document.createElement("a");

enlace.href = URL.createObjectURL(blob);
enlace.download = "participantes.txt";

enlace.click();

}

function realizarSorteo() {

let participantes = JSON.parse(localStorage.getItem("participantes")) || [];

if (participantes.length === 0) {
alert("No hay participantes");
return;
}

let indice = Math.floor(Math.random() * participantes.length);

let ganador = participantes[indice];

document.getElementById("resultado").innerText =
"Ganador: " + ganador.nombre;

}
