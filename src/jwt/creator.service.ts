import jwt from "jsonwebtoken"
import { putIntoCache } from "../database/redis/cache"

export default async function JWTCreatorService(id:number, value:string){
    try{
        console.log("start the create jwt method")
        const token=jwt.sign(
            {
                id,
                value
            },
            process.env.TOKEN_KEY??"",
            {
                expiresIn:"1d"
            }
        )
        await putIntoCache(String(id),token)
        return Promise.resolve(token)
    }catch(error)
    {
        return Promise.reject(error)
    }
}