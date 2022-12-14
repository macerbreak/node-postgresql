import {TypedRequestBody, TypedRequestQuery, TypedResponse} from "../types/types";

const db = require("../db")


class PostsController {
    async createPost(req:TypedRequestBody<{title:string,content:string,userId:number}>, res:TypedResponse<unknown>){
        const {title, content, userId} = req.body
        const newPost = await db.query("INSERT INTO post (title,content,user_id) values ($1, $2, $3) RETURNING *", [title, content,userId])
        res.json(newPost.rows[0])
    }
    async getPostsByUser(req:TypedRequestQuery<{ id:string}>, res:TypedResponse<unknown>){
        const {id} = req.query
        console.log({id})
        const posts = await db.query("SELECT * from post where user_id=$1", [id])
        res.json(posts.rows)
    }
}
module.exports = new PostsController()