import User from "../models/userModel.js";
import sendToken from "../utiles/jwtToken.js";
import jwt from "jsonwebtoken";
// signup or register user
export const registerUser=async(req,res)=>{
    try{
const {name, email, password, role}=req.body;
const user = await User.create({
name, email, password, role
});
 sendToken(user,201,res);
}
 catch(err){
    console.log("error in register user",+err.Stack);
 }
};

// login user

export const loginUser=async(req,res)=>{
    try{
    const {email, password}=req.body;
    if(!email||!password){
        return res.status(400).json({
            success:false,
            message:"please enter email and password"
        });
    }
    const user=await User.findOne({email});
    if(!user){
        return res.status(400).json({
            success:false,
            message:"User not found"
        });

    }

    const isPasswordMatched=await user.comparePassword(password);
    if(!isPasswordMatched){
        return res.status(400).json({
            success:false,
            message:"Invalid email or passsword"
        });
    }
    sendToken(user,200,res);
}catch(err){
    console.log("Error in login user "+err);
}
}

// logout user 
export const logoutUser=async(req,res)=>{
    try{
    res.cookie("token",null,{
        expires:new Date(Date.now()),
        httpOnly:true,
    });
    res.status(200).json({
        success:true,
        message:"Logged out",
        
    });}
    catch(err){
        console.log("Error in logout user "+err);
    }
}

// get loggin user detail 
export const getMe=async(req,res)=>{
    const {token}=req.cookies;
    if(!token)
        {
            return res.status(404).json({
                success:false,
                message:"user token not found"
            });

        }
    const decodedData=jwt.verify(token,process.env.JWT_SECRET);
    const user = await User.findById(decodedData.id);
   
    res.status(200).json({
        success:true,
        user,
    })
}