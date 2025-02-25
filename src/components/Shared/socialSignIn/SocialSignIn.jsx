"use client"
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const SocialSignIn = () => {
  const router=useRouter()
  const {status}=useSession()
  const searchParams=useSearchParams()
  const path=searchParams.get('redirect')

  useEffect(()=>{
    if(status ==='authenticated'){
      router.push('/')
     }
  },[router, status])
  // console.log(status)
    const handleSocialSignIn=async(provider)=>{
         const resp=await signIn(provider,{redirect:true,callbackUrl:path?path:'/'})
    }
  return (
    <div className="flex items-center justify-center space-x-3">
      <div onClick={()=>handleSocialSignIn('google')} className="btn rounded-full">
        <FaGoogle className="text-green-500 text-2xl " />
      </div>
      <div onClick={()=>handleSocialSignIn('github')} className="btn rounded-full">
        <FaGithub className="text-2xl" />
      </div>
      <div onClick={()=>handleSocialSignIn('facebook')} className="btn rounded-full">
        <FaFacebook className="text-2xl" />
      </div>
    </div>
  );
};

export default SocialSignIn;
