import db from "../database/sqlite/models"
import { TeamAttributes } from "./team.interface"


export const getAllTeamsFromDatabase=async()=>{
    try{
        const allTeams = await db.Teams.findAll({
            include:{
                model:db.Players
            }
        })
        return await Promise.resolve(allTeams)
    }
    catch(error)
    {
        throw new Error(String(error))
    }
}

export const saveTeamsToDatabase=async(teams:TeamAttributes[])=>{
    try{
        const response = await db.Teams.bulkCreate(teams)
        return Promise.resolve(response)
    }
    catch(error)
    {
        throw new Error(String(error))
    }
}