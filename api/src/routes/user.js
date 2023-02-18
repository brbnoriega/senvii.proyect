const { Router } = require("express");

const router = new Router();

const { getUser } = require("../controllers/user");
const { confirmAccount } = require("../controllers/auth");

router.get("/", getUser);
router.get("/confirm/:token", confirmAccount);

module.exports = router;
