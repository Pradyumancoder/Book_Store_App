require("dotenv").config()
const app= require("./app");
const connect = require("./config/db");

const port=process.env.PORT

// Uncaught error handling
process.on("uncaughtException" , (err)=>{
    console.log(`Error : ${err.message}`);
    console.log(`shutting down the server due to Uncaught Exception`);
    process.exit(1)
})
 
connect()
 
const server=app.listen(port , ()=> {console.log(`server is running on http://localhost:${port}`)})

// Unhandled promise Rejection

process.on("unhandledRejection" , (err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`shutting down the server due to unhandled Promise Rejection`);

    server.close(()=>{
        process.exit(1)
    })
})