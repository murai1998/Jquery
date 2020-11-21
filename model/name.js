const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const surveySchema = new Schema(
  {
    firstname: {
      type: String
    },
    lastname: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

const Survey = mongoose.model("Survey", surveySchema);

module.exports = Survey;
