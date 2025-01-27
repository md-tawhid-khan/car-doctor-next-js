import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
    return (
        <div >
          <div className=' container grid grid-cols-1  lg:grid-cols-2'>
            <div>
                <div className='relative h-[350]'>
                    <div>
                    <Image src='/assets/images/about_us/person.jpg' width={460} height={473} alt='No Image'/>
                    </div>
                    <div className='absolute bottom-2 right-14  border-[10px] border-white '>
                    <Image src='/assets/images/about_us/parts.jpg' width={327} height={332} alt='No Image' />
                    </div>
                </div>
            </div>
            <div className='space-y-4'>
                <h3 className='text-xl text-orange-400'>About Us</h3>
                <h1 className='text-3xl font-semibold'>We are qualified & <br /> of experience in this field</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <button className='btn btn-outline btn-primary'>Get More Info</button>
                </div>
          </div>
        </div>
    );
};

export default AboutUs;