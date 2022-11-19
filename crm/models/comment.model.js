const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({

   content : {
       type : String,
       required : true
   },

   ticketId : {
       type :mongoose.SchemaTypes.ObjectId,
       ref : "Ticket",
       required : true
   },

   commenterId : {
       type : String,
       required : true
   }

   //created At  - This can be auto populated

   //updatedAt - This can be auto populated

   // __v
}, {
    timestamps : true,
    versionKey : false
});

module.exports = mongoose.model("comment", commentSchema);