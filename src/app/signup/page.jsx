"use client"
import SocialSignIn from "@/components/Shared/socialSignIn/SocialSignIn";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const page = () => {
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const newUser={
          name:e.target.name.value,
          email:e.target.email.value,
          password:e.target.password.value,
        }
     
const resp= await fetch('http://localhost:3000/signup/api',{
  method:"POST",
  body:JSON.stringify(newUser),
  headers:{
    "content-type":"application/json"
  }
})
if(resp.status === 200){
  e.target.reset()
}
      
    }
  return (
    <div className="container grid lg:grid-cols-2 p-20 items-center gap-10">
      <div>
        <Image
          src="/assets/images/login/login.svg"
          width={540}
          height={540}
          alt="signup image"
        />
      </div>
      <div className="border-2 border-orange-400 p-7 grid gap-6 ">
        <div>
          <h5 className="text-3xl text-orange-400 font-semibold mb-12 text-center">
            Sign Up
          </h5>
        </div>
        <div>
        <form onSubmit={handleSubmit} className="grid gap-7">
        <label htmlFor="">name :</label>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="give your name"
              name="name"
            />
          </label>
          <label htmlFor="">Your email</label>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="email"
              className="grow"
              placeholder="enter your gmail address"
              name="email"
            />
          </label>
          <label htmlFor="">Password</label>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="password"
              className="grow"
              placeholder="give your password"
              name="password"
            />
          </label>
          <button className="btn btn-outline btn-primary">sign up</button>
        </form>
        </div>
        <div className="grid gap-6 place-items-center">
            <h3>or sign up with</h3>
            <div >
            <SocialSignIn/>
            </div>
            <div>
                <p>already have an account <Link href='/signin'><span className="text-xl font-semibold text-orange-400 btn btn-link">sign in </span></Link> </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default page;
