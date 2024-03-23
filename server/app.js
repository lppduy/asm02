const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


mongoose.connect(process.env.DB_URL)
  .then(() => console.log('Connected mongodb succesfully!'))
  .then((result) => app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  }))
  .catch((error) => console.log(error));
