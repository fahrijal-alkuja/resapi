const Mhs = require("../model/Mhs");

exports.mhs_get_all = (req, res, next) => {
  Mhs.find()
    .select("nim nama foto _id")
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        data: docs
      };
      res.status(200).json(response);
    });
};

exports.mhs_add = (req, res, next) => {
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
};

exports.mhs_del = (req, res) => {
  Mhs.findByIdAndRemove({ _id: req.params._id }).then(mhs => {
    return res.status(200).json({
      success: true,
      msg: "Data Berhasil Dihapus."
    });
  });
};

exports.mhs_update = (req, res, next) => {
  Mhs.findByIdAndUpdate(req.params._id, req.body, function (err) {
    if (err) return next(err);
    res.status(200).json({
      success: true,
      msg: "Data Berhasil Diupdate."
    });
  });
};
