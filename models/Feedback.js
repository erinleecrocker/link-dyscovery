const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({
  rating: {
    type: Number,
  },
  userCreatedOn: {
    type: Date,
    default: Date.now
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

// FeedbackSchema.virtual("averageRating").get(function () {
//   const totalRating = this.rating.reduce((total, rating) => {
//     return total + rating;
//   });
// });



const Feedback = mongoose.model("Feedback", FeedbackSchema);

module.exports = Feedback;
