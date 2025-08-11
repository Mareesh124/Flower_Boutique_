import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='w-screen h-screen'>
      <div className='pl-120 pt-4'>
      <h1 className='text-5xl text-amber-500'>Service Page</h1>
      <p className='text-xl mt-1'>Explore our services and offerings.</p>
      </div>
      <div className='grid grid-cols-3 gap-4 p-4 m-10 rounded-lg  '>
        <div className=' p-4 bg-blue-50 border border-gray-300 shadow-lg rounded-2xl h-96 hover:position relative hover:-mt-3 transition-transform duration-5000 ease-in-out'>
          <Image src ="/dery.jpg" alt="Service 1" width={200} height={200} className='rounded-lg ml-15' />
          <h2 className='text-2xl font-bold mt-4 text-center'>Free Delivery</h2>
          <p className='text-center mt-2'>Enjoy free delivery on all orders above $50.</p>
          <Link href="/demo" className='text-center text-blue-500 hover:underline mt-2 block'>Learn More</Link>
          <p className='text-center ml-32 text-sm mt-7 '>*Terms and conditions apply.</p>
        </div>
        <div className=' p-4 bg-blue-50 border border-gray-300 shadow-lg rounded-2xl hover:position relative hover:scale-y-105 transition-transform duration-300'>
          <Image src ="/shipping.jpg" alt="Service 2" width={200} height={600} className='rounded-lg ml-15  ' /> 
          <h2 className='text-2xl font-bold mt-22 text-center'>Express Shipping</h2>
          <p className='text-center mt-2'>Get your orders delivered faster with our express shipping options.</p>
          <Link href="/demo" className='text-center text-blue-500 hover:underline mt-2 block'>Learn More</Link>
          <p className='text-center mt-3.5 ml-32 text-sm'>*Terms and conditions apply.</p>
        </div>
        <div className=' p-4 bg-blue-50 border border-gray-300 shadow-lg rounded-2xl hover:position relative hover:scale-y-105 transition-transform duration-300'>
          <Image src ="/supprt.jpg" alt="Service 3" width={200} height={500} className='rounded-lg ml-15' />
          <h2 className='text-2xl font-bold mt-22 text-center'>24/7 Customer Support</h2>
          <p className='text-center mt-2'>We're here to help you 24/7 with any questions or concerns.</p>
          <Link href="/demo" className='text-center text-blue-500 hover:underline mt-2 block'>Learn More</Link>
          <p className='text-center mt-3.5 ml-32 text-sm'>*Terms and conditions apply.</p>
        </div>
      </div>
      </div>
    
  )
}

export default page