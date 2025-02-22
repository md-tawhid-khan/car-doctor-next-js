"use client"
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";

const Navbar = () => {
    const pathName=usePathname();
    const session=useSession()
    // console.log(session)
  
    const links=[
        {title:'Home', path:'/'},
        {title:'About', path:'/about'},
        {title:'Services', path:'/services'},
        {title:'my-booking', path:'/my-booking'},
        {title:'Blogs', path:'/blogs'},
        {title:'Contact', path:'/contact'}
    ]

    return (
        <div className="navbar bg-base-100 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {
            links.map(link=><li key={link.path} ><Link href={link.path} className={`${pathName===link.path ? 'text-orange-400': ''}`}>{link.title}</Link>
             </li>)
        }
      </ul>
    </div>
    <a href='/'><Image src="/assets/logo.svg" width={90} height={90} alt='No Image' className="btn btn-ghost text-xl"/>
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {
            links.map(link=><li key={link.path} ><Link  href={link.path} className={`${pathName===link.path ? 'text-orange-400': ''} font-semibold hover:text-orange-400 duration-300`}>{link.title}</Link>
             </li>)
        }
    </ul>
  </div>
  <div className="navbar-end gap-4">
    <Link href='/'><MdOutlineShoppingBag className='text-xl' /></Link>
    <Link href='/'><CiSearch className='text-xl' /></Link>
    <a className="btn btn-outline btn-primary text-orange-400 border-orange-400">appoinment</a>
   { 
   session?.status === 'loading' && <h5>loading .......</h5>     
    }
    {
    session?.status === 'unauthenticated' &&  <Link href='/signin'><button className='btn btn-outline btn-primary'>Sign in </button></Link> 
    }
    {
    session?.status === 'authenticated' && <button className='btn btn-outline btn-primary' onClick={()=>signOut()} > log out</button>
     }
  </div>
</div>
    );
};

export default Navbar;