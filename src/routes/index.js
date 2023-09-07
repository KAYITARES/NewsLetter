import express from "express";
import userRoutes from './userRoutes'
import messageRoutes from './messageRoutes'

const router=express.Router();
router.use("/user",userRoutes)
router.use("/message",messageRoutes)
export default router