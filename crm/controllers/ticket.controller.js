
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

exports.getAllTickets = async (req, res) => {

    const queryObj = {} ;
    
    const user = await userModel.findOne({userId : req.userId});

    if(user.userStatus == "CUSTOMER"){
        queryObj.reporter = req.userId ;
    }else if( user.userStatus == "ENGINEER"){
        queryObj["$or"] = [ {reporter : req.userId} ,{ assignee : req.userId}]
    }else{
        // do nothing
    }

    const tickets = await ticketModel.find(queryObj);

    res.status(200).send(tickets);
    

}

/**
 *  Define a controller method to fetch the ticket based on the ticket id
 */

exports.getOneTicket = async (req, res)=>{


    // Fetch the ticket id
    const ticketId = req.params.ticketId ;

    //Fetch the ticket based on the ticket id and return it
    const ticket = await ticketModel.findOne({
        _id : ticketId
    });

    console.log(ticket);
    res.status(200).send(ticket);
}