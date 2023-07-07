import mongoose, { Schema } from "mongoose";

const logSchema = new Schema(
  {
    fotografo: String,
    horas: Number,
    canchas: Number,
    liga: Number,
    compartida: Boolean,
  },
  { timestamps: true }
);

const Logging = mongoose.models.Logging || mongoose.model("Logging", logSchema);

export default Logging;
