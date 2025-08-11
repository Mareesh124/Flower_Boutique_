
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center bg-gray-800 px-5 py-3 text-white'>
        <Image src ="/flower.jpg" alt="Ice Cream" width={100} height={100} className='rounded-full' />
        <div className='flex flex-col pr-24'>
        <Link href="/"><h1 className='text-3xl font-bold'>Hema's </h1>
        <h1 className='text-3xl font-bold'>Boutique</h1> </Link>
        </div>
        <div className='flex space-x-20 pr-88 '>
        <Link href="/" className='text-xl font-bold uppercase hover:text-cyan-500'>Home</Link>
        <Link href="/demo" className='text-xl font-bold uppercase hover:text-cyan-500'>Service</Link>
        <Link href="/help" className='text-xl font-bold uppercase hover:text-cyan-500'>Help</Link>

        </div>
        <button className='bg-blue-500 text-white rounded-xl px-5 py-4 hover:bg-violet-800'>Sign in</button>
    </div>
  ) 
}

export default Header