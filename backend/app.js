import express from "express";
const app=express();
import cors from "cors";
import user from "./routes/userRoute.js";
import cookieParser from "cookie-parser";
app.use(cors());
app.use(express.urlencoded({extended:true}));

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1",user);
export default app;
