import { NextResponse } from "next/server";
// import dbConnect from "@/lib/connectdb.js";
// import Query from "@/models/Query";
import dbConnect from "lib/connectdb";
import Query from "models/Query";

export async function POST(req) {
  try {
    console.log("Connecting to database...");
    await dbConnect(); // Ensure DB connection

    const { userId, title, description } = await req.json();
    console.log("Received data:", { userId, title, description });

    // Validate input fields
    if (!userId || !title || !description) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Create and save the new query
    const query = new Query({ userId, title, description });
    await query.save();
    
    console.log("Query saved successfully:", query);
    return NextResponse.json({ message: "Query created", query }, { status: 201 });

  } catch (error) {
    console.error("Error in API:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
