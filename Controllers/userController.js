const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", (req, res) => {
  db.User.find({}).then((foundUsers) => {
    res.json(foundUsers);
  }).catch((err) => {
    console.log(err);
  });
});

router.get("/:id", (req, res) => {
  console.log(req.params)
  db.User.findById({ _id: req.params.id }).then((foundUser) => {
    res.json(foundUser);
  }).catch((err) => {
    console.log(err);
  });
});

router.post("/", (req, res) => {
  db.User.create(req.body).then((newUsers) => {
    res.json(newUsers);
  }).catch((err) => {
    console.log(err);
  });
});

router.put("/:id", (req, res) => {
  console.log(req.body);
  db.User.findByIdAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  }).then((updateUser) => {
    res.json(updateUser);
  }).catch((err) => {
    console.log(err);
  });
});

router.delete("/:id", (req, res) => {
  db.User.findByIdAndDelete(req.params.id)
    .then((deletedUser) => {
      res.json(deletedUser);
      console.log("User was deleted" + deletedUser);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
