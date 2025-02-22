import { connectDB } from "@/lib/connectDB"
 
export const GET= async (request, {params})=>{
    const db = await connectDB()
    const BookingCollection=db.collection('booking')
    if(!db){
       return ;
    } 
    try {
        const myBookings=await BookingCollection.find({Email:params.email}).toArray() ;
        return Response.json(myBookings)  
     } catch (error) {
          console.log(error)
     }
}
