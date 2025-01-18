import dbConnect from "./database/dbConnect.js";
import express from "express";
import { config } from "dotenv";
import bodyParser from "body-parser";
import AuthRoutes from "./routes/authRoutes.js";
import taskRoute from "./routes/taskRoutes.js";

const Server = express();

config({path: "./config/config.env"});

dbConnect()

const port = process.env.PORT || 8000

Server.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
    
})

Server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

Server.use(express.json())
Server.use(bodyParser.urlencoded())
Server.use("/api/auth", AuthRoutes)
Server.use("/api", taskRoute)

