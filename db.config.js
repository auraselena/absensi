const { Sequelize } = require("sequelize");

// nama database, nama tabel default, password
const sequelize = new Sequelize("absensi", "root", "ajeng101", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
