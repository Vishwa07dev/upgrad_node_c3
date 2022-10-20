/**
 * This file is a controller file for idea
 */

const ideas = require("../models/idea.model");

/**
 * Logic to fetch all idea
 * 
 * GET  127.0.0.1:8080/idea_app/api/v1/ideas
 */

exports.getIdeas = (req, res)=>{
    //return all the ideas
    return res.status(200).send(ideas);
}




/**
 * Logic to create idea
 */



/**
 * Logic to fetch idea based on id
 */


/**
 * Logic to update a specific idea
 */