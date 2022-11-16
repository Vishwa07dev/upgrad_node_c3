/**
 * Starting point of the application
 */
const express = require("express");
const app = express();
const serverConfig = require("./configs/server.config");
const mongoose = require("mongoose");
const dbConfig = require("./configs/db.config");
const userModel = require("./models/user.model");
const bcrypt = require("bcryptjs");


/**
 * MW used to tell the App convert JSON request body
 * into JS object
 */
app.use(express.json());

/**
 * Start the server
 */
app.listen(serverConfig.PORT, () => {
    console.log(`Application started on the port no ${serverConfig.PORT}`);
})

/**
 * Connect to the MongoDB
 *
 */

mongoose.connect(dbConfig.DB_URL);

const db = mongoose.connection;

db.on('error', () => {
    console.log("Error while connecting to the DB");
});
db.once("open", () => {
    console.log("Connected to the MongoDB");
    init();
})

async function init() {

    let admin = await userModel.findOne({ userId: "admin" });

    if (admin) {
        console.log("Admin user already present")
    } else {

        //Logic to initilize the application with ADMIN user
        const admin = await userModel.create({
            name: "ADMIN",
            userId: "admin",
            email: "kankvish01@gmail.com",
            userType: "ADMIN",
            password: bcrypt.hashSync("Welcome1", 8)
        });

        console.log("Admin created");

    }


}

/**
 * Connect the route
 */
require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);
require("./routes/ticket.routes")(app);