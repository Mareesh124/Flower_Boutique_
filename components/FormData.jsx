'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormData = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.name.length < 3) {
      toast.error("Name must be at least 3 characters long");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:5000/api/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      console.log("Success:", data);
      toast.success("Submitted successfully");
      setFormData({ name: '', email: '', phone: '' });
    } catch (error) {
      console.error("Error:", error);
      toast.error("Submission failed: " + error.message);
    }
  };

  return (
    <div className='flex items-center justify-center w-screen h-screen bg-gray-200'>
      <ToastContainer />
      <div>
        <h1 className='text-4xl text-center mb-5 pr-96'>Location</h1>
        <a href="https://maps.app.goo.gl/1pwq9KajVkH4EwLx9" target='_blank'>
          <Image src="/map.jpg" alt="Flower" width={500} height={500} className='rounded-lg' />
        </a>
      </div>
      <div className='flex justify-center items-center ml-52'>
        <form className='flex flex-col bg-gray-100 p-20 rounded-lg shadow-lg' onSubmit={handleSubmit}>
          <h1 className='text-3xl mb-4 items-center pb-9 pl-10'>Contact Us</h1>

          <input
            required
            type='text'
            placeholder='Name'
            name='name'
            className='border-2 border-gray-300 rounded-lg p-2 m-2'
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            required
            type='tel'
            placeholder='Phone Number'
            name='phone'
            className='border-2 border-gray-300 rounded-lg p-2 m-2'
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
          <input
            required
            type='email'
            placeholder='Email'
            name='email'
            className='border-2 border-gray-300 rounded-lg p-2 m-2'
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />

          <button type='submit' className='bg-blue-500 text-white rounded-lg p-2 m-2'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FormData;
