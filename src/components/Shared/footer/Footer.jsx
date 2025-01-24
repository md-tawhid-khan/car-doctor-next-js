import Image from 'next/image';
import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
    return (
        <footer className="footer bg-base-200 text-base-content p-10">
  <aside>
    <Image src='/assets/logo.svg' width={90} height={90} alt='No Image'/>
    <p>
    Edwin Diaz is a software and web <br /> technologies engineer,
     a life coach <br /> trainer who is also a serial .    
    </p>

    <div className='flex gap-4'>
        <a > <FaGoogle /></a>
        <a > <BsTwitterX /></a>
        <a > <FaInstagram /></a>
        <a > <CiLinkedin /></a>   
    </div>
  </aside>
  <nav>
    <h6 className="footer-title">About</h6>
    <a className="link link-hover">Home</a>
    <a className="link link-hover">Service</a>
    <a className="link link-hover">Contact</a>   
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">Why Car Doctor</a>
    <a className="link link-hover">About </a>   
  </nav>
  <nav>
    <h6 className="footer-title">Support</h6>
    <a className="link link-hover">Support Center</a>
    <a className="link link-hover">Feedback</a>
    <a className="link link-hover">Accesbility</a>
  </nav>
</footer>
    );
};

export default Footer;