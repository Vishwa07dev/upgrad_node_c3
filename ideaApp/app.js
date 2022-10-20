const express = require("express");
const app = express();

require("./routes/idea.route")(app);

app.listen(8080,()=>{
    console.log("Application started !");
})