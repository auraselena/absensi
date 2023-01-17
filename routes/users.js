// file ini dbuat agar kita punya endpoint
const express = require("express");
const router = express.Router(); //ini untuk mengambil library yang sudah ada di express.js
const UsersModel = require("../models/users");
const bcrypt = require("bcrypt");
const passwordCheck = require("../utils/passwordCheck");

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
  // dari FE: ada nis, nama, password ->>>>>>>>> dikirm ke BE
  const { nis, nama, password } = req.body;
  // nama yang digunakan saat destructuring itu perlu janjian antara FE BE, lewat docs

  const encryptedPassword = await bcrypt.hash(password, 10);

  const users = await UsersModel.create({
    nis,
    nama,
    password: encryptedPassword,
  });
  // console.log(users);

  res.status(200).json({
    data: users, // users adalah nama tabel di mysql(?)
    metadata: "test user endpoint",
  });
});

router.put("/", async (req, res) => {
  // dari FE: ada nis, nama, password ->>>>>>>>> dikirm ke BE
  const { nis, nama, password, passwordBaru } = req.body;
  // nama yang digunakan saat destructuring itu perlu janjian antara FE BE, lewat docs

  // cek apakah nis ada di database apa enggak
  const check = await passwordCheck(nis, password);
  const encryptedPassword = await bcrypt.hash(passwordBaru, 10);

  // data passwordBaru akan berubah kalo password lama sesuai dari inputan
  if (check.compare === true) {
    const users = await UsersModel.update(
      {
        nama,
        password: encryptedPassword,
      },
      { where: { nis: nis } } // where digunakan untuk mencari identitas data spesifik yang ingin diubah
    );

    res.status(200).json({
      users: { updated: users[0] },
      metadata: "New user updated! ✅",
    });
  } else {
    res.status(400).json({
      error: "data invalid",
    });
  }
  // console.log(users);

  // res.status(200).json({
  //   data: users, // users adalah nama tabel di mysql(?)
  //   metadata: "test user endpoint",
  // });
});

router.post("/login", async (req, res) => {
  const { nis, password } = req.body;
  const check = await passwordCheck(nis, password);
  if (check.compare === true) {
    res.status(200).json({
      users: check.userData,
      metadata: "Login succeed",
    });
  } else {
    res.status(400).json({
      error: "data invalid",
    });
  }
});

// export folder yang kita punya
module.exports = router;
