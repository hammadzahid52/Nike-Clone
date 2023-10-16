import React from 'react'
import { products } from '../Constants'
import { star } from '../assets/icons'
function Popularproducts() {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
        <div className='flex flex-col justify-start gap-5'>
            <h2 className='text-4xl font-palanquin font-bold'>Our <span className='text-coral-red'>Popular</span> Products</h2>
            <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray '>Experience Top-Notch quality and style with our 
                sought-after selections. Discover a world of comfort, design 
                and value.
            </p>
        </div>
        <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14 max-sm'>
                {products.map((product)=>(
                    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
                        <img src={product.imgURL} alt="" className='w-[280px] h-[280px]' />
                        <div className='mt-8 flex justify-start gap-2.5'>
                            <img src={star} alt="Rating" width={24} height={24} />
                            <p className='font-montserrat text-xl leading-normal text-slate-gray'>
                                (4.5)
                            </p>
                        </div>
                        <h3 className='mt-2 text-2xl leading-normal font-semibold font-planquin'>{product.name}</h3>
                        <p className='mt-2 leading-normal font-semibold font-montserrat text-coral-red'>{product.price}</p>
                    </div>
                ))}
        </div>
    </section>
  )
}

export default Popularproducts