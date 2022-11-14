const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

/**
 * Logic to verify the token passed by the client
 */

verifyToken = (req, res, next) => {

    //Extract the token from the headers
    let token = req.headers["x-access-token"];
    console.log(token);
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
        console.log(req.userId);
        next(); // Give the control to the controller


    } );
    
}

checkIfAdmin = async ( req, res, next)=>{
    
    // I need to load the user first - userId
    const user = await userModel.findOne({userId : req.userId});
    console.log(user);
    console.log(user.userType) ;
    if(user && user.userType == "ADMIN"){
        next(); // Go to the controller
    }else{
        return res.status(403).send({
            message : "Only ADMIN user is allowed to call this API"
        })
    }

}


module.exports = {
    verifyToken : verifyToken,
    checkIfAdmin : checkIfAdmin
}