import React from 'react';

const ContactSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-8 text-center">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact form */}
          <form className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-800 font-semibold mb-2">Your Name</label>
              <input type="text" id="name" name="name" className="w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:border-green-500" placeholder="Enter your name" required />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-800 font-semibold mb-2">Your Email</label>
              <input type="email" id="email" name="email" className="w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:border-green-500" placeholder="Enter your email" required />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-800 font-semibold mb-2">Your Message</label>
              <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:border-green-500" placeholder="Enter your message" required></textarea>
            </div>

            <button type="submit" className="bg-green-500 text-white py-3 px-8 rounded-lg text-lg hover:bg-green-600 transition duration-300 ease-in-out">
              Send Message
            </button>
          </form>

          {/* Contact information */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
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
    </section>
  );
};

export default ContactSection;
