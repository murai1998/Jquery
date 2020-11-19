const express = require("express");

var cors = require("cors");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());
const PORT = 3001;
app.use(express.static("public"));

const path = __dirname + "/views/";

var customers = [];

router.use(function(req, res, next) {
  console.log("/" + req.method);
  next();
});

app.get("/", function(req, res) {
  res.sendFile(path + "index.html");
});

app.post("/api/customers/save", function(req, res) {
  console.log("Post a Customer: " + JSON.stringify(req.body));
  var customer = {};
  customer.firstname = req.body.firstname;
  customer.lastname = req.body.lastname;

  customers.push(customer);

  return res.send(customer);
});

app.get("/api/customers/all", function(req, res) {
  console.log("Get All Customers");
  return res.send(customers);
});

app.use("/", router);

app.listen(3001, function() {
  console.log(`Example app listening on port ${PORT}`);
});
