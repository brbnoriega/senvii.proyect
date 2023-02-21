const { User, Institution } = require("../db");
const bcrypt = require("bcrypt");
const { sign, verify } = require("jsonwebtoken");

const {
  createToken,
  createEmailToken,
  verifyEmailToken,
} = require("../utils/JWT");
const { sendEmail } = require("../utils/mail.config");
const { login, register, confirm } = require("../utils/auth");

// LOGIN
const postLogin = login;

// REGISTER
const postRegister = register;

// CONFIRM ACCOUNT
const confirmAccount = confirm;

const getProfile = (req, res) => {
  const user = verify(req.cookies["access-token"], process.env.JWT_SECRET);
  const { userName, id } = user;
  
  res.json({ userName, id });
};

module.exports = {
  postLogin,
  postRegister,
  getProfile,
  confirmAccount,
};
