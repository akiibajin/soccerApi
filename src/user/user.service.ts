import db from "../database/sqlite/models"
import bcrypt from "bcryptjs"
import JWTCreatorService from "../jwt/creator.service"


export const userValidatorService = async(email:string, password:string)=>{
    try{
        const userInDatabase = await db.Users.findOne({where:{
            email 
        }})
        if(!userInDatabase){
            return await Promise.reject(`User with email <<${email}>> does not exist`)
        }
        console.log("the user finded is ", userInDatabase)
        if(!comparePasswordService(userInDatabase.password,password)){
            return await Promise.reject("Password incorrect, try again with another one")
        }

        return await JWTCreatorService(userInDatabase.id,email)
    }catch(error)
    {
        return await Promise.reject(error)
    }
}

const comparePasswordService=(passwordSaved:string, passwordRequested:string):boolean=>{
    console.log("start the compare method")
    return bcrypt.compareSync(passwordRequested, passwordSaved)
}