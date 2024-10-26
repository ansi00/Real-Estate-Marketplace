import dotenv from "dotenv";
import express from "express"
import mongoose from "mongoose";
import userRouter from "./routers/user.router.js"

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("Connected to MongoDb");   
})
.catch((err)=>{
    console.log(err);
    
})


const app = express();

app.use('/api/user' , userRouter)

app.listen(3000 , ()=> {
    console.log("Server is running on port 3000");
    
})


