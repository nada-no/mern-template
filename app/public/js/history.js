
const display = document.getElementById("chat");
if(historial.length == 0) display.innerHTML = "El historial de la sala está vacío";
for (const mensaje of historial) {
    display.innerHTML += "<p>[" + mensaje.date + "] " + mensaje.user + ": " + mensaje.content;
}
