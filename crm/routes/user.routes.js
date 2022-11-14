const userController = require("../controllers/user.controller");
const authjwt = require("../middlewares/authjwt");

module.exports = (app)=>{

    app.get("/crm/api/v1/users",[authjwt.verifyToken], userController.findAll);
}