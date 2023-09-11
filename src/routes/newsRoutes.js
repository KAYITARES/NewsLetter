import express from 'express'
import NewsController from '../controller/newsController'
import VerifyAccess from '../middlewares/verifyAccess'

const router=express.Router()
router.post('/',VerifyAccess,NewsController.createNews)
router.get("/",NewsController.getAllNews)
router.patch("/:id",VerifyAccess,NewsController.updateNews)
router.get("/:id",NewsController.getOneNews)
router.delete("/:id",VerifyAccess,NewsController.deleteOneNews)
export default router