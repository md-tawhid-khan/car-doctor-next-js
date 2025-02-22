"use client"
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const page = () => {
    const session = useSession()
    const [booking, setBooking]= useState([])
    const loadData=async()=>{
        const resp = await fetch (`http://localhost:3000/my-booking/api/${session?.data?.user?.email}`)
        const data = await resp.json()
        console.log(data)
        setBooking(data)
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
       booking.map(({title,price,Date},index)=>  <tr key={index}>
        <th>{index + 1}</th>
        <td>{title}</td>
        <td>{Date}</td>
        <td>{price} <span className='text-orange-400 text-2xl'>$</span> </td>
        <td>
            <div className='flex space-x-5'>
            <button className='btn btn-accent'>edit</button>
            <button className='btn btn-error'>delete</button>
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
