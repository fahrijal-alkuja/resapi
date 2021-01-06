const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const passport = require("passport");

// Initialize the app
const app = express();

// Middlewares
// Form Data Middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// Json Body Middleware
app.use(bodyParser.json());

// Cors Middleware
app.use(cors());

// Seting up the static directory
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// Use the passport Middleware
app.use(passport.initialize());
// Bring in the Passport Strategy
require("./config/passport")(passport);

// Bring in the Database Config and connect with the database
const db = require("./config/keys").mongoURI;
mongoose
  .connect(db, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log(`Database connected successfully ${db}`);
  })
  .catch(err => {
    console.log(`Unable to connect with the database ${err}`);
  });

// app.get("/", (req, res) => {
//   return res.send("<h1>Hello World rizal</h1>");
// });

// Bring in the Users route
const users = require("./routes/api/users");
app.use("/api/users", users);
const mhs = require("./routes/api/mhs");
app.use("/api/mhs", mhs);

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "public/index.html"));
// });
module.exports = app;
