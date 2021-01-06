const express = require("express");
const router = express.Router();
const mhs = require("../../model/Mhs");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
const fileFilter = (req, file, cb) => {
  // reject a file
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "application/pdf"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});
//!fungsi post
router.post("/add", upload.single("foto"), (req, res, next) => {
  let { nim, nama } = req.body;
  let foto = req.file.path;
  let newMhs = new Mhs({
    nim,
    nama,
    foto
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
  Mhs.find(function (err, mhs) {
    if (err) return next(err);
    res.json(mhs);
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
