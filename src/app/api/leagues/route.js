import { NextResponse } from "next/server";
import connectDB from "../../../../libs/mongodb";
import Leagues from "../../../../models/leagues";

export async function GET(request) {
  await connectDB();
  const leagues = await Leagues.find({ active: true });
  return NextResponse.json({ leagues });
}
