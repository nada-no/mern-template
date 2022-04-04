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
  socket.on("", (data) => {
    console.log(data);
  });

  /**
   * Acciones cuando se pulsa el botón de "Enviar"
   */
  document.getElementById("send").addEventListener("submit", (e) => {
    e.preventDefault();
    var msgInput = document.getElementById("msg");
    var chatBox = document.getElementById("chat");
    var msg = msgInput.value;

  });

  
});
