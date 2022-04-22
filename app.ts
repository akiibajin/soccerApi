import express,{Request,Response} from "express"
import morgan from "morgan"
import cors from "cors"

require("dotenv").config()

const server=express() 

server.use(cors())
server.use(morgan("dev"))
server.use(express.json())
server.set("PORT", process.env.PORT??3000)


server.get("*",(req:Request,res:Response)=>{
    res.json({error:"No Page Found"})
})


export default server

