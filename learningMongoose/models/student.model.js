/**
 * This file will hold the schema for the student
 */
const mongoose = require("mongoose");

/**
 * Define schema
 */
const addressSchema = new mongoose.Schema({
   lane1 : String,
   lane2 : String,
   street : String,
   city : String,
   country : String,
   pinCode : Number
});

const studentSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true,
        min : 16 // 
    },
    email : {
        type : String,
        required : true,
        lowercase : true,
        minLength : 10
    },
    createdAt : {
       type : Date,
       default : () => {
           return Date.now()
       },
       immutable : true
    },
    updatedAt : {
        type : Date,
        default : () =>{
            return Date.now();
        }
    },
    subjects : [String],
    address : addressSchema
})

/**
 * I would like to create collection using the above student Schema
 * 
 * 1. mongoose.model -> Create a new collection named students
 */
module.exports = mongoose.model("newstudent" , studentSchema);