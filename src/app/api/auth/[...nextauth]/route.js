import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

const handler= NextAuth({
    session:{
         strategy:'jwt',
         maxAge:30*24*60*60
    },
    providers:[
        CredentialsProvider({
            credentials:{
                email:{},
                password:{}
            },
            async authorize(credentials, ){
                const {email, password}=credentials
                if(!email || !password){
                    return null
                }
                const db = await connectDB()
                const currentUser=await db.collection('users').findOne({email})
                if(!currentUser){
                    return null
                }
                const passwordMatch=bcrypt.compareSync(password, currentUser.password); 

                if(!passwordMatch){
                    return null
                }
                return currentUser
            }
        })
     ],
     callbacks:{},
     pages:{
       signIn:'/signin'
     },
})
export { handler as GET, handler as POST }