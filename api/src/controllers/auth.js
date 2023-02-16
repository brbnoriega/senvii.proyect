const { User, Institution } = require("../db");
const bcrypt = require("bcrypt");
const { createToken, validateToken } = require("../utils/JWT");

const postLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ error: "Not Enough Data" });

  const existingUser = await User.findOne({ where: { email } });

  if (!existingUser)
    return res.status(400).json({ error: "User Doesn't Exist" });

  const dbPassword = existingUser.dataValues.password;
  // verify hashed password
  const match = await bcrypt.compare(password, dbPassword).then((res) => res);

  if (!match)
    return res
      .status(400)
      .json({ error: "Wrong Username or Password Combination" });

  const accessToken = createToken(existingUser);

  res.cookie("access-token", accessToken, {
    httpOnly: true,
    secure: false,
    maxAge: 60 * 60 * 24 * 30 * 1000,
  });

  res.json("LOGGED IN");
};

const postRegister = async (req, res) => {
  const {
    userName,
    identificationNumber,
    email,
    password,
    role,
    image,
    institutionName,
    phoneNumber,
    address,
    businessActivity,
    entity,
  } = req.body;

  if (
    !userName ||
    !password ||
    !identificationNumber ||
    !role ||
    !institutionName ||
    !phoneNumber ||
    !address ||
    !businessActivity ||
    !entity
  )
    return res.status(400).json({ error: "Not Enough Data" });

  const existingUser = await User.findOne({ where: { email } });
  if (existingUser)
    return res.status(400).json({ error: "User Already Exist" });

  // Hash password
  bcrypt
    .hash(password, 10)
    .then(async (hash) => {
      // find or create an institution
      const [institution, created] = await Institution.findOrCreate({
        where: { institutionName },
        defaults: { phoneNumber, address, businessActivity, entity },
      });

      // Create user
      const user = User.create({
        userName,
        identificationNumber,
        password: hash,
        email,
        role,
        image,
        institutionId: institution.id,
      });
    })
    .then(() => {
      res.json("Client Registered");
    })
    .catch((err) => {
      if (err) res.status(400).json(err);
    });
};

const getProfile = (req, res) => {
  res.json("You are in!");
};

module.exports = {
  postLogin,
  postRegister,
  getProfile,
};
