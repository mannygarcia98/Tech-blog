const router = require("express").Router();
const sequelize = require("../config/connection");

//will need to change this route to /login
router.get("/", (req, res) => {
  res.render("login");
});

module.exports = router;
