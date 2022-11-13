const authController = require("../controllers/auth.controller");

module.exports = (app)=>{


    /**
     * POST 127.0.0.1:8080/crm/api/v1/auth/signup
     * 
     * Req Body
     */
    app.post("/crm/api/v1/auth/signup", authController.signup);

    app.post("/crm/api/v1/auth/signin", authController.signin);
}