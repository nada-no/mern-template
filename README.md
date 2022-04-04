# Server for Node + MySQL/phpMyAdmin + Dev Tools

This Docker includes all what you need to run a Laravel PHP application.

## Configuration 🔧

Define in  **.env** file your Docker configuration

The Server is ready to work without any further configuration, although you can change some basic configuratins in the **.env** file.

## Start 🚀

Download the project and execute

```
docker-compose up -d --build -V
```
After the installation you can get open your application on 
(https://localhost:3000)

## DB

A database and user for Laravel will be created. If you change the connection configuration you mas change the user/password in the database to allow the connection.

## Tutorial
Podeis ver el siguiente tutorial para ejecutar vuestra primer aplicación de Laravel con Docker


# node_chat

Completa el siguiente ejemplo creando un servicio de socket que comunique al cliente con el servidor siguiendo los siguientes pasos:

##Instalar Socket en mi servidor

1. Inicializar IO (socekt.io) en el servidor (app.js) utilizando el puerto que existe acutalmente para abrir visualizar la pagina web.
2. Crea en app.js una reacción para mostrar por consola un mensaje de bienvenida: **Cliente conectado** cada vez que un cliente abre la pagina principal de la aplicación. Esto se consigo con el **.on('connect')**

Para poder comprobar los pasos 1 y 2, necesitaras instalar Socket.io en el cliente:

3. Incluye en socket.pug el enlace a la libreria de Socket.io. Esta libreria se genera automaticamente sobre el punto de montaje Socket.io: 

```
/socket.io/socket.io.js
```

4. Incluye en socket.pug el enlace al archivo chat.js donde crearemos todas las funcionalidades

5. Inicializa IO en el cliente (chat.js). Comprueba la consola del servidor.

6. Haz que cada vez que se cargue chat.js se establezca una conexión con el servidor Socket.

**En este punto, al abrir la pagina desde el navegador, deberias de ver el mensaje "Cliente conectado" en el servidor**

7. Ahora haz que cada vez que se de en el boton submit en el cliente, se envie al servidor el mensaje escrito en la caja de texto a traves del channel **"default"** de socket. Esto se consigue con la sentencia **.emit()**

8. El servidor deberá estar escuchando cualquier mensaje enviado a traves del canal **default** y escribirá por consola el mensaje

**Perfecto, ya tienes los clientes conectados al servidor mediantes sockets!!**

Para hacer que un socket quede escuchando se utiliza el mismo comando que para la conexión **.on("default")**


##Responsiendo a los mensajes
El siguiente paso será que el servidor conteste a los mensajes

9. En app.io, al detectar un mensaje a traves de **default** el servidor emitirá un mensaje automaticamente al canal **toClient** con el texto: "I listen!". Esto lo haremos con la funcion **emit**

10. Ahora deberemos modificar nuestro cliente chat.js de manera que esté constantemente escuchando por **toClient** a la espera de nuevos mensajes. Al recibir uno lo escribirá en un **alert**

##Avisando a todos los clientes
Existe la posilibidad de que desde el servidor se emita un mensaje a TODOS los clientes. Esto se realiza gracias a la función **bradcast**

11. Haz que cuando nuevo cliente se conecte, el servidor haga un broadcast a todos los clientes que deberán de mostrar un alert diciendo: **Se ha conectado un nuevo cliente a la sesión**


## Ejemplo

Puedes mirar el siguiente enlace donde puedes descargar un proyecto realizado con Sockets

https://github.com/socketio/socket.io/tree/master/examples/chat