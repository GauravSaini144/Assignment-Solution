import express from "express"
import { getMe, loginUser, logoutUser, registerUser } from "../controllers/userController.js";
const router=express.Router();
router.route("/signup").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);
router.route("/me").get(getMe);
export default router;