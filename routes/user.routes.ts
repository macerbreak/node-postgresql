import express from "express"
interface RouterType {
    post:()=>void
    get:()=>void
    put:()=>void
    delete :()=>void
}

const router = express()
const userController = require("../controllers/user.controller")

router.post("/user", userController.createUser)
router.get("/users", userController.getUsers)
router.get("/user/:id", userController.getOneUser)
router.put("/user", userController.updateUser)
router.delete("/user", userController.deleteUser)
export default router