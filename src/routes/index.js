import express from "express";
import userRoutes from "./userRoutes";
import messageRoutes from "./messageRoutes";
import newsRoutes from "./newsRoutes";
import commentRoutes from "./commentRoutes";
import categoryRoutes from "./categoryRoutes";

const router = express.Router();
router.use("/user", userRoutes);
router.use("/message", messageRoutes);
router.use("/news", newsRoutes);
router.use("/comment", commentRoutes);
router.use("/category", categoryRoutes);
export default router;
