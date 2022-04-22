import { Optional } from "sequelize";


export interface PlayerAttributes{
    id:number,
    name:string,
    age:number,
    squad_number:number,
    position: 'Ataque' | 'Medio' | 'Defensa' | 'Volante',
    nacionality: string
}
