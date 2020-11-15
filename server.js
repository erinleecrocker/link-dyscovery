require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3001;

// Bringing in Controllers:
const AuthController = require("./Controllers/authController")
const UserController = require("./Controllers/userController");
const ResourceController = require("./Controllers/resourceController")
const FeedbackController = require("./Controllers/feedbackController");
const {cloudinary} = require("./utils/cloudinary")
// const CloudController = require("./Controllers/cloudController")


// Define middleware here
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({ limit: '50mb' }));

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
  // app.use("/api/upload", CloudController);



app.get("/api/images", async (req, res) => {
  const {resources} = await cloudinary.search.expression("folder:link-dyscovery").sort_by("public_id", "desc").execute();
  // const publicIds =  resources.map(file => file.public_id);
  res.json(resources);
})

  app.post("/api/upload", async (req, res) => {
    try{
     const fileStr = req.body.data
     const id =req.body.userImageId
    //  console.log(req.body)
     const uploadedRes = await cloudinary.uploader.upload(fileStr, { folder: "link-dyscovery", public_id: id})
    //  console.log(uploadedRes)
     res.json({msg: "This Actually worked."})
    } catch (err) {
        console.log(err)
    }
 })


  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
