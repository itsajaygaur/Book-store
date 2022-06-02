const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();
const port = process.env.PORT
// require('dotenv').config()
const url = "mongodb+srv://666:1234@cluster0.xgs1j.mongodb.net/bookstore?retryWrites=true&w=majority"
// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books

//route
// app.get('/', (req, res) => {
//   res.send('WORKING')
// })

mongoose
  .connect(url)
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(port);
  })
  .catch((err) => console.log(err));
