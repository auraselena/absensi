// file ini dbuat agar kita punya endpoint
const express = require("express");
const router = express.Router(); //ini untuk mengambil library yang sudah ada di express.js
const UsersModel = require("../models/users");

// routing endpoint users utama di /
router.get("/", async (req, res) => {
  const users = await UsersModel.findAll();
  console.log(users);

  res.status(200).json({
    data: "deacourse backend 2",
    metadata: "test user endpoint",
  });
});

// export folder yang kita punya
module.exports = router;
