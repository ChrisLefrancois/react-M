import React from 'react';
import heroBg from '../assets/hero-bg.jpg';

const HeroSection = () => {
  return (
    <section
    className="py-20"
    style={{
      background: `url(${heroBg}) center/cover`,
    }}
    >
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        {/* Hero content */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Welcome to Yoga M
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Embrace tranquility, balance, and well-being.
        </p>

        {/* Call-to-action button */}
        <a href="/classes" className="bg-green-500 text-white py-3 px-8 rounded-full text-lg hover:bg-green-600 transition duration-300 ease-in-out">
          Explore Classes
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
