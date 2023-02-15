const { Router } = require("express");

const router = new Router();

const { getClient } = require("../controllers/client");

router.get("/", getClient);

module.exports = router;
