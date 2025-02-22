import ServicesCard from '@/components/card/ServicesCard';
import { getServices } from '@/services/getServices';
import React from 'react';



const Services = async() => {
    const services=await getServices()  
     
    return (
        <div>
            <div className=' text-center'>
                <h3 className='text-xl text-orange-400 font-semibold'>service</h3>
                <h1 className='text-3xl font-bold'>Our Services Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='container mx-auto mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {
                 services?.length &&  services.map(service=><ServicesCard key={service._id} service={service}></ServicesCard>)
                }
                 
            </div>
        </div>
    );
};

export default Services;