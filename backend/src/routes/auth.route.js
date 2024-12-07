import express from "express"
import { signup,login,logout } from "../controllers/auth.controllers.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup",signup)
router.post("/login", login)
router.post("/logout",logout)
router.post("/update-profile",protectRoute,updateProfile)

export default router;
