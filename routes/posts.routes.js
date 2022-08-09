const Router = require("express")

const router = new Router()
const postsController = require("../controllers/posts.controller")

router.post("/post", postsController.createPost)
router.get("/posts", postsController.getPostsByUser)
module.exports = router