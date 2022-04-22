import server from "./app";
import database from "./src/database/sqlite/models/index";
import playerSeeder from "./src/database/sqlite/seeders/Player.seeder";
import teamSeeder from "./src/database/sqlite/seeders/TeamSeeder";
import bcrypt from "bcryptjs"

database.sequelize.sync({ force: true }).then(async () => {
  console.log("database connected");
  const initialPlayers = await database.Players.bulkCreate(playerSeeder)
  const initialTeams = await database.Teams.bulkCreate(teamSeeder)
  await database.Users.create({ email: process.env.USER_EMAIL?.toLowerCase(), password: await bcrypt.hash(process.env.USER_PASSWORD ?? "-", 10) })
  await initialTeams[0].addPlayers(initialPlayers)
  server.listen(server.get("PORT"), () => {
    console.log("server listen on port:", server.get("PORT"))
  });
})


