const event = require("events");


const eventEmitter = new event();

/**
 * Event handler
 * 
 */
 eventEmitter.on("log", (service)=>{
    console.log(`event logged from ${service}`);
});

/**
 * Emit some event
 */
eventEmitter.emit("log", "logger");

