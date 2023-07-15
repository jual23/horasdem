import mongoose, { Schema } from "mongoose";

const leagueSchema = new Schema({
  _id: Number,
  name: String,
  active: Boolean,
});

const Leagues =
  mongoose.models.Leagues || mongoose.model("Leagues", leagueSchema);

export default Leagues;
