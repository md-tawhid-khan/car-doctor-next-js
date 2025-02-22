import { getServiceDetails } from "@/services/getServices";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { PiSimCardDuotone } from "react-icons/pi";

const page = async ({ params }) => {
  if (!params || !params.id) {
    console.error("Params or ID is missing");
    return <div>Error: Service ID not found</div>;
  }
  const details = await getServiceDetails(params?.id);
  const { img, title, description, price, facility, _id } = details;
  return (
    <div className="mx-auto p-3">
      <div className="relative h-72">
        <Image
          className="absolute h-72 left-0 top-0 object-cover"
          src={img}
          width={1920}
          height={1080}
          alt="services"
          unoptimized
        />
        <div className="absolute h-full left-0 top-0 flex items-center justify-center z-10 ">
          <h1 className="text-white text-3xl font-bold flex items-center justify-center pl-11  ">
            {title}
          </h1>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-3">
        <div className="col-span-2">
          <Image
            className="col-span-2 h-72"
            src="/assets/images/banner/3.jpg"
            width={1920}
            height={1080}
            alt="no image"
            unoptimized
          />

          <div className="my-6 grid gap-4">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p>{description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {
               facility.map((item,index)=><div className="bg-gray-200 border-t-2 border-orange-400  rounded-lg p-5" key={index}>
                <h1>{item.name}</h1>
                <p>{item.details}</p>
               </div>) 
            }
          </div>
          <div className="my-6 grid gap-4">
            <p>{description}</p>
            <h1 className="text-3xl font-bold ">3 Simple Steps to Process</h1>
            <p>{description}</p>
            <div className="flex gap-3">
                <div className="border-2 flex flex-col items-center justify-center p-2 gap-2"> 
                <h1 className="bg-orange-400 w-12 rounded-full text-white flex items-center justify-center p-2">01</h1>
                    <h1>step one</h1>
                    <p>It uses a dictionary of over 200 .</p>
                </div>
                <div className="border-2 flex flex-col items-center justify-center p-2 gap-2"> 
                <h1 className="bg-orange-400 w-12 rounded-full text-white flex items-center justify-center p-2">02</h1>
                    <h1>step one</h1>
                    <p>It uses a dictionary of over 200 .</p>
                </div>
                <div className="border-2 flex flex-col items-center justify-center p-2 gap-2"> 
                <h1 className="bg-orange-400 w-12 rounded-full text-white flex items-center justify-center p-2">03</h1>
                    <h1>step one</h1>
                    <p>It uses a dictionary of over 200 .</p>
                </div>
            </div>
          </div>
          
          <div>
            <Image src='/assets/images/Group 38701.png' width={1920} height={1080} alt="no image"/>
          </div>

        </div>

        {/* other side function */}
        <div className=" col-span-1 flex flex-col gap-6">
          <div className="p-7 grid gap-2 bg-gray-200">
            <h1>Services</h1>
            <h1 className=" flex justify-between items-center bg-white hover:bg-orange-400 rounded-lg px-4 py-2 ">
              <span>Full car repair</span>{" "}
              <span>
                <FaArrowRight />
              </span>
            </h1>
            <h1 className=" flex justify-between items-center bg-white hover:bg-orange-400 rounded-lg px-4 py-2 ">
              <span>Engine Repair</span>{" "}
              <span>
                <FaArrowRight />
              </span>
            </h1>
            <h1 className=" flex justify-between items-center bg-white hover:bg-orange-400 rounded-lg px-4 py-2 ">
              <span>Automatic Services</span>{" "}
              <span>
                <FaArrowRight />
              </span>
            </h1>
            <h1 className=" flex justify-between items-center bg-white hover:bg-orange-400 rounded-lg px-4 py-2 ">
              <span>Engine Oil Change</span>{" "}
              <span>
                <FaArrowRight />
              </span>
            </h1>
            <h1 className=" flex justify-between items-center bg-white hover:bg-orange-400 rounded-lg px-4 py-2 ">
              <span>Battery Charge</span>{" "}
              <span>
                <FaArrowRight />
              </span>
            </h1>
          </div>

          <div className=" grid gap-2 bg-black text-white p-7 rounded-lg">
            <h1 className="text-3xl">Download</h1>
            <div className="flex justify-between items-center ">
                <div className="flex gap-4 items-center justify-center">
                <h1 className="text-3xl"><PiSimCardDuotone /></h1>
                <h1 className="flex flex-col gap-1"><span>Our Brochure</span> <span>Download</span></h1>
                </div>
                <h1 className="bg-orange-400 text-white text-3xl p-3 rounded-lg"><FaArrowRight /></h1>
            </div>
            <div className="flex justify-between items-center ">
                <div className="flex gap-4 items-center justify-center">
                <h1 className="text-3xl"><PiSimCardDuotone /></h1>
                <h1 className="flex flex-col gap-1"><span>Our Brochure</span> <span>Download</span></h1>
                </div>
                <h1 className="bg-orange-400 text-white text-3xl p-3 rounded-lg"><FaArrowRight /></h1>
            </div>
          </div>

         <div className="bg-black text-white flex flex-col gap-4 items-center justify-center p-12 rounded-lg ">
            <Image src='/assets/logo.svg' width={90} height={90} alt='No Image'/>
            <h1>Help Need ? We Are Here <br /> To Help You</h1>
            <div className="bg-white text-black p-7 relative">
              <h1><span className="text-orange-500"> Car Doctor</span> Special </h1>
              <p>save up to <span className="text-orange-500">60% off</span></p>
              <h1 className="bg-red-500 p-3 absolute bottom-[-26] left-7">Get A Quote</h1>
            </div>
            </div>   

            <div>
              <h1 className="text-3xl font-bold" >Price $ {price}</h1>
            </div>

            <div className="flex items-center justify-center">
              <Link href={`/checkout/${_id}`} className="btn btn-block bg-orange-500">proceed checkout</Link>
            </div>
        </div>


      </div>

     
    </div>
  );
};

export default page;
