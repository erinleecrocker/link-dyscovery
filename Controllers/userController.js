const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", (req, res) => {
    db.User.find({}).then((foundUsers) => {
        res.json(foundUsers);
      });
});

router.get("/:id", (req, res) => {
    db.User.find({ _id: req.params.id}).then((foundUser) => {
        res.json(foundUser);
      });
});

router.post("/", (req, res) => {
    db.User.find(req.body).then((newUsers) => {
        res.json(newUsers);
      });
});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

module.exports = router;
