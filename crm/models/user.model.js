const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    userId : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true ,
        lowercase : true,
        minLength : 10
    },
    createdAt : {
        type : Date,
        immutable  : true,
        default : ()=>{
            return Date.now();
        }
    },
    updatedAt : {
        type : Date,
        default : ()=>{
            return Date.now();
        } 
    },
    userType : {
        type : String,
        required : true,
        default : "CUSTOMER",
        enum : ["CUSTOMER", "ENGINEER", "ADMIN"]
    },
    userStatus : {
        type : String,
        required : true,
        default : "APPROVED",
        enum : ["APPROVED", "REJECTED", "PENDING"]
    }
});


module.exports = mongoose.model("user", userSchema);