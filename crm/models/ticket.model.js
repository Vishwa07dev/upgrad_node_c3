const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    ticketPriority : {
        type : Number,
        required :true,
        default : 4
    },
    description : {
        type : String,
        required : true
    },
    status : {
        type : String,
        required : true,
        default : "OPEN",
        enum : ["OPEN", "CLOSED", "IN_PROGRESS"]
    },
    reporter : {
        type : String
    },
    assignee : {
        type : String
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
    }

});

module.exports = mongoose.model("ticket", ticketSchema);