const express = require("express");
const router = express.Router(); //ini untuk mengambil library yang sudah ada di express.js
const AbsensiModel = require("../models/absensi");

// routing endpoint absensi utama di /
router.get("/", async (req, res) => {
  const absensi = await AbsensiModel.findAll();
  // console.log(absensi);

  res.status(200).json({
    data: absensi,
    metadata: "test absensi endpoint",
  });
});

router.post("/checkin", async (req, res) => {
  const { nis } = req.body;
  const absensi = await AbsensiModel.create({
    users_nis: nis,
    status: "in",
  });
  // console.log(absensi);

  res.status(200).json({
    data: absensi,
    metadata: "Check in succeed! ✅",
  });
});

router.post("/checkout", async (req, res) => {
  const { nis } = req.body;
  const absensi = await AbsensiModel.create({
    users_nis: nis,
    status: "out",
  });
  // console.log(absensi);

  res.status(200).json({
    data: absensi,
    metadata: "Check out succeed! ✅",
  });
});

module.exports = router;
