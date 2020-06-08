const express = require ("express");
const mongoose = require("mongoose");
const path = require('path');
const config = require('config');

const app = express();
app.use(express.json());

//GET DB credentials
const db = config.get('mongoURI');

//Connect DB
mongoose
.connect(db, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
.then(() => console.log("MongoDB connected"))
.catch(err => console.log("Error: "+err));

//Use routes
app.use('/api/exercises', require('./routes/api/exercises'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

// Serve static assets (in build folder if in production)
if (process.env.NODE_ENV === 'production'){
    // Set static folder
    app.use(express.static(path.join(__dirname, '/client/build'))) 

    // Load index.html file
    app.get('*', (req,res) =>{
        res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
    });
}

//Connect port
const port = process.env.PORT || 5000;



app.listen(port, () => console.log(`Server has started on port ${port}`));