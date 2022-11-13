
const bcrypt = require("bcryptjs");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
/**
 * Logic for registration
 *   1. Read the registration request body
 *   2. Create the user object and store in the db
 *   3. Return the response
 */

exports.signup = async (req, res) => {
    
    /**
     * Write the complete logic to register/signup any one
     */

    /**
     * Read the request body
     */
    //setting the status for users who are not customers
    if(req.body.userType && req.body.userType != 'CUSTOMER'){
        req.body.userStatus = "PENDING"
    }

    const userObj = {
        name : req.body.name,
        userId : req.body.userId,
        email : req.body.email,
        userType : req.body.userType,
        password : bcrypt.hashSync(req.body.password , 8),
        userStatus : req.body.userStatus
    }

    /**
     * Process and store it into the DB
     */
     const userCreated = await userModel.create(userObj);
    /**
     * Return the response to the client
     */

    /**
     * I can take our unnecessary details before returning to the client
     */
    const signupResp = {
        name : userCreated.name,
        userId : userCreated.userId,
        email : userCreated.email,
        userType : userCreated.userType,
        userStatus : userCreated.userStatus,
        createdAt : userCreated.createdAt,
        updatedAt : userCreated.updatedAt
    }
    res.status(201).send(signupResp);
}



/**
 * Logic for login
 */

exports.signin = async (req, res)=>{


    // user id is valid
    const user = await userModel.findOne({userId : req.body.userId});
    console.log(user);
    if(user == null){
       return res.status(400).send({
           message : "Failed ! User doesn't exist"
       })
    }

    if(user.userStatus != 'APPROVED'){  //In the case of Engineers
      return res.status(403).send({
          message : "Can't allow login as user who is not APPROVED"
      })
    }
    //password is valid
    const isPasswordValid = bcrypt.compareSync(req.body.password, user.password);
    
    if(!isPasswordValid){
        return res.status(400).send({
            message : "Invalid password !"
        })
    }

    //JWT token generation
    const token = jwt.sign({id : user.userId}, "SECRET CODE", {
        expiresIn : 600 // This is in seconds - 10 mins
    });

    //Sending the response back
    res.status(200).send({
        name : user.name,
        userId : user.userId,
        email : user.email,
        userType : user.userType,
        userStatus : user.userStatus,
        accessToken : token
    });
}