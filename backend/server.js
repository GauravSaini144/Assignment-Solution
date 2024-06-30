import app from "./app.js";
import dotenv from "dotenv";
import connectDatabase from "./config/database.js";
dotenv.config({path:"./config/config.env"});
// connecting to database
connectDatabase();
app.listen(process.env.PORT,(req,res)=>{
    console.log(`server listening on port ${process.env.PORT}`);
});