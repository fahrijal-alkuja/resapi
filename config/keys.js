require("dotenv").config();

if (process.env.NODE_ENV === "production") {
  module.exports = {
    mongoURI: process.env.DATABASE_PRO,
    secret: "yoursecret"
  };
} else {
  module.exports = {
    mongoURI: process.env.DATABASE,
    secret: "yoursecret"
  };
}
