import { connectDB } from "@/lib/connectDB"
import { ObjectId } from "mongodb"

export const DELETE=async (request,{params})=>{
   const db=await connectDB()
   const bookingCollection= await db.collection('booking')
   try{
     const res = await bookingCollection.deleteOne({_id:new ObjectId(params?.id)})
     return Response.json({message:'booking  deleted successfully',res})
   }
   catch(error){
    return Response.json({message:'something went wrong'},{status:400}, )
   }
}

export const PATCH=async (request,{params})=>{
  const db = await connectDB()
  const bookingCollection=await db.collection('booking')
  const {PhoneNo,Address,Date} = await request.json()
  try {
    const res=await bookingCollection.updateOne({_id:new ObjectId(params?.id)},
    {
      $set:{
        PhoneNo,Date,Address 
      }
    },
  {upsert: true})
    return Response.json({message:'updated successfully',res})
  } catch (error) {
    return Response.json({message:'something went wrong',error})
  }
}

export const GET=async(request,{params})=>{
  const db = await connectDB()
  const bookingCollection = await db.collection('booking')
  try {
    const res=await bookingCollection.findOne({_id:new ObjectId(params?.id)})
    return Response.json({message:'get one service',res})
  } catch (error) {
    return Response.json({message:'something went wrong',error})
  }
}