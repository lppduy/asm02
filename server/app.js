const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//mongoose
const mongoose = require("mongoose");

//connect mongoose
mongoose.connect('mongodb://127.0.0.1:27017/booking')
  .then(() => console.log('Connected mongodb succesfully!'))
  .then((result) => app.listen(5001, (req, res) => {
    console.log("Server is running on port 5001");
  }))
  .catch((error) => console.log(error));
