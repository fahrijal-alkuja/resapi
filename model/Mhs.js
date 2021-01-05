const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const MhsSchema = new Schema({
  nim: {
    type: String,
    required: true
  },
  nama: {
    type: String,
    required: true
  },
  foto: {
    type: String,
    required: true
  }
});
module.exports = Mhs = mongoose.model("mhs", MhsSchema);
