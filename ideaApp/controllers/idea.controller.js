/**
 * This file is a controller file for idea
 */

const ideas = require("../models/idea.model");


exports.getIdeas = (req, res)=>{
    //return all the ideas
    return res.status(200).send(ideas);
}

let count = 1;
/**
 * Logic to create idea
 */
exports.createIdea = (req, res) => {
    req.body.id = ++count ;
    ideas[count] = req.body;
    res.status(201).send(ideas[count]);
}



/**
 * Logic to fetch idea based on id
 */
exports.getIdeaBasedOnId = (req,res) => {
    res.status(200).send(ideas[req.params.id]);
}


/**
 * Logic to update a specific idea
 */
exports.updateIdea = (req, res) => {
    if(ideas[req.params.id]){
        ideas[req.params.id] = req.body;
        res.status(200).send(ideas[req.params.id]);
    }else{
        res.status(400).send({
            message : "Idea you are trying to update doesn't exist"
        });
    }
}
