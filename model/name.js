const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const surveySchema = new Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    date: { type: Date, required: true },
    review: { type: String, required: true },
    mark: { type: Number, required: true }
  },
  {
    timestamps: true
  }
);

const Survey = mongoose.model("Survey", surveySchema);

module.exports = Survey;
