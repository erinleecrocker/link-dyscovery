const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResourceSchema = new Schema({
  category: {
    type: String,
    // trim: true,
  },
  title: {
    type: String,
    // trim: true,
  },
  url: {
    type: String,
    // trim: true,
  },
  description: {
    type: String,
    // trim: true,
  },
  userCreatedOn: {
    type: Date,
    default: Date.now
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  // feedback: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Feedback",
  // },
  
  
});

const Resource = mongoose.model("Resource", ResourceSchema);

module.exports = Resource;
