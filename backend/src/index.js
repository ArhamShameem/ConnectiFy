// const express =require("express")
import express from "express";
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import messageRoutes from "./routes/message.route.js";
 
dotenv.config();
const app = express();
app.use(cookieParser());

const PORT = process.env.PORT;

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/message",messageRoutes)

app.listen(PORT, () => {
  console.log("server is running on port:" + PORT);
  connectDB();
});
