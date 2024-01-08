import React from 'react';

const ClassesSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-8 text-center">
          Our Classes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Class cards */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Kid's Class
            </h3>
            <p className="text-gray-600">
            Join our Kids' Yoga Class for playful poses, storytelling, and games! Engaging breath work and movement foster balance, flexibility, and relaxation in a fun, supportive environment.
            </p>
            <p className="text-gray-600 mt-4">
              Schedule: Mondays & Thursdays, 6 PM - 7:30 PM
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Teenager's Class
            </h3>
            <p className="text-gray-600">
            Experience our Teen Yoga Class! Dive into invigorating poses, mindful practices, and engaging activities. Discover balance, strength, and relaxation in a vibrant, supportive setting tailored for teens.
            </p>
            <p className="text-gray-600 mt-4">
              Schedule: Tuesdays & Fridays, 10:30 AM - 12:00 AM
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Adults's Class
            </h3>
            <p className="text-gray-600">
            Step into our Adult Yoga Class! Embrace a journey of serene poses, mindful breathing, and rejuvenating practices. Cultivate strength, flexibility, and inner peace in a welcoming, nurturing environment for all levels.
            </p>
            <p className="text-gray-600 mt-4">
              Schedule: Tuesdays & Fridays, 9 AM - 10:30 AM
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
             Group's Class
            </h3>
            <p className="text-gray-600">
            Explore our Small Group Yoga Sessions! Dive into personalized practices, bonding experiences, and tailored guidance. Together in a supportive setting, discover wellness, flexibility, and connection on your yoga journey.
            </p>
            <p className="text-gray-600 mt-4">
              Schedule: Tuesdays & Fridays, 9 AM - 10:30 AM
            </p>
          </div>

          {/* Add more class cards as needed */}
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;
