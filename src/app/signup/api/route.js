import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";
export const POST =async(request)=>{
    const newUser=await request.json() ;
    try {
      const db=await connectDB()
      const userCollection=db.collection('users')
      const exists=await userCollection.findOne({email:newUser.email})     
      if(exists){
        return  Response.json({message:'users exists'},{status:304})
      }
      const hashPassword = bcrypt.hashSync(newUser.password, 12);
      const resp=await userCollection.insertOne({...newUser,password:hashPassword}) 
      return  Response.json({message:'user created'}, {status:200}) 
    } catch (error) {
        return Response.json({message:'something went wrong'}, {status:500})
    }
}