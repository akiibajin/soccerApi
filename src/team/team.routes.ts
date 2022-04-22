import { Router } from "express";
import { publishTeams,fetchAllTeams  } from "./team.controller";

const routes = Router()

routes.route("/")
    .get(fetchAllTeams)
    .post(publishTeams)


export default routes