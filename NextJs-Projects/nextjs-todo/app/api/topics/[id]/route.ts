import connectDB from "@/lib/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT(request: any, { params }: { params: any }) {
  const { id } = params;
  const { title, description } = await request.json();
  await connectDB();
  await Topic.findByIdAndUpdate(id, { title, description });
  return NextResponse.json(
    {
      message: "Todo updated",
    },
    { status: 200 }
  );
}

export async function GET(request: any, { params }: { params: any }) {
  const { id } = params;
  await connectDB();
  const topic = await Topic.findOne({ _id: id });
  return NextResponse.json(
    {
      topic,
    },
    {
      status: 200,
    }
  );
}
