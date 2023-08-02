import User from "@/models/User"
import connect from "@/utils/db"
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';
export const POST=async(req,res)=>{
    const saltRounds = 10;
    const{data}= await req.json()
    const hashPass=await bcrypt.hash(data.password,saltRounds)
    await connect();   
    const user=await User({name:data.name,email:data.email,password:hashPass})
    try {
       await user.save();
       return new NextResponse("user has been created",{status:201})
        
    } catch (error) {
        console.log(error)
        return new NextResponse(error,{status:500})
    }
}