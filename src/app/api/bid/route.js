import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Query from "@/models/Query";

export async function POST(req) {
    try {
        await dbConnect();
        const { queryId, lawyerId, price } = await req.json();

        const updatedQuery = await Query.findByIdAndUpdate(
            queryId,
            { $push: { bids: { lawyerId, price } } },
            { new: true }
        );

        return NextResponse.json(
            { message: "Bid submitted successfully", updatedQuery },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
