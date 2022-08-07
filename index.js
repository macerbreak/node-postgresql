const express = require("express")
const userRouter  = require("./routes/user.routes")
const app = express()

const PORT = process.env.PORT || 8080
app.use(express.json())
app.use('/api', userRouter)

app.listen(PORT, () => console.log(`Server are working on ${PORT} port`))