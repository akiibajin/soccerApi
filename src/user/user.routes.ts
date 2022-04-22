import { Router } from "express";
import { userLoginController } from "./user.controller";

const routes = Router()

routes.route("/logIn")
    .post(userLoginController)

export default routes