import React from 'react';

const Banner = () => {
    return (
        <div className='container mx-auto'>
        <div className="carousel w-full rounded-lg">
            {
                banners.map((banner,index)=><div
                    key={index} 
                    style={{backgroundImage:`linear-gradient(45deg,rgba(7,25,82,0.7), rgba(0,0,0,0.3)),url(/assets/images/banner/${index+1}.jpg)`}
                }              
                    id={`slide${index+1}`} className="carousel-item relative w-full h-[90vh] bg-top bg-no-repeat bg-cover">
                       <div className='h-full w-full flex items-center pl-28 text-white'>
                       <div className='space-y-6'>
                       <h1 className='text-4xl'>{banner.title}</h1>
                       <p>{banner.description}</p>
                       <button className='btn btn-primary mr-4'>Discover more</button>
                       <button className='btn btn-outline btn-primary'>Latest project</button>
                       </div>
                       </div>
                         <div className="absolute left-5 right-5 bottom-4 flex -translate-y-1/2 transform justify-end gap-9">
                           <a href={banner.next} className="btn btn-outline btn-primary">❮</a>
                           <a href={banner.prev} className="btn btn-outline btn-primary">❯</a>
                         </div>
                       </div>)
            }
             </div>
      </div>
    );
};
const banners=[
    {
        title:"Affordable Price For Car Servicing",
        description:'There are many variations of passages of  available, but the majority have suffered alteration in some form',
        next:'#slide2',
        prev:'#slide4'
    },
    {
        title:"Affordable Price For Car Servicing",
        description:'There are many variations of passages of  available, but the majority have suffered alteration in some form',
        next:'#slide3',
        prev:'#slide1'
    },
    {
        title:"Affordable Price For Car Servicing",
        description:'There are many variations of passages of  available, but the majority have suffered alteration in some form',
        next:'#slide4',
        prev:'#slide2'
    },
    {
        title:"Affordable Price For Car Servicing",
        description:'There are many variations of passages of  available, but the majority have suffered alteration in some form',
        next:'#slide1',
        prev:'#slide3'
    }
]

export default Banner;