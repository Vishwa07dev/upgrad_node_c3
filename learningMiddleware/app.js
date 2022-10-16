const express = require("express");
const app  = express();
let count = 0 ;
function kareena(req, res, next){
    
    //Logic
    count++;
    console.log("Total request count so far is : " + count );

    // This will give control to next.
    next();
}
app.use(kareena);
app.get("/hello", (req,res)=>{
    res.status(200).send({
        message : "Hello World!"
    })
})




app.listen(8080,()=>{
    console.log("Application started");
})