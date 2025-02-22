import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const ServicesCard = ({service}) => {
    const {img,title,price,_id}=service;
    
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <Image src={img} width={300} height={300} alt='No Image' unoptimized />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}!</h2>
    
    <div className="card-actions items-center gap-7  text-orange-600">
        <h3 >price:{price} $</h3>
     <Link href={`services/${_id}`}> <button className="btn text-orange-600"><FaArrowRight /></button></Link>
    </div>
  </div>
</div>
    );
};

export default ServicesCard;