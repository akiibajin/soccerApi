import db from "../database/sqlite/models"
import { Request, Response } from "express"
import { getAllTeamsFromDatabase } from "./team.service"

export const fetchAllTeams=async(req:Request,res:Response)=>{
    try{
        const allTeams = await getAllTeamsFromDatabase()
        res.json(allTeams)
    }catch(error){
        res.status(400).send(String(error))
    }
}
export const publishTeams = async(req:Request, res:Response)=>{
    try{
        const { teams } = req.body
        const response = await db.Teams.bulkCreate(teams)
        res.json(response)
    }catch(error){
        res.status(400).send(error)
    }
}