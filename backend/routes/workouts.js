const express = require("express");

// import the controllers
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

// we craeate our routes by using the exprress router
const router = express.Router();

// GET all workoutes =>
router.get("/", getWorkouts);

// GET a single workout=>
router.get("/:id", getWorkout);

// POST a new workout
router.post("/", createWorkout);

// DELETE a workout
router.delete("/:id", deleteWorkout);

//UPDATE a workout
router.patch("/:id", updateWorkout);

module.exports = router;
