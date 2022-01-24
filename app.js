const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static(path.join(__dirname, "public")));

const studentRoutes = require("./routers/web");

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/students", studentRoutes);
app.use((req, res, next) => {
  res.render("404PageNotFound");
});

mongoose
  .connect(DatabaseURl)
  .then((result) => {
    console.log("Connected to database");
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
