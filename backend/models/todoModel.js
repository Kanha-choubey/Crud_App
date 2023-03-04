const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please Add Title"],
    },
    description: {
      type: String,
      required: [true, "Please Add Title"],
    },
  },
  {
    timeStamps: true,
  }
);


module.exports = mongoose.model("Todo" , todoSchema)