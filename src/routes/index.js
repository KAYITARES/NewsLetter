import express from "express";
import userRoutes from './userRoutes'
import messageRoutes from './messageRoutes'
import newsRoutes from './newsRoutes'
import commentRoutes from "./commentRoutes"

const router=express.Router();
router.use("/user",userRoutes)
router.use("/message",messageRoutes)
router.use("/news",newsRoutes)
router.use("/comment",commentRoutes)
export default router