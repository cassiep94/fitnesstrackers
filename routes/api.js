const router = require("express").Router();

const Workouts = require("../models/workout.js");
router.get("/api/Workouts", (req, res) => {
    Workouts.find({})
      .sort({ date: -1 })
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

router.put("/api/Workouts", ({ body }, res) => {
  Workouts.create(body)
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/Workouts/bulk", ({ body }, res) => {
  Workouts.insertMany(body)
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/Workouts", (req, res) => {
  Workouts.find({})
    .sort({ date: -1 })
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
