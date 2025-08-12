import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="w-full min-h-screen">
      {/* Heading Section */}
      <div className="px-6 pt-4 md:pl-32">
        <h1 className="text-4xl text-center md:text-5xl text-amber-500">Service Page</h1>
        <p className="text-lg text-center md:text-xl mt-1">Explore our services and offerings.</p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 md:p-10">
        {/* Card 1 */}
        <div className="p-4 bg-blue-50 border border-gray-300 shadow-lg rounded-2xl hover:-mt-2 transition-transform duration-300">
          <Image src="/dery.jpg" alt="Service 1" width={200} height={200} className="rounded-lg mx-auto" />
          <h2 className="text-2xl font-bold mt-4 text-center">Free Delivery</h2>
          <p className="text-center mt-2">Enjoy free delivery on all orders above $50.</p>
          <Link href="/demo" className="text-center text-blue-500 hover:underline mt-2 block">
            Learn More
          </Link>
          <p className="text-center text-sm mt-4">*Terms and conditions apply.</p>
        </div>

        {/* Card 2 */}
        <div className="p-4 bg-blue-50 border border-gray-300 shadow-lg rounded-2xl hover:-mt-2 transition-all duration-300">
          <Image src="/shipping.jpg" alt="Service 2" width={200} height={200} className="rounded-lg mx-auto" />
          <h2 className="text-2xl font-bold mt-4 text-center">Express Shipping</h2>
          <p className="text-center mt-2">Get your orders delivered faster with our express shipping options.</p>
          <Link href="/demo" className="text-center text-blue-500 hover:underline mt-2 block">
            Learn More
          </Link>
          <p className="text-center text-sm mt-4">*Terms and conditions apply.</p>
        </div>

        {/* Card 3 */}
        <div className="p-4 bg-blue-50 border border-gray-300 shadow-lg rounded-2xl hover:-mt-2 transition-all duration-300">
          <Image src="/supprt.jpg" alt="Service 3" width={200} height={200} className="rounded-lg mx-auto" />
          <h2 className="text-2xl font-bold mt-4 text-center">24/7 Customer Support</h2>
          <p className="text-center mt-2">We're here to help you 24/7 with any questions or concerns.</p>
          <Link href="/demo" className="text-center text-blue-500 hover:underline mt-2 block">
            Learn More
          </Link>
          <p className="text-center text-sm mt-4">*Terms and conditions apply.</p>
        </div>
      </div>

      {/* Extra bottom space so it never overlaps with footer */}
      <div className="pb-10"></div>
    </div>
  )
}

export default page
