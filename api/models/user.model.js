import mongoose from "mongoose";

const userSchema = new  mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
    },
    avatar : {
        type : String,
        default : "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?t=st=1730301069~exp=1730304669~hmac=0328c80f6260b4b7e654fc4ae53d666d5e47b6a06292138f6a4165c2839af9b3&w=740",
    },
} , {timestamps : true});

const User = mongoose.model('User', userSchema);

export default User;