import mongoose from "mongoose";

const dbConnect = () =>{
mongoose.connect(process.env.TASK_API_DATABASE,{
    dbName: process.env.DBNAME
}).then(()=>{
    console.log("Connected...");
    
}).catch((e)=>{
    console.log("Error connecting to database...");
    
})

}

export default dbConnect