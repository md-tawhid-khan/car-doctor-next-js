import { connectDB } from "@/lib/connectDB"

export const POST=async(request)=>{
    const booking=await request.json() 
    const db = await connectDB()
    const bookingCollection=db.collection("booking")
    try{
         const newBooking= bookingCollection.insertOne(booking)
        return Response.json({message:"booked successfully"},{status:200})
    }
    catch(error){
        console.log({message:"something went wrong"},{status:400})
    }
}