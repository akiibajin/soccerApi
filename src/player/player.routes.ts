import { Router } from "express";
import { fetchAllPlayers, publishBulkPlayers } from "./player.controller";

const routes = Router()

routes.route("/")
    .get(fetchAllPlayers)
    .post(publishBulkPlayers)

export default routes