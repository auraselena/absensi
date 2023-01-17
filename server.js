// console.log("testing server");
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const port = 3200;

const sequelize = require("./db.config");
sequelize.sync().then(() => console.log("Database is now ready"));

// INI HARUS DIPIKIRIN, bikin endpoint
const userEndpoint = require("./routes/users"); // folder routes itu udah kayak library yang kita bikin sendiri (manual)
const absensiEndpoint = require("./routes/absensi");
// pake express
// console.log("running server on port", port);

// untuk running express
const app = express();
app.use(cors()); //untuk menggunakan cors yang udah diinstall
app.use(express.json());
// express.json utk kebutuhan request n respons dari FE BE, nangkep data

// INI HARUS DIPIKIRIN
app.use("/users", userEndpoint);
app.use("/absensi", absensiEndpoint);

app.listen(port, () => console.log(`Running server on port ${port}`));
