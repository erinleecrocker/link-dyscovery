const express = require("express");
const router = express.Router();
const db = require("../models");


router.post("/", (req, res) => {
   try{
    const fileStr = req.body.data
    console.log(fileStr)
   } catch (err) {
       console.log(err)
   }
})

module.exports = router;