import mongoose from "mongoose";
import validator from "validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please enter your name"],
        minLength:[4,"name should have more than 5 characters"],
        
    },
    email:{
        type:String,
        required:[true,"Please enter your email"],
        unique:true,
        validate:[validator.isEmail,"Please Enter a valid Email"],
    },
    password:{
        type:String,
        required:[true, "Please enter your password"],
    },
    role:{
        type:String,
        required:[true, "Please enter your role"],
    }
}
);

userSchema.pre("save", async function(){
    this.password=await bcrypt.hash(this.password,10);
});

userSchema.methods.getJWTToken=function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRE,
    });
};

userSchema.methods.comparePassword=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
}
const User=mongoose.model("User",userSchema);
export default User;