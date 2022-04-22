import { Router, Request, Response } from "express";
import playerRoutes from "../player/player.routes";
import teamRoutes from "../team/team.routes";
import userRoutes from "../user/user.routes";

const routes = Router()

routes.use("/user", userRoutes)
routes.use("/api/players", playerRoutes)
routes.use("/api/teams", teamRoutes)

routes.use("*",(req:Request,res:Response)=>{
    res.status(404).json({error:"No Page Found"})
})

export default routes