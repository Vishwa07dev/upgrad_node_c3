const jwt = require("jsonwebtoken");

/**
 * Logic to verify the token passed by the client
 */

verifyToken = (req, res, next) => {

    //Extract the token from the headers
    let token = req.headers["x-access-token"];
    
    if(!token){
        return res.status(403).send({
            message : "No token was provided"
        })
    }

    // Now we need to do the token verification
    jwt.verify(token,"SECRET CODE", (err, decoded)=>{
        if(err){
            return res.status(401).send({
                message : "Unauthorized !"
            });
        }
        //I am getting the userId info from token and setting
        //it in the request object to be used later
        req.userId = decoded.id // my user id
        next(); // Give the control to the controller


    } );
    
}

checkIfAdmin = ( req, res, next)=>{
    /**
     * Implement this function/middleware, which will check
     * if the calling user is admin or not
     * 
     * If not admin, it should return response saying you
     * are not allowed to make a call
     */
}


module.exports = {
    verifyToken : verifyToken
}