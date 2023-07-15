import mongoose, { Schema } from "mongoose";

const photographerSchema = new Schema({
  _id: Number,
  nombre: String,
  apellido: String,
});

const Photographers =
  mongoose.models.Photographers ||
  mongoose.model("Photographers", photographerSchema);

export default Photographers;
