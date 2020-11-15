const express = require("express");
const router = express.Router();
const db = require("../models");



router.get("/", (req, res) => {
    db.Feedback.find({}).then((foundFeedbacks) => {
        res.json(foundFeedbacks);
      });
});

router.get("/:id", (req, res) => {
    db.Feedback.findById({ _id: req.params.id}).then((foundFeedback) => {
        res.json(foundFeedback);
      });
});

router.post("/", (req, res) => {
    db.Feedback.create(req.body).then((newFeedback) => {
      console.log(newFeedback)
        res.json(newFeedback);
      });
});

router.put("/:id", (req, res) => {
    db.Feedback.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    }).then((updateFeedback) => {
      res.json(updateFeedback);
    });
  });
  
  router.delete("/:id", (req, res) => {
    db.Feedback.findByIdAndDelete(req.params.id).then((deleteFeedback) => {
      res.json(deleteFeedback);
    });
  });
module.exports = router;
