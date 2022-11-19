
const ticketController = require("../controllers/ticket.controller");
const authJwt = require("../middlewares/authjwt");

module.exports = (app) => {
    
    //route for creating tickets
    app.post("/crm/api/v1/tickets",[authJwt.verifyToken], ticketController.createTicket);

    //route for getting all the tickets
    app.get("/crm/api/v1/tickets",[authJwt.verifyToken], ticketController.getAllTickets);

    //route for fetching the ticket based on the ticket id
    app.get("/crm/api/v1/tickets/:ticketId",[authJwt.verifyToken], ticketController.getOneTicket);
    

}