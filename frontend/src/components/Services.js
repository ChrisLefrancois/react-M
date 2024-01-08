import React from 'react';

const ServicesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-8 text-center">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service cards */}
          <div className="bg-gray-100 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Private Sessions
            </h3>
            <p className="text-gray-600">
              Tailored one-on-one sessions designed to meet individual needs and goals.
            </p>
          </div>

          <div className="bg-gray-100 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Group Classes
            </h3>
            <p className="text-gray-600">
            Regular classes for various skill levels, from beginners to advanced practitioners, held in a group setting.
            </p>
          </div>

          <div className="bg-gray-100 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Mindfulness and Meditation
            </h3>
            <p className="text-gray-600">
            Guiding sessions focused on mindfulness practices, meditation techniques, and breathwork.
            </p>
          </div>

          {/* Add more service cards as needed */}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
