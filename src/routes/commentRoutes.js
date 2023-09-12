import express from 'express'
import CommentController from '../controller/commentController'

const router=express.Router()
router.post("/:id",CommentController.postComment)
router.get("/",CommentController.getAllComment)


export default router