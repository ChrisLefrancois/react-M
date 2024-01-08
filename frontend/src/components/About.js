import React from 'react';
import Maude from '../assets/Maude.jpeg';
import heroBg from '../assets/hero-bg.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* About content */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              About Me
            </h2>
            <p className="text-lg text-gray-600">
              I'm passionate about helping individuals find balance and inner peace through yoga. With over 2 years of experience, I specialize in ??? yoga and believe in creating a nurturing environment for all levels.
            </p>
          </div>

          {/* Image */}
          <div className="lg:w-1/2">
            <img
              src={heroBg} // Replace with your image URL
              alt="Yoga Teacher"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
