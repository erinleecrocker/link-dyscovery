const express = require("express");
const router = express.Router();
const db = require("../models");
const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  // if (!req.headers.authorization) {
  //   return res.status(401).json({
  //     error: true,
  //     data: null,
  //     message: "Not Authorized",
  //   });
  // }
  // jwt.verify(req.headers.authorization, process.env.SECRET, (err, decoded) => {
  //   if (err) {
  //     return res.status(401).json({
  //       error: true,
  //       data: null,
  //       message: "Invalid token.",
  //     });
  //   } else {
  //     console.log(decoded);

      db.Resource.find({})
        .populate("users", "userName")
        .then((foundResources) => {
          res.json(foundResources);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({
            error: true,
            data: null,
            message: "Failed to retrieve all resources.",
          });
        });
    // }
  });
// });

router.get("/:id", (req, res) => {
  db.Resource.findById({ _id: req.params.id }).then((foundResource) => {
    res.json(foundResource);
  });
});

router.post("/", (req, res) => {
  // console.log(req.body);
  // if (!req.headers.authorization) {
  //   return res.status(401).json({
  //     error: true,
  //     data: null,
  //     message: "Not Authorized",
  //   });
  // }
  // jwt.verify(req.headers.authorization, process.env.SECRET, (err, decoded) => {
  //   if (err) {
  //     return res.status(401).json({
  //       error: true,
  //       data: null,
  //       message: "Invalid token.",
  //     });
  //   } else {
  //     console.log(decoded);
      const newResource = {
        category: req.body.category,
        title: req.body.title,
        url: req.body.url,
       description: req.body.description,
        // createdBy: decoded._id
      }

      db.Resource.create(newResource)
        .then((newResource) => {
          res.json(newResource);
        })
        // .catch((err) => {
        //   console.log(err);
        //   res.status(500).json({
        //     error: true,
        //     data: null,
        //     message: "Failed to create a resource.",
        //   });
        // });
    
  });


// router.put("/:id", (req, res) => {
//     db.Resource.update({_id: req.params.id}, req.body).then(updateResource => {
//         res.json(updateResource)
//     })
// });

router.put("/:id", (req, res) => {

  const updatedResource = {
    category: req.body.category,
    title: req.body.title,
    url: req.body.url,
   description: req.body.description,
    createdBy: decoded._id
  }
  db.Resource.findOneAndUpdate({ _id: req.params.id }, updatedResource, {
    new: true,
  }).then((updateResource) => {
    if (!updateResource) {
      res.status(404).json({
        error: true,
        data: null,
        message: "Unable to find that resource.",
      });
    } else {
      res.json({
        error: false,
        data: updateResource,
        message: "Successfully updated resource.",
      });
    }
  })
  .catch((err) => {
    res.status(500).json({
      error: true,
      data: null,
      message: "An error occurred updating your resource.",
    });
  });
  });


router.delete("/:id", (req, res) => {
  db.Resource.findByIdAndDelete(req.params.id).then((deleteResource) => {
    res.json(deleteResource);
  });
});

module.exports = router;
