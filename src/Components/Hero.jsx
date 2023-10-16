import React from 'react'
import { arrowRight } from "../assets/icons";
import Button from './Button'
import {statistics} from '../Constants/index.js'
import { bigShoe1,bigShoe2, bigShoe3 } from '../assets/images';
import { useState } from 'react';
function Hero() {
  const [Index, setIndex] = useState(bigShoe1);
  function handleclick (newimage){
    setIndex(newimage);
  }
  return (
    <section id='home' className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'>
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 pl-10'>
      <p className='text-xl font-montserrat text-coral-red'>Our Summer Collection</p>
      <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px]
      max-sm:leading-[2] font-bold'>
        <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
          The New Arrival
        </span>
        <br />
        <span className='text-coral-red inline-block mt-3'>Nike </span> Shoes
        
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>Discover stylish Nike arrivals, quality comfort,
          and innovation for your active life.
        </p>
        <Button label='Shop now' iconURL={arrowRight}/>
        <div className='flex justify-starts items-start flex-wrap w-full mt-20 gap-16'> 
          {statistics.map((stat,index)=>(
            <div>
              <p className='text-4xl font-bold font-planquin'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero'>
        <img src={Index} alt="" width={600} height={500} className='object-contain'/>

        <div className='flex sm:gap-6 gap-4 sm:left-[10%] max-sm:px-6 absolute -bottom-[9%]'>
        <div className='border-2 rounded-xl border-transparent cursor-pointer max-sm:flex-1' onClick={()=>handleclick(bigShoe1)}>
        <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4 '>
        <img src={bigShoe1} alt="" width={600} height={500} className='object-contain'/>
        </div>
      </div>

      <div className='border-2 rounded-xl cursor-pointer max-sm:flex-1' onClick={()=>handleclick(bigShoe2)}>
        <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4 '>
        <img src={bigShoe2} alt="" width={600} height={500} className='object-contain'/>
        </div>
      </div>

      <div className='border-2 rounded-xl border-transparent cursor-pointer max-sm:flex-1' onClick={()=>handleclick(bigShoe3)}>
        <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4 '>
        <img src={bigShoe3} alt="" width={600} height={500} className='object-contain'/>
        </div>
      </div>
        </div>
      </div>
      
      

    </section>
  )
}

export default Hero