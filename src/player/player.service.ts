import { Op } from "sequelize"
import db from "../database/sqlite/models"
import { PlayerAttributes } from "./player.interface"


export const getPlayersWithQueries=async(queries:any)=>{
    try{
        if(Object.keys(queries).length){
            const options=generateOptions(queries)
            const allPlayersFiltered = await db.Players.findAll(options)
            return await Promise.resolve(allPlayersFiltered)
        }
        const allPlayers = await db.Players.findAll()
        return await Promise.resolve(allPlayers)
    }catch(error)
    {
        console.log(error)
        return await Promise.reject(error)
    }
}

const generateOptions=(queries:any)=>{
    const {name, nationality, position, teamId} = queries
    let options:any={
        where:{}
    }
    if(name){
        options.where.name={
            [Op.like]:`%${name}%`
        }
    }
    if(nationality){
        options.where.nationality={
            [Op.like]:`%${nationality}%`
        }
    }
    if(position){
        options.where.position={
            [Op.eq]: position
        }
    }
    if(teamId){
        options.where.teamId={
            [Op.eq]:`%${teamId}%`
        }
    }
    return options
}

export const postPlayersService = async(players:PlayerAttributes[]):Promise<void>=>{
    try{
        await db.Players.bulkCreate(players)
        return await Promise.resolve()
    }
    catch(error)
    {
        return await Promise.reject(error)
    }
}