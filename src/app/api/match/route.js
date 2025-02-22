import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Query from "@/models/Query";
import Lawyer from "@/models/Lawyer";
import axios from "axios";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

export async function POST(req) {
    try {
        await dbConnect();
        const { userId, title, description } = await req.json();

        const query = await Query.create({ userId, title, description });

        const lawyers = await Lawyer.find();

        const lawyerProfiles = lawyers.map((lawyer) => ({
            name: lawyer.lawyerName,
            specialization: lawyer.specialization,
            experience: lawyer.experience,
        }));

        const response = await axios.post(
            "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateText",
            {
                prompt: `Match the following client query to the most relevant lawyers:\n\nClient Query:\nTitle: ${title}\nDescription: ${description}\n\nLawyers:\n${JSON.stringify(
                    lawyerProfiles
                )}`,
                maxTokens: 200,
            },
            { headers: { Authorization: `Bearer ${GEMINI_API_KEY}` } }
        );

        const aiMatchedLawyers = response.data.candidates[0].output.split("\n");

        const matchedLawyers = lawyers.filter((lawyer) =>
            aiMatchedLawyers.includes(lawyer.lawyerName)
        );

        return NextResponse.json(
            { message: "Matching successful", query, matchedLawyers },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
