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
    <div className="bg-gray-200 w-full min-h-screen flex flex-col mt-40 md:flex-row items-center justify-center gap-12 p-6 pt-0 h-auto ">
      <ToastContainer />

      {/* Map Section */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2 lg:w-5/12">
        <h1 className="text-3xl mt-0 pb-5 md:text-4xl font-bold mb-4">Location</h1>
        <a href="https://maps.app.goo.gl/1pwq9KajVkH4EwLx9" target="_blank">
          <Image
            src="/map.jpg"
            alt="Flower"
            width={700}
            height={700}
            className="rounded-lg w-full max-w-[700px] h-auto"
          />
        </a>
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 lg:w-5/12 flex justify-center">
        <form
          className="flex flex-col bg-gray-100 p-6 sm:p-10 mt-20 lg:p-14 rounded-lg shadow-lg w-full max-w-[500px]"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl md:text-3xl mb-6 text-center font-semibold">
            Contact Us
          </h1>

          <input
            required
            type="text"
            placeholder="Name"
            name="name"
            className="border-2 border-gray-300 rounded-lg p-3 m-2"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            required
            type="tel"
            placeholder="Phone Number"
            name="phone"
            className="border-2 border-gray-300 rounded-lg p-3 m-2"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
          <input
            required
            type="email"
            placeholder="Email"
            name="email"
            className="border-2 border-gray-300 rounded-lg p-3 m-2"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />

          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg p-3 m-2 hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormData;
