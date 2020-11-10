const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", (req, res) => {
  db.Resource.find({}).populate("users", "userName").then((foundResources) => {
    res.json(foundResources);
  }).catch
});

router.get("/:id", (req, res) => {
  db.Resource.findById({ _id: req.params.id }).then((foundResource) => {
    res.json(foundResource);
  });
});

router.post("/", (req, res) => {
  console.log(req.body);
  db.Resource.create(req.body).then((newResource) => {
    res.json(newResource);
  });
});

// router.put("/:id", (req, res) => {
//     db.Resource.update({_id: req.params.id}, req.body).then(updateResource => {
//         res.json(updateResource)
//     })
// });

router.put("/:id", (req, res) => {
  db.Resource.findByIdAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  }).then((updateResource) => {
    res.json(updateResource);
  });
});

router.delete("/:id", (req, res) => {
  db.Resource.findByIdAndDelete(req.params.id).then((deleteResource) => {
    res.json(deleteResource);
  });
});

module.exports = router;
