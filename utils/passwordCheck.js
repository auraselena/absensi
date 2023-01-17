const bcrypt = require("bcrypt");
const UsersModel = require("../models/users");

const passwordCheck = async (nis, password) => {
  const userData = await UsersModel.findOne({ where: { nis: nis } });
  const compare = await bcrypt.compare(password, userData.password);
  return { compare, userData };
};

module.exports = passwordCheck;
