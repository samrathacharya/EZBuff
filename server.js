const express = require ("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const exercises = require('./routes/api/exercises');

const app = express();
app.use(bodyParser.json());

//GET DB credentials
const db = require('./config/keys').mongoURI;

//Connect DB
mongoose
.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("MongoDB connected"))
.catch(err => console.log("Error: "+err));

//Connect port
const port = process.env.PORT || 5000;

//Use routes
app.use('/api/exercises', exercises)

app.listen(port, () => console.log(`Server has started on port ${port}`));