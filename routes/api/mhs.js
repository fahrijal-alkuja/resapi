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

//!fungsi GET
router.get("/dataMhs", function (req, res) {
  // Mhs.find(function (err, mhs) {
  //   if (err) return next(err);
  //   res.json(mhs);
  // });
  Mhs.find().then(mhs => {
    return res.status(200).json({
      success: true,
      msg: "Data all mhs.",
      data: res.json(mhs)
    });
  });
});

//!delete function
router.delete("/delete/:_id", (req, res) => {
  Mhs.findByIdAndRemove({ _id: req.params._id }).then(mhs => {
    return res.status(200).json({
      success: true,
      msg: "Data Berhasil Dihapus."
    });
  });
});

//!update function
router.put("/update/:_id", function (req, res, next) {
  Mhs.findByIdAndUpdate(req.params._id, req.body, function (err) {
    if (err) return next(err);
    res.status(200).json({
      success: true,
      msg: "Data Berhasil Diupdate."
    });
  });
});

module.exports = router;
