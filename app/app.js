require("dotenv").config();

const port = process.env.SERVER_PORT || 3000;
var express = require("express"),
  app = express(),
  server = require("http").createServer(app),
  path = require("path");
mongoose = require('mongoose');
var session = require("express-session");
app.use(session({ secret: 'keyboard cat', auth: false , resave: true, saveUninitialized: true}));

app.use(function(req,res,next){
  res.locals.session = req.session;
  next();
});




server.listen(port, (err, res) => {
  if (err) console.log(`ERROR: Connecting APP ${err}`);
  else console.log(`Server is running on port ${port}`);
});

//creamos la base de datos
mongoose.connect(
  `mongodb://root:pass12345@mongodb-mern:27017/users?authSource=admin`,
  { useNewUrlParser: true },
  (err, res) => {
    if (err) console.log(`ERROR: connecting to Database.  ${err}`);
    else console.log("Successfully connect to MongoDB.");
  }
);

// Import routes of our app

var socketsRouter = require("./routes/router");
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

module.exports = app;
