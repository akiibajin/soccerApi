"use strict";
import {
  Model,
} from "sequelize";
import { TeamAttributes} from "../../../team/team.interface";

module.exports=(sequelize:any, DataTypes:any)=>{
class Team extends Model<TeamAttributes> {
  public id!: number;
  public name!: string;
  public league!: string;
  public country!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;


  static associate(models:any){
    Team.hasMany(models.Players)
  }
}

Team.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    league: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    modelName:"Teams",
    sequelize: sequelize,
  }
);
return Team
}

