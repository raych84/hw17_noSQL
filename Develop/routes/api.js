const router = require("express").Router();
const { json } = require("express");
const Workout = require("../models/workout")


router.post("/api/workouts", (req, res) => {
	Workout.create({ body })
		.then(createWorkout => {
			res.json(createWorkout);
		})
		.catch(err => {
			res.status(400).json(err);

		})
});

router.post("/api/workout", (req, res) => {
	Workouts.find({body})
		.then(getLastWorkout => {
			res.json(getLastWorkout);
		})
		.catch(err => {
			res.status(400).json(err);
		});
});

router.put("/api/workouts/:id", (req, res) => {
	Workouts.findByIdAndUpdate(req.params.id, )
	{$set: {"Workout.id": req.body.id}}, 
        {new: true},
		.then(addExercise => {
			res.json({})
		})
		.catch(err => {
			res.status(400).json(err);

		});
});

router.put("/api/workouts/range", (req, res, next) =>{
	Workouts.find({body})
	.then(getWorkoutsInRange =>{
		res.json(getWorkoutsInRange);
	})
	.catch(err => {
		res.status(400).json(err);
	})
})

// router.put("/api/workouts/:id", (req, res) =>{
// 	Workouts.findByIdAndUpdate(id, { day: 'type' }, options, callback)
// 	new: true
// })


module.exports = router;
