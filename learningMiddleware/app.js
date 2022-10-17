const express = require("express");
const app  = express();

/**
 * Example of 3rd party Middlwares 00
 */
const bodyParser = require("body-parser");
app.use(bodyParser.json());


let count = 0 ;
function kareena(req, res, next){
    
    //Logic
    count++;
    console.log("Total request count so far is : " + count );

    // This will give control to next.
    next();
}


function m1(req, res, next){
    console.log("I am inside the first MW");
    //next();
}

function m2(req, res, next){
    console.log("I am inside the second MW");
    next();
}

function m3(req, res, next){
    console.log("I am inside the third MW");
    next();
}


/**
 *  m1 -> m2 ->m3 -> Any api handler to be called
 */
//app.use(kareena);

//Chaining -> m1, m3 , m2
//app.use(m1);
//app.use(m2);
//app.use(m3);

function applicationLevelMW(req, res , next){
    console.log("Appication level MW");
    next();
}
/**
 * Application Level MW
 */
app.use(applicationLevelMW);


app.get("/hello", (req,res)=>{
    res.status(200).send({
        message : "Hello World!"
    })
});

/**
 * Route level MWs
 * 
 */
app.get("/students",[m1,m2,m3], (req,res)=>{
    res.status(200).send({
        message : "Hello World!"
    })
});




app.listen(8080,()=>{
    console.log("Application started");
})