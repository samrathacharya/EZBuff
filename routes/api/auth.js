//Use express router
const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth')

// User odal
const User = require('../../models/User');

//@route GET api/auth
//@desc Authenticate the user
//@access Public
router.post("/", (req,res) =>{
    const {email, password} = req.body;

    // Validation
    if (!email || !password){
        // Bad request status
        return res.status(400).json({msg: "Please enter all fields"})
    }

    // Check for existing user
    User.findOne({email: email})
    .then(user =>{
        if (!user) return res.status(400).json({msg: "User does not exist"})

        // Validate password
        bcrypt.compare(password,user.password)
        .then(isMatch =>{
            if (!isMatch) return res.status(400).json({msg: "Invalid credentials"})
            
            // Send token and user
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

// Add route because JWT tokens are stateless, we need a way to constantly validate the user that is logged in to 
//frontend
//@route GET api/auth/user
//@desc Get user daya
//@access Private
router.get('/user',auth, (req,res) =>{
    User.findById(req.user.id)
    // Give all data except the password
    .select('-password')
    .then(user => res.json(user));
})


module.exports= router;