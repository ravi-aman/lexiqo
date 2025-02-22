import { NextResponse } from "next/server";
import dbConnect from "@/lib/connectdb.js";
import User from "@/models/user.js";

export async function POST(req) {
  try {
    await dbConnect();
    const { name, email, password } = await req.json();
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }
    const user = new User({ name, email, password });
    await user.save();
    return NextResponse.json({ message: "User created", user }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
