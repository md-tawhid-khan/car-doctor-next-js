"use client"
import { getServiceDetails, } from '@/services/getServices';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { use, useEffect, useState } from 'react';

const checkout= ({params}) => {
    const [service, setService]= useState({})
    const {data}=useSession()
    const { id } = use(params);

    const loadService=async()=>{
        if (!id) return;
    const details = await getServiceDetails(id)
    setService(details)
    }  
   
    useEffect(()=>{
     loadService()
    },[params])

 
    const {img,title,price,service_id,description,facility}=service ;
    const handleBooking=async (e)=>{
        e.preventDefault()
        
        const form=e.target ;
       
        const newBooking={
            Name:form.name.value,
            Date:form.date.value,
            Email:form.email.value,
            PhoneNo:form.phone.value,
            Address:form.address.value,
            Amount:form.amount.value,
            img,title,price,service_id,description,facility
        }
        const resp=await fetch('http://localhost:3000/checkout/api/new-booking',{
            method:'POST',
            body:JSON.stringify(newBooking),
            headers:{
                 "content-type":"application/json"
            }
        })
        console.log(resp)
    
    }
    
    return (
        <div className='container mx-auto '>
           <div className='relative h-72 '>
           {service?.img ? (
  <Image
    className="absolute left-0 top-0 w-full h-72 object-cover"
    src={img || null} 
    width={1920}
    height={1080}
    alt="Service Image"
    unoptimized
  />
) : (
  <div className="absolute left-0 top-0 flex items-center justify-center bg-gray-300 h-72">
    <h1 className="text-3xl font-bold text-white">No Image Available</h1>
  </div>
)}
            <div className='absolute left-0 top-0 flex items-center justify-center'>
                <h1 className='flex items-center justify-center text-3xl font-bold text-white'>Check Out </h1>
            </div>
           </div>

           <div className='my-12 bg-gray-200 p-16 mx-auto '>
            <form onSubmit={handleBooking} className='grid gap-3'>

                <div className='flex  items-center gap-7'>
                
                <label className="form-control w-full max-w-xs">
                    <span className='label-text'>Name</span>
                <input defaultValue={data?.user?.name} className='font-light p-2 rounded-lg w-full' type="text" name="name" placeholder='Your name' />
                </label>

                <label className="form-control w-full max-w-xs">
                    <span className='label-text'>date</span>
                <input className='font-light p-2 rounded-lg w-full' type="text" readOnly defaultValue={new Date().toLocaleDateString()} name="date"  placeholder='First Name' />
                </label>              
                </div>

                <div className='flex items-center gap-7'>

                <label className="form-control w-full max-w-xs">
                    <span className='label-text'>Email</span>
                <input className='font-light p-2 rounded-lg w-full' type="email" defaultValue={data?.user?.email} name="email"  placeholder='First Name' />
                </label>

                <label className="form-control w-full max-w-xs">
                    <span className='label-text'>Due amount</span>
                <input className='font-light p-2 rounded-lg w-full' type="number" readOnly defaultValue={price} name="amount" placeholder='First Name' />
                </label>

                </div>

                <div className='flex  items-center gap-7 '>

                <label className="form-control w-full max-w-xs">
                    <span className='label-text'>Phone</span>
                <input className='font-light p-2 rounded-lg w-full' type="tel" name="phone"  placeholder='Your Phone Number' />
                </label>

                <label className="form-control w-full max-w-xs">
                    <span className='label-text'>Present Address</span>
                <input className='font-light p-2 rounded-lg w-full' type="text" name="address"  placeholder='First Name' />
                </label>

                </div>
               
               <div>
                <button type='submit' className='btn btn-primary bg-orange-500 hover:bg-orange-700 text-white'>Order Confirm </button>
               </div>
            </form>
           </div>
       </div>
    );
};

export default checkout;