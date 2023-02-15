const { Client, Institution } = require("../db");
const bcrypt = require("bcrypt");

const postLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ error: "Not Enough Data" });

  const existingClient = await Client.findOne({ where: { email } });

  if (!existingClient)
    return res.status(400).json({ error: "User Doesn't Exist" });

  const dbPassword = existingClient.dataValues.password;
  const match = await bcrypt.compare(password, dbPassword).then((res) => res);

  if (!match)
    return res
      .status(400)
      .json({ error: "Wrong Username and Password Combination" });

  res.json("LOGGED IN");
};

const postRegister = async (req, res) => {
  const {
    userName,
    password,
    role,
    email,
    institutionName,
    phoneNumber,
    address,
    businessActivity,
    entity,
  } = req.body;

  if (
    !userName ||
    !password ||
    !role ||
    !institutionName ||
    !phoneNumber ||
    !address ||
    !businessActivity ||
    !entity
  )
    return res.status(400).json({ error: "Not Enough Data" });

  const existingClient = await Client.findOne({ where: { email } });
  if (existingClient)
    return res.status(400).json({ error: "User Already Exist" });

  bcrypt
    .hash(password, 10)
    .then(async (hash) => {
      const [institution, created] = await Institution.findOrCreate({
        where: { institutionName },
        defaults: { phoneNumber, address, businessActivity, entity },
      });

      const client = Client.create({
        userName,
        password: hash,
        role,
        email,
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

module.exports = {
  postLogin,
  postRegister,
};
