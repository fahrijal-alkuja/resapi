const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create the User Schema
const UserSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  modified: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  }
});

module.exports = User = mongoose.model("users", UserSchema);
