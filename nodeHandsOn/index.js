/**
 * This file will hold the logic to create the HTTP server
 */

const http = require('http');
const fs = require('fs');

//Read the content form file1
const greetMessage = fs.readFileSync('./files/file1.txt');

//Read the content from the file2
const welcomeMessage  = fs.readFileSync('./files/file2.txt');

//Read the content from the file3
const learningMessage = fs.readFileSync('./files/file3.txt');



/**
 * Logic for creating the server
 */

const server = http.createServer( (req , res) => {

    console.log("cb called again !");

    if(req.url == '/hello'){
        res.end(greetMessage);
    }else if( req.url == '/student'){
        res.end(learningMessage);
    }else{
        res.end(welcomeMessage);
    }
     
    /*
      Every time we hit this endpoint, 
      the callback should be called.
     */
    /**
     * We are returning response
     */
    //res.end("Hello Caller of this End Point - "  + req.url);
});


server.listen(7777, ()=>{
    console.log("Server started");
})


