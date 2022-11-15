


/**
 * Write a method to return all the users
 * 
 */

const userModel = require("../models/user.model")

exports.findAll = async (req, res) =>{

    const queryObj = {};

    if(req.query.userType){
        queryObj.userType = req.query.userType ;
    }
    
    const users = await userModel.find(queryObj);

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


/**
 * Write a method to update user status
 */
exports.update =  async (req, res)=>{
   
   const user = await  userModel.findOne({userId : req.params.userId});
 
   user.userStatus = req.body.userStatus ;
   const savedUser = await user.save();

   res.status(200).send({
       message : "User status was successfully updated"
   });
}