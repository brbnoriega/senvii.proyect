const { Router } = require("express");
const { validateToken } = require("../utils/JWT");

const router = new Router();

const { postLogin, postRegister, getProfile } = require("../controllers/auth");

router.route("/login").get(validateToken, getProfile).post(postLogin);
router.post("/register", postRegister);

module.exports = router;
