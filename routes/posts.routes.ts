import express from "express"
//@ts-ignore
import postsController from "../controllers/posts.controller"

const router = express()


router.post("/post", postsController.createPost)
router.get("/posts", postsController.getPostsByUser)
export default router