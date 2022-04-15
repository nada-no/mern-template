const display = document.getElementById("chat");
for (const mensaje of historial) {
    display.innerHTML += "<p>[" + mensaje.date + "] " + mensaje.user + ": " + mensaje.content;
}