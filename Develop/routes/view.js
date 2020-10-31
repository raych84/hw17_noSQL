// Serve up HTML files here
const router = require("express").Router();
const Workout = require("../models/workout")
const path = require("path")

router.post("/view/workout", (req, res) => {
	Workout.create({})
});

router.get("/exercise", (req, res) => {
	res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (req, res) => {
	res.sendFile(path.join(__dirname, "../public/stats.html"));
});
module.exports = router