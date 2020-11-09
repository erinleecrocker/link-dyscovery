const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({
  rating: {
    type: Number,
  },
  userCreatedOn: {
    type: Date,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  resource: {
    type: Schema.Types.ObjectId,
    ref: "Resource",
  },
});

const Feedback = mongoose.model("Feedback", FeedbackSchema);

module.exports = Feedback;
