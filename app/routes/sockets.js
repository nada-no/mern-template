var express = require("express"),
  router = express.Router();

const message = require('../controllers/message');
const user = require('../controllers/user');

//index
// router.route("/").get(function (req, res, next) {
//   auth = true;
//   next();
// });
router.route("/").get(function (req, res, next) {
  res.render("index", { auth: true });
});

//register
router.route("/register").get(async (req, res, next) => {
  res.render("register");
});

//add user
router.post('/create', user.add);
router.post('/create', function (req, res, next) {
  res.render("index", { auth: true });
});

//login
router.post('/login', user.login);
router.post('/login', function (req, res, next) {
  res.render("socket");
});

//logOut
router.get('/logout', user.logout);

//chat list
router.get('/chat/list', function (req, res, next) {
  res.render("salas");
});

//history list
router.get('/history/list', function (req, res, next) {
  res.render("historyList");
});

//history
router.get('/history/view/:sala', message.getHistoryRoom);
// router.get('/history/view/:sala', async (req, res, next) => {
//   var messages = await message.getHistoryRoom(req.params.sala)
//   console.log(messages)//aquí es imposible traer los mensajes ni los usuarios ni nada
//   res.render("history", { history: messages, sala: req.params.sala });
// });

//delete history
router.get('/history/delete/:sala', message.deleteHistory);

//chat 
router.get('/chat/view/:sala', function (req, res, next) {
  req.session.sala = req.params.sala;
  res.render("socket", { sala: req.params.sala });
});


module.exports = router;
