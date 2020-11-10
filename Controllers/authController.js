
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const db = require("../models");


// Sign Up
router.post("/api/signup", (req, res) => {
  const { emailAddress, password } = req.body;

  if (!emailAddress.trim() || !password.trim()) {
    res.status(400);
  } else {
    bcrypt
    .hash(password, 10)
    .then((hashedPassword) => {
      console.log(hashedPassword);
    db.User.create({
      emailAddress: emailAddress,
      password: hashedPassword,
    })
      .then((newUser) => {
        console.log(newUser);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: true,
          data: null,
          message: "Unable to sign up.",
        });
      });
    })
    .catch((err) => {
      res.status(500);
    });
  }
});

// Login

module.exports = router;
