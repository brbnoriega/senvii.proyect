const { Router } = require("express");

const router = new Router();

const { postLogin, postRegister } = require("../controllers/auth");

router.post("/login", postLogin);
router.post("/register", postRegister);

module.exports = router;