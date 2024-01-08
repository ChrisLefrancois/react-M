import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/send-email', formData);
      console.log('Email sent successfully');
      // If you want to reset the form after successful submission
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-start gap-8 p-6 bg-gray-100 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="flex-1">
        <h2 className="text-2xl font-semibold mb-6 text-center">Contact Us</h2>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full p-2 border rounded-md resize-none"
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 w-full">
          Send Message
        </button>
      </form>
      <div className="flex-1 bg-gray-100 rounded-lg shadow-lg p-6 flex flex-col justify-between">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
        <div className="bg-white rounded-lg shadow-md p-6 flex-1">
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Address:</span> 123 Yoga Street, City, Country
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Email:</span> info@yogateacher.com
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Phone:</span> +1 234 567 890
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
