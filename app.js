const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();
require('dotenv').config()
// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books

//route
app.get('/', (req, res) => {
  res.send('WORKING')
})

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
