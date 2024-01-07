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
              Hatha Yoga
            </h3>
            <p className="text-gray-600">
              Experience traditional Hatha Yoga for beginners and advanced practitioners focusing on breath and alignment.
            </p>
            <p className="text-gray-600 mt-4">
              Schedule: Mondays & Thursdays, 6 PM - 7:30 PM
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Vinyasa Flow
            </h3>
            <p className="text-gray-600">
              Dynamic and fluid sequences connecting breath with movement suitable for all levels.
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
