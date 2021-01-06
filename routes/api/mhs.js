const express = require("express");
const router = express.Router();
const multer = require("multer");
const passport = require("passport");
const checkAuth = passport.authenticate("jwt", {
  session: false
});
const MhsController = require("../../controllers/mhs");
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
router.post("/add", checkAuth, upload.single("foto"), MhsController.mhs_add);

//!fungsi GET
router.get("/dataMhs", checkAuth, MhsController.mhs_get_all);

//!delete function
router.delete("/delete/:_id", checkAuth, MhsController.mhs_del);

//!update function
router.put("/update/:_id", checkAuth, MhsController.mhs_update);

module.exports = router;
