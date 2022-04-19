const socketPort = 2000;

const session = require("express-session");
const { Server } = require("socket.io");
const socketServer = require("http").createServer();
const mensaje = require("./controllers/message");

socketServer.listen(socketPort, (err, res) => {
  if (err) console.log(`ERROR: Connecting APP ${err}`);
  else console.log(`Server is running on port ${socketPort}`);
});

//activamos CORS
const io = new Server(socketServer, {
  cors: {
    origin: "http://localhost:3000", //Esta será la dirección de vuestra web
  },
});

//primera conexion
io.on("connection", (socket) => {
  socket.join(room);
  console.log("Nuevo cliente conectado a la sala ");
  socket.in(room).emit("connected", {
    msg: "Bienvenido al chat",
  });

  //Este socket tendrá un atributo user con valor Pedro,
  //desde la primera conexión hasta que se cierre el socket
  if (!socket.user) socket.user = "Pedro";

  //Todos los clientes que estén escuchando el evento "toChat" recibiran el mensaje enviado por el cliente que lanzó el mensaje
  socket.on(room, (data) => {
    socket.in(room).emit("toChat", data);
    mensaje.msgAdd(data);
  });
});
