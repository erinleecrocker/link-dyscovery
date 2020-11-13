const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    emailAddress: {
      type: String,
      trim: true,
      unique: true,
      match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    },
    password: {
      type: String,
      trim: true,
      required: "Password is required",
      validate: [({ length }) => length >= 8, "Password must be 8 characters or longer."]
    },
    firstName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    userName: {
      type: String,
      trim: true,
    },
    age: {
      type: Number,
      trim: true,
    },
    gender: {
      type: String,
      trim: true,
    },
    location: {
      type: String,
      trim: true,
    },
    bio: {
      type: String,
      trim: true,
    },
    learningDisabilities: {
      type: String,
      trim: true,
    },
  },
  { toJSON: { virtuals: true } }
);

UserSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
