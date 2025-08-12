'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="bg-gray-800 text-white px-4 sm:px-6 py-3">
      {/* Top row */}
      <div className="flex items-center justify-between">
        {/* Logo & Name */}
        <div className="flex items-center space-x-3">
          <Image
            src="/flower.jpg"
            alt="Ice Cream"
            width={60}
            height={60}
            className="rounded-full"
          />
          <div className="leading-tight">
            <Link href="/">
              <h1 className="text-xl sm:text-3xl font-bold">Hema's</h1>
              <h1 className="text-xl sm:text-3xl font-bold">Boutique</h1>
            </Link>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className=" hidden md:flex items-center space-x-8">
          <div className='pr-96 hidden md:flex items-center space-x-20'><Link href="/" className="text-lg font-bold uppercase hover:text-cyan-500">Home</Link>
          <Link href="/demo" className="text-lg font-bold uppercase hover:text-cyan-500">Service</Link>
          <Link href="/help" className="text-lg font-bold uppercase hover:text-cyan-500">Help</Link></div>
          <button className="bg-blue-500 text-white rounded-xl px-4 py-2 hover:bg-violet-800">
            Sign in
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden bg-blue-500 px-3 py-2 rounded-lg hover:bg-violet-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="flex flex-col mt-3 space-y-2 md:hidden">
          <Link href="/" className="text-lg font-bold uppercase hover:text-cyan-500">Home</Link>
          <Link href="/demo" className="text-lg font-bold uppercase hover:text-cyan-500">Service</Link>
          <Link href="/help" className="text-lg font-bold uppercase hover:text-cyan-500">Help</Link>
          <button className="bg-blue-500 text-white rounded-xl px-4 py-2 hover:bg-violet-800">
            Sign in
          </button>
        </div>
      )}
    </div>
  )
}

export default Header
