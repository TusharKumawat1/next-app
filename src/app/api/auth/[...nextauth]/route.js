import User from "@/models/User";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from 'bcrypt'
import connect from "@/utils/db";
const handler=NextAuth({
  providers: [
    GoogleProvider({
      clientId: "71751331676-h1s9s6efn47e7ujl504gi0eg096ghcrc.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    CredentialsProvider({
      id:"credentials",
      name:"Credentials",
      async authorize(credentials){
       await connect();
        try {
          const user=await User.findOne({email:credentials.email})
          if(user){
            const isPassCorrect= await bcrypt.compare(credentials.password,user.password)
            if(isPassCorrect){
                return user
            } else{
              throw new Error("Incroccet Credentials")
              
            }           
          }else{
            throw new Error("user not found")
          }
        } catch (error) {
          console.log(error)
          
        }
      }
    })
  ],
  pages:{
    error:"/dashboard/login"

  }
  
})
export {handler as GET, handler as POST};