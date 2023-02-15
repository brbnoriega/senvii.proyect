const { Client } = require("../db");

const { findClient } = require("../utils/client");

const getClient = async (req, res) => {

  const result = await findClient("Sojo506")

  if (result) return res.status(200).json(result)
  return res.status(404).json("not found")
};

module.exports = { getClient };
