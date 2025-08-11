import Image from 'next/image'
import React from 'react'

const Cust = () => {
  return (
    <div className='w-screen h-screen bg-gray-50 p-10'>
        <h1 className='text-3xl font-bold text-center'>Our Customers' Happy Moments</h1>
        <p className='text-center'>We value our customers and strive to provide the best service possible.</p>
        <p className='text-center'> Your satisfaction is our priority! </p>
        <div className='grid grid-cols-3 gap-4 mt-10'>
          <div className='border  p-4'>
            <Image src = "/fr1.jpg" alt="Flower 1" width={300} height={500} className='w-full h-full object-cover' />
          </div>
          <div className='border p-4'>
            <Image src = "/fr2.jpg" alt="Flower 2" width={300} height={200} className='w-full h-full object-cover' />
          </div>
          <div className='border p-4'>
            <Image src = "/fr3.jpg" alt="Flower 3" width={300} height={200} className='w-full h-full object-cover' />
          </div>
        </div>
    </div>
  )
}

export default Cust