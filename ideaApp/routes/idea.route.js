/**
 * This file will have the logic to route
 * the idea resource APIs
 */
const ideaController = require("../controllers/idea.controller");

module.exports = (app)=>{

    //Define the routes

    /**
     * Route for the getting all the ideas
     */
    app.get("/idea_app/api/v1/ideas",ideaController.getIdeas);

    app.post("/idea_app/api/v1/ideas", ideaController.createIdea);

    app.get("/idea_app/api/v1/ideas/:id", ideaController.getIdeaBasedOnId);

    app.put("/idea_app/api/v1/ideas/:id", ideaController.updateIdea);

}