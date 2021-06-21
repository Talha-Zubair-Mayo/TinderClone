require("dotenv").config();
const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
name: {
    type: String,
    require: true,
    trim: true,
  },
  imagee: {
    type: String,
    require: true,
    trim: true,
  },
});

/* Create Collection */

const TinderData = new mongoose.model("TinderData", UserSchema);

module.exports = TinderData;
