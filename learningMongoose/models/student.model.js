/**
 * This file will hold the schema for the student
 */
const mongoose = require("mongoose");

/**
 * Define schema
 */
const studentSchema = new mongoose.Schema({
    name : String,
    age : Number
})

/**
 * I would like to create collection using the above student Schema
 * 
 * 1. mongoose.model -> Create a new collection named students
 */
module.exports = mongoose.model("student" , studentSchema);