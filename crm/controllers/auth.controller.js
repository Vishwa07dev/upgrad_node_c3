
const bcrypt = require("bcryptjs");
const userModel = require("../models/user.model");
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