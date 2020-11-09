const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", (req, res) => {
  db.Resource.find({}).then((foundResources) => {
    res.json(foundResources);
  });
});

router.get("/:id", (req, res) => {
    db.Resource.find({_id: req.params.id}).then((foundResource) => {
        res.json(foundResource);
    });
});

router.post("/", (req, res) => {
    console.log(req.body);
    db.Resource.create(req.body).then((newResource) => {
        res.json(newResource);
    });
});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

module.exports = router;
