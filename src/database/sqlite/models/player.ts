"use strict";
import { PlayerAttributes } from "../../../player/player.interface";
import { Model } from "sequelize";


module.exports = (sequelize:any,DataTypes:any)=>{
class Player
  extends Model<PlayerAttributes>
  implements PlayerAttributes
{
  public id!: number;
  public name!: string;
  public age!: number;
  public squad_number!: number;
  public position!: "Ataque" | "Medio" | "Defensa" | "Volante";
  public nationality!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
  
  static associate(models:any){
    this.belongsTo(models.Teams)
  }
}

Player.init(
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
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    squad_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    position: {
      type: DataTypes.ENUM("Ataque", "Defensa", "Volante", "Medio"),
      allowNull: false,
    },
    nationality: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    modelName: "Players",
    sequelize: sequelize,
  }
);
  return Player
}

