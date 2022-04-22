import mongoose from "mongoose";
export interface Hero {
  name: string;
  _id: number;
  description: string;
  image: string;
}
export interface MHero extends mongoose.Document {
  name: string;
  _id: number;
  description: string;
  image: string;
}
