import express from "express"
import userRouter from "./routes/user.routes"
import postsRouter from "./routes/posts.routes"

const app = express()

const PORT = process.env.PORT || 8080
app.use(express.json())
app.use('/api', userRouter)
app.use('/api', postsRouter)

app.listen(PORT, () => console.log(`Server are working on ${PORT} port`))