import { NextResponse } from "next/server";
import connect from "../../../utils/db";
import Newpost from "@/models/Newposts";

export const GET = async (req) => {
  const url = new URL(req.url);

  const username = url.searchParams.get("username");

  try {
    await connect();

    const posts = await Newpost.find(username && { username });

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
export const POST = async (req, res) => {
  const { title, desc, img, content, username } = await req.json();
  await connect();
  const posts = await Newpost({
    title: title,
    desc: desc,
    img: img,
    content: content,
    username: username,
  });
  try {
    posts.save();
  } catch (error) {
    console.log(error)
  }
};
