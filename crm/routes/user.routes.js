const userController = require("../controllers/user.controller");

module.exports = (app)=>{
    
    app.get("/crm/api/v1/users", userController.findAll);
}