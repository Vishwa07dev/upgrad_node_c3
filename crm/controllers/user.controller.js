


/**
 * Write a method to return all the users
 * 
 */

const userModel = require("../models/user.model")

exports.findAll = async (req, res) =>{
    
    const users = await userModel.find();

    const usersRes = [];

    users.forEach(user => {
        usersRes.push({
            name : user.name,
            userId : user.userId,
            email : user.email,
            userType : user.userType,
            userStatus : user.userStatus
        });
    })

    return res.status(200).send(usersRes);
}