"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";

const page = ({ params }) => {
  const session = useSession();
  const user = session?.data?.user;
  const [bookingData, setBookingData] = useState([]);
  const router=useRouter()

  if (!params || !params?.id) {
    return (
      <div>
        <h1>some thing went wrong</h1>
      </div>
    );
  }

  const loadData = async (params) => {
    try {
      const myOrder = await fetch(
        `http://localhost:3000/my-booking/api/booking/${params?.id}`
      );
      const data = await myOrder.json();
      setBookingData(data.res);
    } catch (error) {
      console.log({ error });
    }
  };

  const updateOrder = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updateInformation = {
      Address: form.address.value,
      PhoneNo: form.phone.value,
      Date:form.date.value,
    };
    // console.log({updateInformation})
    try {
      const updateData = await fetch(
        `http://localhost:3000/my-booking/api/booking/${params?.id}`,
        {
          method: "PATCH",
          body: JSON.stringify(updateInformation),
          headers: {
            "content-type": "application/json",
          },
        }
      );
      if(updateData.status===200){
        router.push('http://localhost:3000/my-booking')
      }
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    loadData(params);
  }, [params]);

  return (
    <div className="container mx-auto ">
      <div className="relative h-72 ">
        <Image
          className="absolute left-0 top-0 w-full h-72 object-cover"
          src={"/assets/images/banner/5.jpg"}
          width={1920}
          height={1080}
          alt="Service Image"
          unoptimized
        />

        <div className="absolute left-0 top-0 flex items-center justify-center">
          <h1 className="flex items-center justify-center text-3xl font-bold text-white">
            Update Order
          </h1>
        </div>
      </div>

      <div className="my-12 bg-gray-200 p-16 mx-auto ">
        <form onSubmit={updateOrder} className="grid gap-3">
          <div className="flex  items-center gap-7">
            <label className="form-control w-full max-w-xs">
              <span className="label-text">Name</span>
              <input
                className="font-light p-2 rounded-lg w-full"
                defaultValue={user?.name}
                readOnly
                type="text"
                name="name"
                placeholder="Your name"
              />
            </label>

            <label className="form-control w-full max-w-xs">
              <span className="label-text">date</span>
              <input
                className="font-light p-2 rounded-lg w-full"
                type="text"
                
                defaultValue={bookingData?.Date}
                name="date"
                placeholder="First Name"
              />
            </label>
          </div>

          <div className="flex items-center gap-7">
            <label className="form-control w-full max-w-xs">
              <span className="label-text">Email</span>
              <input
                className="font-light p-2 rounded-lg w-full"
                type="email"
                readOnly
                defaultValue={user?.email}
                name="email"
                placeholder="First Name"
              />
            </label>

            <label className="form-control w-full max-w-xs">
              <span className="label-text">Due amount</span>
              <input
                className="font-light p-2 rounded-lg w-full"
                type="number"
                readOnly
                defaultValue={bookingData?.price}
                name="amount"
                placeholder="First Name"
              />
            </label>
          </div>

          <div className="flex  items-center gap-7 ">
            <label className="form-control w-full max-w-xs">
              <span className="label-text">Phone</span>
              <input
                className="font-light p-2 rounded-lg w-full"
                type="tel"
                name="phone"
                defaultValue={bookingData?.PhoneNo}
                placeholder="Your Phone Number"
              />
            </label>

            <label className="form-control w-full max-w-xs">
              <span className="label-text">Present Address</span>
              <input
                className="font-light p-2 rounded-lg w-full"
                type="text"
                defaultValue={bookingData?.Address}
                name="address"
                placeholder="First Name"
              />
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="btn btn-primary bg-orange-500 hover:bg-orange-700 text-white"
            >
              Order Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
