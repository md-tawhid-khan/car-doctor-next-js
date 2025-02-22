import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";

const handler= NextAuth({
    secret:process.env.NEXT_PUBLIC_AUTH_SECRET ,
    session:{
         strategy:'jwt',
         maxAge:360*24*60*60
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
        }),

        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
          }),
          GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
          }),
          FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET
          })
     ],
     callbacks:{
        async signIn({ user, account, }) {
           if(account.provider === 'google' || account.provider === 'github' || account.provider === 'facebook'){
            return true
           }
           return true
          },
     },
     pages:{
       signIn:'/signin'
     },
})
export { handler as GET, handler as POST }