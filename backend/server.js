import dbConnect from "./database/dbConnect.js";
import express from "express";
import { config } from "dotenv";
import bodyParser from "body-parser";

const Server = express();

config({path: "./config/config.env"});

dbConnect()

const port = process.env.PORT || 3000

Server.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
    
})



Server.use(express.json())
Server.use(bodyParser)
// Server.use(bodyParser,urlencoded)
