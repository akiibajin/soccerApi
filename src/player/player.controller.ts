import { Request, Response } from "express"
import { PlayerAttributes } from "./player.interface"
import { getPlayersWithQueries, postPlayersService } from "./player.service"


export const fetchAllPlayers = async (req: Request, res: Response) => {
    try {
        const allPlayers = await getPlayersWithQueries(req.query)
        res.json(allPlayers)
    }
    catch (error) {
        res.status(400).send(error)
    }
}

export const publishBulkPlayers = async (req: Request, res: Response) => {
    try {
        const { players } = req.body
        await postPlayersService(players)
        res.json({ message: `the players <<${players.map((player: PlayerAttributes) => player.name).join(", ")}>> have been inserted Successfully` })
    }
    catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}