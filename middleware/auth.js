const config = require('config');
const jwt = require('jsonwebtoken');


// Middleware: Get token sent from frontend 
// and sent to backend
function auth (req, res, next){
    const token = req.header('x-auth-token');

    // Check for token, else unauthorised token
    if(!token) return res.status(401).json({msg: "No token, authorisation denied"});
    
    try{
        //Verify token
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        // Add user from payload
        req.user = decoded;
        // Calls next piece of middleware
        next();

    }
    catch(e){
        res.status(400).json({msg: "Token is not valid"})
    }
}


module.exports = auth;