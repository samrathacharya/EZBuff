const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    sets:{
        type: Number,
        default: 0
    },
    reps:{
        type: Number,
        default: 0
    },
    weight: {
        type: Number,
        default: 0
    }
});

module.exports = Exercise = mongoose.model("exercise", ExerciseSchema);