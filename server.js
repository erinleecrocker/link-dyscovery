require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
// const path = require("path");

const app = express();

const PORT = process.env.PORT || 3001;

// Bringing in Controllers:
const AuthController = require("./controllers/authController")
const UserController = require("./controllers/userController");
const ResourceController = require("./controllers/resourceController")
const FeedbackController = require("./controllers/feedbackController");


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/link-dyscovery", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose successfully connected.");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error: ", err);
});


// Define API routes here
app.get("/api/config", (req, res) => {
    res.json({
      success: true,
    });
  });

app.use(AuthController)
  app.use("/api/user", UserController);
  app.use("/api/resource", ResourceController);
  app.use("/api/feedback", FeedbackController);


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
