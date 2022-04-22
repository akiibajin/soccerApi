import { Request, Response } from "express";
import { userValidatorService } from "./user.service";


export const userLoginController=async(req:Request,res:Response)=>{
    try{
        const { email, password } = req.body
        const validateUserToken = await userValidatorService(email, password)
        res.json({your_token:validateUserToken})
    }catch(error){
        res.status(400).send(error)
    }
}