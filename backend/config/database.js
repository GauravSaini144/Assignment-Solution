import mongoose from "mongoose";
const connectDatabase=()=>{
    mongoose.connect(process.env.MONGO_URI).then(()=>
console.log("Connected to Database")).catch((err)=>{
    console.log("Error while connecting database"+err);
})
}
export default connectDatabase;