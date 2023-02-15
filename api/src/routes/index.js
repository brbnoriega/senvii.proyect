const { Router } = require("express");
const router = Router();

// import routes
const authRoutes = require("./auth");
//const answerRoutes = require("");
const clientRoutes = require("./client");
//const institutionRoutes = require("");
//const questionRoutes = require("");

// config router
router.get("/", (req, res) => res.status(200).json("Hello World"));
router.use("/auth", authRoutes);
//router.use("", answerRoutes);
router.use("/client", clientRoutes);
//router.use("", institutionRoutes)
//router.use("", questionRoutes)

module.exports = router;
