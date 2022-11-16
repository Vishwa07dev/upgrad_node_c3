
const ticketModel = require("../models/ticket.model");
const userModel = require("../models/user.model");
/**
 * Write the logic to create a new ticket
 */

exports.createTicket = async (req, res)=>{

    //We need to wrtite the logic to create the ticket


    // Need to read the request body and create the ticket obj 
    
    const ticketObj = {
        title : req.body.title,
        ticketPriority : req.body.ticketPriority,
        description : req.body.description,
        status : req.body.status,
        reporter : req.userId // This the userId of the person creating the ticket
    }

    const eng = await userModel.findOne({userType : "ENGINEER", userStatus: "APPROVED"});
    
    if(eng){
        ticketObj.assignee = eng.userId ;
    }
    //Store it in the DB
    const ticketCreated = await ticketModel.create(ticketObj);

    //Return the response
    res.status(201).send(ticketCreated);

}