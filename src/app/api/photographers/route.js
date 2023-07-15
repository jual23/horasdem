import { NextResponse } from "next/server";
import connectDB from "../../../../libs/mongodb";
import Photographers from "../../../../models/photographers";

export async function GET() {
  await connectDB();
  const photographers = await Photographers.find();
  console.log(photographers);
  return NextResponse.json({ photographers });
}
