const router = require("express").Router();
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

router.post("/api/workouts/bulk", ({ body }, res) => {
	Workouts.insertMany(body)
		.then(dbWorkouts => {
			res.json(dbWorkouts);
		})
		.catch(err => {
			res.status(400).json(err);
		});
});

router.get("/api/workout", (req, res) => {
	Workouts.find({})
		.then(getLastWorkout => {
			res.json(getLastWorkout);
		})
		.catch(err => {
			res.status(400).json(err);
		});
});

router.put("/api/workouts/:id", (req, res) => {
	Workouts.create({ body })
		.then(addExercise => {
			res.json(addExercise);
		})
		.catch(err => {
			res.status(400).json(err);

		})
})


router.post("/api/workout/range", function (req, res) {
	Workouts.getWorkoutsInRange = "range = " + req.params.id;



	Workouts.update({
		sleepy: req.body.sleepy
	}, condition, function (result) {
		if (result.changedRows == 0) {
			// If no rows were changed, then the ID must not exist, so 404
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});
// router.put("/api/workouts/:id", (req, res) =>{
// 	Workouts.findByIdAndUpdate(id, { day: 'type' }, options, callback)
// 	new: true
// })

module.exports = router;
