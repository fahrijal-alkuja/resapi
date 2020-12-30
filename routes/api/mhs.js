const express = require("express");
const router = express.Router();
const Mhs = require("../../model/Mhs");

router.post("/add", (req, res) => {
  let { nim, nama } = req.body;
  let newMhs = new Mhs({
    nim,
    nama
  });
  newMhs.save().then(mhs => {
    return res.status(200).json({
      success: true,
      msg: "Data Berhasil Ditambah."
    });
  });
});
module.exports = router;
