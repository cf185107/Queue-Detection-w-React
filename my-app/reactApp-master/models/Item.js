const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  queue_size: {
    type: String,
  },
  number_inside: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Item = mongoose.model("item", ItemSchema);
