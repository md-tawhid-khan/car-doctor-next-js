"use client"
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const page = () => {
    const session = useSession()
    const [booking, setBooking]= useState([])
    const loadData=async ()=>{
        const resp = await fetch (`http://localhost:3000/my-booking/api/${session?.data?.user?.email}`)
        const data = await resp.json()
        // console.log(data)
        setBooking(data)
    }
    
    const handleDeleteBooking=async(id)=>{
      const deleted= await fetch(`http://localhost:3000/my-booking/api/booking/${id}`,{
        method:'DELETE'
      })
      const resp=await deleted.json() 
     
      // console.log(resp)
      if(resp?.res?.deletedCount>0){
        toast.success('deleted successfully')
        loadData()
      }
    
    }
    

    useEffect(()=>{
        loadData()
    },[session])
    return (
        <div className='container mx-auto flex flex-col space-y-11 my-10'>
            <div className='h-72 '>
                <Image className='h-72  object-cover' src={'/assets/images/banner/5.jpg'} width={1920} height={1080} alt='No Image' />
            </div>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th>action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
{
       booking.map(({title,price,Date,_id},index)=>  <tr key={index}>
        <th>{index + 1}</th>
        <td>{title}</td>
        <td>{Date}</td>
        <td>{price} <span className='text-orange-400 text-2xl'>$</span> </td>
        <td>
            <div className='flex space-x-5'>
            <Link href={`my-booking/update/${_id}`} className='btn btn-accent'>edit</Link >
            <button onClick={()=>handleDeleteBooking(_id)} className='btn btn-error'>delete</button>
            <ToastContainer />
            </div>
            </td>
      </tr>)
}       
    </tbody>
  </table>
</div>
        </div>
    );
};

export default page;
