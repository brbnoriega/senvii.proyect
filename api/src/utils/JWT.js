const { sign, verify } = require("jsonwebtoken");
require("dotenv").config();

const createToken = (user) => {
  const { id, userName } = user;
  const accessToken = sign({ userName, id }, process.env.JWT_SECRET);

  return accessToken;
};

const validateToken = (req, res, next) => {
  const accessToken = req.cookies["access-token"];

  if (!accessToken)
    return res.status(400).json({ error: "User not Authenticated!" });

  try {
    const validToken = verify(accessToken, process.env.JWT_SECRET);
    if (validToken) return next();
  } catch (error) {
    return res.status(400).json({ error });
  }
};

module.exports = { createToken, validateToken };
