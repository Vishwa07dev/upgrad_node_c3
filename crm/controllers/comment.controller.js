
const commentModel = require("../models/comment.model");

/**
 * Create a comment for a given ticket
 */
exports.createComment = async (req, res) =>{

    //Read the comment body from req and create comment object
    const commentObj = {
        content : req.body.content,
        ticketId : req.params.ticketId ,  // this should be part of the req param
        commenterId : req.userId // This will be fetched from the access token
    }

    //Create the comment object
    const comment = await commentModel.create(commentObj);

    //Send the comment created success response
    res.status(201).send(comment);
}