import express from "express"
import {getUserForSidebar} from "../controllers/message.controller.js"
import { protectRoute } from "../middleware/auth.middleware.js";
import {getMessages} from "../controllers/message.controller.js"
import {sendMessages} from "../controllers/message.controller.js"


const router=express.Router()

router.get("/users",protectRoute,getUserForSidebar);
router.get("/:id",protectRoute,getMessages);

router.post("/send/:id",protectRoute,sendMessages);

export default router;