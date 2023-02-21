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

const createEmailToken = (email, code) => {
  const token = sign(
    {
      email,
      code,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  return token;
};

const verifyEmailToken = (token) => {
  const data = verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return null;
    return decoded;
  });

  return data;
};

module.exports = {
  createToken,
  createEmailToken,
  validateToken,
  verifyEmailToken,
};
