const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", (req, res) => {
    db.User.find({}).then((foundUsers) => {
        res.json(foundUsers);
      });
});

router.get("/:id", (req, res) => {
    db.User.findById({ _id: req.params.id}).then((foundUser) => {
        res.json(foundUser);
      });
});

router.post("/", (req, res) => {
    db.User.find(req.body).then((newUsers) => {
        res.json(newUsers);
      });
});

router.put("/:id", (req, res) => {
  console.log(req.body)
    db.User.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    }).then((updateUser) => {
      res.json(updateUser);
    });
  });
  
  router.delete("/:id", (req, res) => {
    db.User.findByIdAndDelete(req.params.id).then((deleteUser) => {
      res.json(deleteUser);
    });
  });

module.exports = router;
