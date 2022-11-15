const userController = require("../controllers/user.controller");
const authjwt = require("../middlewares/authjwt");

module.exports = (app)=>{

    app.get("/crm/api/v1/users",[authjwt.verifyToken, authjwt.checkIfAdmin], userController.findAll);
   
    app.put("/crm/api/v1/users/:userId",[authjwt.verifyToken,authjwt.checkIfAdmin],userController.update);

}