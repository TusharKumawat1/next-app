import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Newpost from "@/models/Newposts";

export const GET = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    const post = await Newpost.findById(id);

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    const post = await Newpost.findByIdAndDelete(id)

    return new NextResponse("deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
