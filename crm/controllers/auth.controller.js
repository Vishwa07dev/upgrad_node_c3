
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
    res.status(201).send(userCreated);
}



/**
 * Logic for login
 */