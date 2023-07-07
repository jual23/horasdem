import { NextResponse } from "next/server";
import connectDB from "../../../../libs/mongodb";
import Logging from "../../../../models/logging";

export async function POST(request) {
  const { fotografo, horas, canchas, liga, compartida } = await request.json();
  await connectDB();
  await Logging.create({ fotografo, horas, canchas, liga, compartida });
  return NextResponse.json({ message: "Registrado" }, { status: 201 });
}
