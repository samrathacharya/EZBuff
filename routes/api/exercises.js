//Use express router
const express = require("express");
const router = express.Router();
// Bring in middleware to ensure authentication
const auth = require('../../middleware/auth');

const Exercise = require('../../models/exercise');

//@route GET api/exercises
//@desc Get all exercises
//@access Public
router.get("/", (req,res) =>{
    Exercise.find()
    .sort({name: -1 })
    .then (exercises => res.json(exercises));
});

//@route POST api/exercises
//@desc Create a new exercise
//@access Private
router.post("/", auth, (req,res) =>{
    const newExercise = new Exercise({
        name: req.body.name,
        sets: req.body.sets,
        reps: req.body.reps,
        weight: req.body.weight
    });

    // Save to DB
    newExercise.save()
    .then(exercise => res.json(exercise));
});

//@route DELETE api/exercises/:id (id is param)
//@desc Delete given exercise
//@access Private
router.delete("/:id", auth, (req,res) =>{
    Exercise.findById(req.params.id)
    .then(exercise => exercise.remove()
    .then(() => res.json({success: true})
    ))
    .catch(err => res.json(404).status({success: false}))
});

module.exports= router;