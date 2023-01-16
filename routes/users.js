// file ini dbuat agar kita punya endpoint
const express = require("express");
const router = express.Router(); //ini untuk mengambil library yang sudah ada di express.js
const UsersModel = require("../models/users");

// routing endpoint users utama di /
router.get("/", async (req, res) => {
  const users = await UsersModel.findAll();
  // console.log(users);

  res.status(200).json({
    data: users,
    metadata: "test user endpoint",
  });
});

router.post("/", async (req, res) => {
  // dari FE: ada nip, nama, password ->>>>>>>>> dikirm ke BE
  const { nis, nama, password } = req.body;
  // nama yang digunakan saat destructuring itu perlu janjian antara FE BE, lewat docs

  const users = await UsersModel.create({
    nis,
    nama,
    password,
  });
  // console.log(users);

  res.status(200).json({
    data: users, // users adalah nama tabel di mysql(?)
    metadata: "test user endpoint",
  });
});

// export folder yang kita punya
module.exports = router;
