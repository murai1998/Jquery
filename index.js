const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());
const PORT = process.env.PORT || 3001;
require("dotenv").config();

let Survey = require("./model/name.js");
app.use(express.static("public"));

const path = __dirname + "/views/";

var customers = [];
const MONGODB_URI = process.env.MONGODB_URI;
console.log("Connecting DB to ", MONGODB_URI);

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(x =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch(err => console.error("Error connecting to mongo", err));
router.use(function(req, res, next) {
  console.log("/" + req.method);
  next();
});

app.get("/", function(req, res) {
  res.sendFile(path + "index.html");
});

app.post("/api/customers/save", function(req, res) {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const date = Date.parse(req.body.date);
  const review = req.body.review;
  mark = req.body.mark;
  const newSurvey = new Survey({
    firstname,
    lastname,
    date,
    review,
    mark
  });
  console.log("name", newSurvey);
  newSurvey
    .save()
    .then(() => res.json("Info added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

app.get("/api/reviews", function(req, res) {
  Survey.find()
    .then(survey => res.json(survey))
    .catch(err => res.status(400).json("Error" + err));
  //   return res.send(customers);
});

app.use("/", router);

app.listen(PORT, function() {
  console.log(`Example app listening on port ${PORT}`);
});
// https://apppppk.herokuapp.com/
