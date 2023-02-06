// going to register the express app
const express = require("express");

// import mongoose
const mongoose = require("mongoose");

// import the router
const workoutRoutes = require("./routes/workouts");

// the doteEnv import
require("dotenv").config();

// starting the express app
const app = express();

// a middleware to use POST and PATCH
app.use(express.json());

// creating a global middleware:
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// use the routes :
app.use("/api/workouts", workoutRoutes);

// react to requests and test the API=> set up a route handler
// app.get("/", (req, res) => {
//   res.json({ mssg: "Welcome to the app" });
// });

// connecte to the database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
