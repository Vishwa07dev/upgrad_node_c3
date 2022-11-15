/**
 * Logic to validate the request body for signup
 */

const userModel = require("../models/user.model")

validateUserReqBody =async (req, res, next) =>{


    //Validate name
    if(!req.body.name){
      return  res.status(400).send({
            message : "Failed ! User name has not been provided"
        })
    }

    //validate userId
    if(!req.body.userId){
        return res.status(400).send({
            message : "Failed ! UserId has not been provided"
        })
    }

    const userStored = await userModel.findOne({userId : req.body.userId});

    if(userStored){
        return res.status(400).send({
            message : "userId already used"
        })
    }
    
    //validate password

    if(!req.body.password){
        return res.status(400).send({
            message : "Failed ! No password provided"
        })
    }

    //validate emailId
    if(!req.body.email){
        return res.status(400).send({
            message : "Failed ! EmailId has not been provided"
        })
    }

    //Check if the emailId is already used
    const user = await userModel.findOne({email : req.body.email});

    if(user){

        return res.status(400).send({
            message : "Email id used already exists"
        })
    }

    //validate userType
    const userTypes = ["CUSTOMER", "ENGINEER" , "ADMIN"];
    const userType = req.body.userType ;

    if(userType && !userTypes.includes(userType)){
        return res.status(400).send({
            message : "User Type provided is not correct"
        })
    }

    next(); // Validation done, move to the next MW

}

module.exports = {
    validateUserReqBody : validateUserReqBody
}