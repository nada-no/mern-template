const session = require("express-session");

document.addEventListener("DOMContentLoaded", function (event) {
  //Nos conectamos al servicio de socket
  const socket = io("http://localhost:2000");

    /*
   * Acciones que se realizan cuando se establece conexión con el servidor de socket.
    * tambien introducimos al usuario en la sala que corresponde
   */
  socket.on("connected", (data) => {
    console.log(data.msg);
  });

  /*
   * Acciones que se realizarán cuando otro usuario envia mensaje
   */
  socket.on("toChat", (data) => {
    console.log(data);
    var chatBox = document.getElementById("chat");
    chatBox.innerHTML += data.content + "<br>";
  });

  /**
   * Acciones cuando se pulsa el botón de "Enviar"
   */
  document.getElementById("send").addEventListener("submit", (e) => {
    e.preventDefault();
    var msgInput = document.getElementById("msg");
    var chatBox = document.getElementById("chat");
    var msg = msgInput.value;

    //Mostramos el mensaje en la ventana para el usuario que lo envia
    chatBox.innerHTML += `Yo: ${msgInput.value}<br>`;

    // Definimos el mensaje que vamos a enviar
    var toSend = { user: session.user, content: msg, sala: sala, date: new Date()};
    

    //Enviamos el mensaje al servidor utilizando el evento "broadcast" definido por nosotros
    socket.emit("broadcast", toSend);

  });

  

  
});
