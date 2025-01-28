import { signIn } from "next-auth/react";
import React from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const SocialSignIn = () => {
    const handleSocialSignIn=async(provider)=>{
         const resp=await signIn(provider)
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
