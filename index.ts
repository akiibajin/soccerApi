import server from "./app";
import database from "./src/database/postgres/models/index";


database.sequelize.sync({force:true}).then(() => {
    console.log("database connected");
    server.listen(server.get("PORT"),()=>{
      console.log("server listen on port:", server.get("PORT"))
    });
  })


