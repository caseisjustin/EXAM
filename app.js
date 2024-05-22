import express from "express"
import dotenv from "dotenv"
import routerSetup from "./routes/setup.router.js"
import routerUser from "./routes/users.router.js"
import routerRegister from "./routes/register.router.js"
import routerLogIn from "./routes/login.router.js"
import routerBoard from "./routes/board.router.js"
import routerTask from "./routes/task.router.js"

dotenv.config()

const app = express()

app.use(express.json())

app.use("/register", routerRegister)
app.use("/setup", routerSetup)
app.use("/users", routerUser)
app.use("/login", routerLogIn)
app.use("/board", routerBoard)
app.use("/board", routerTask)

export default app;