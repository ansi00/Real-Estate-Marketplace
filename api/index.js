import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRouter from "./routers/user.router.js";
import signUpRouter from "./routers/auth.route.js";
import cookieParser from "cookie-parser";
import listingRouter from './routers/listing.route.js'

dotenv.config();


 mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log("Connected to MongoDb");
    })
    .catch((err) => {
        console.log(err);
    });

const app = express();


app.use(express.json());
app.use(cookieParser())

app.use('/api/user', userRouter);
app.use('/api/auth', signUpRouter);
app.use('/api/listing', listingRouter)


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});
