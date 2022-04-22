import express,{Request,Response} from "express"
import morgan from "morgan"
import cors from "cors"
import routes from "./src/routes"

require("dotenv").config()

const server=express() 

server.use(cors())
server.use(morgan("dev"))
server.use(express.json())
server.set("PORT", process.env.PORT??3000)
server.use(routes)



export default server

