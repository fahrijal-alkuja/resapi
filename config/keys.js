if (process.env.NODE_ENV === "production") {
  module.exports = {
    mongoURI: "mongodb://45.130.229.108:2717/dbayok",
    secret: "yoursecret"
  };
} else {
  module.exports = {
    mongoURI: "mongodb://localhost:27017/dbayok",
    secret: "yoursecret"
  };
}
