//Use express router
const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

// User odal
const User = require('../../models/User');

//@route GET api/users
//@desc Register New USer
//@access Public
router.post("/", (req,res) =>{
    const {name, email, password} = req.body;

    // Validation
    if (!name || !email || !password){
        // Bad request status
        return res.status(400).json({msg: "Please enter all fields"})
    }

    // Check for existing user
    User.findOne({email: email})
    .then(user =>{
        if (user) return res.status(400).json({msg: "User already exists"})

        const newUser = new User({
            name,
            email,
            password
        });

        // Create salt and hash
        bcrypt.genSalt(10, (err,salt)=>{
            bcrypt.hash(newUser.password, salt, (err, hash)=>{
                if (err) throw err;
                newUser.password = hash;
                newUser.save()
                .then(user =>{
                    jwt.sign(
                        // Enter payload
                        {id: user.id},
                        config.get('jwtSecret'),
                        // Expires in an hour
                        {expiresIn: 3600},
                        (err, token) =>{
                            if (err) throw err;
                            // After registering user, throw token to sign up user
                            res.json({
                                token: token,
                                user: {
                                    id: user.id,
                                    name: user.name,
                                    email: user.email
                                }
                            });
                        }
                    )
                    
                })
            })
        });
    })
});


module.exports= router;