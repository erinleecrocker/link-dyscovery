const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/link-dyscovery"
);

const userSeed = [
  {
    emailAddress: "sample@gamil.com",
    password: "password1234",
    firstName: "Sam",
    lastName: "Ple",
    age: 40,
    gender: "Male",
    location: "Atlanta, GA",
    bio: "I am a sample person.",
    learningDisabilities: "None",
  },
  {
    emailAddress: "anotherperson@gamil.com",
    password: "secretpassword",
    firstName: "Another",
    lastName: "Person",
    age: 18,
    gender: "Female",
    location: "Atlanta, GA",
    bio: "I am another sample person.",
    learningDisabilities: "None",
  },
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
