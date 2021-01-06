const express = require("express");
const router = express.Router();
const passport = require("passport");
const UserController = require("../../controllers/users");

/**
 * @route POST api/users/register
 * @desc Register the User
 * @access Public
 */
router.post("/register", UserController.user_register);
/**
 * @route POST api/users/login
 * @desc Signing in the User
 * @access Public
 */
router.post("/login", UserController.user_login);
/**
 * @route POST api/users/profile
 * @desc Return the User's Data
 * @access Private
 */
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  UserController.user_get
);
module.exports = router;
