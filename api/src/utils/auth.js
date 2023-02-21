const { User, Institution } = require("../db");

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ error: "Not Enough Data" });

  const existingUser = await User.findOne({ where: { email } });

  if (!existingUser)
    return res.status(400).json({ error: "Usuario no existente" });

  if (!existingUser.verified)
    return res.status(400).json({ error: "Usuario no verificado" });

  const dbPassword = existingUser.dataValues.password;
  // verify hashed password
  const match = await bcrypt.compare(password, dbPassword).then((res) => res);

  if (!match)
    return res
      .status(400)
      .json({ error: "Algún dato proporcionado es incorrecto" });

  const accessToken = createToken(existingUser);

  res.cookie("access-token", accessToken, {
    httpOnly: true,
    secure: false,
    maxAge: 60 * 60 * 24 * 30 * 1000,
  });

  res.json("LOGGED IN");
};

const register = async (req, res) => {
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
  const existingIdentification = await User.findOne({
    where: { identificationNumber },
  });

  if (existingUser || existingIdentification)
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
      const user = await User.create({
        userName,
        identificationNumber,
        password: hash,
        email,
        role,
        image,
        institutionId: institution.id,
      });

      // Create email token
      const emailToken = createEmailToken(email, user.dataValues.id);

      // Send email
      const testEmail = await sendEmail(email, emailToken);
    })
    .then(() => {
      res.json({ success: true });
    })
    .catch((err) => {
      return res.status(400).json({ err: "Something happened" });
    });
};

const confirm = async (req, res) => {
  try {
    // get token
    const { token } = req.params;

    // verify data
    const data = await verifyEmailToken(token);

    if (data === null)
      return res.json({ success: false, msg: "Error al obtener data" });

    const { email, code } = data;
    // verify user
    const user = await User.findOne({ where: { email } });

    if (!user) return res.json({ success: false, msg: "User doesn't exist" });

    // verify code
    if (code !== user.id)
      return res.json({ success: false, msg: "Code ins't equal" });

    // update user
    User.update({ verified: true }, { where: { email } });

    // redirect
    return res.json("VERIFIED");
  } catch (error) {
    return res.status(400).json({ err: "Something happened" });
  }
};

module.exports = { login, register, confirm };
