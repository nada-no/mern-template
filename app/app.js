require("./io");
require("dotenv").config();

const port = process.env.SERVER_PORT || 3000;
var express = require("express"),
  app = express(),
  server = require("http").createServer(app),
  path = require("path");
  mongoose = require('mongoose');



server.listen(port, (err, res) => {
  if (err) console.log(`ERROR: Connecting APP ${err}`);
  else console.log(`Server is running on port ${port}`);
});

//creamos la base de datos
mongoose.connect(
  `mongodb://root:pass12345@mongodb-chat:27017/users?authSource=admin`,
  { useNewUrlParser: true },
  (err, res) => {
    if (err) console.log(`ERROR: connecting to Database.  ${err}`);
    else console.log(`Database Online: ${process.env.MONGO_DB}`);
  }
);

// Import routes of our app

var socketsRouter = require("./routes/sockets");
var handlerError = require("./routes/handler");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Define routes using URL path
app.use("/", socketsRouter);
app.use(handlerError);

/*Socket functions */

module.exports = app;