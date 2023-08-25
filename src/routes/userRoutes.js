import express from 'express';
import userController from '../controller/userController';

const router=express.Router()

router.post("/",userController.createUser)
router.get("/",userController.getAllUsers)
router.delete('/delete/all',userController.deleteAllUsers)

export default router