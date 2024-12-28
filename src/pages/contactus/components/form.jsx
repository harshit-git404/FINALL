import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, mobile, message } = formData;

    if (!name || !email || !mobile || !message) {
      toast.error('Please fill in all fields before submitting the form!', {
        position: 'top-center',
      });
      return;
    }

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      toast.error('Please enter a valid 10-digit mobile number!', {
        position: 'top-center',
      });
      return;
    }

    toast.success(`Thank you, ${name}! 😊 Our team will contact you soon.`, {
      position: 'top-center',
    });

    setFormData({
      name: '',
      email: '',
      mobile: '',
      message: '',
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-2xl px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-[#004A7C]">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Enter your name"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              placeholder="Enter 10-digit mobile number"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              placeholder="Enter your message"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 h-32"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="flex mx-auto border-2 rounded-full bg-white font-semibold text-[#31363F] py-2 px-8 focus:outline-none hover:bg-[#005691] hover:text-white text-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
