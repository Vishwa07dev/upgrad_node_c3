
const ticketController = require("../controllers/ticket.controller");
const authJwt = require("../middlewares/authjwt");

module.exports = (app) => {
    
    //route for creating tickets
    app.post("/crm/api/v1/tickets",[authJwt.verifyToken], ticketController.createTicket);
}