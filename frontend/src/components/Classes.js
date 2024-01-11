import React, { useState } from 'react';
import '../class.css'; // Include your CSS file for styles

const ClassesSection = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [yogaClass, setYogaClass] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');

  const openPopup = (className) => {
    setShowPopup(true);
    setYogaClass(className);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log(event)

    fetch('/create-booking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        className: yogaClass,
        name: name,
        email: email,
        date: date,
      }),
    })
      .then((response) => {
        console.log(response.body)
        if (response.ok) {
          closePopup();
          alert('Booking successful!');
        } else {
          throw new Error('Booking failed');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred while booking. Please try again.');
      });
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-8 text-center">
          Our Classes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Class cards */}

          <div className="bg-white rounded-lg shadow-md  p-6" onClick={() => openPopup("Kid's class")}>
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

          <div className="bg-white rounded-lg shadow-md p-6" onClick={() => openPopup("Teen's class")}>
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

          <div className="bg-white rounded-lg shadow-md p-6" onClick={() => openPopup("Adults's class")}>
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

          <div className="bg-white rounded-lg shadow-md p-6" onClick={() => openPopup("Group's class")}>
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

          <div className={showPopup ? "popup active" : "popup"}>
        <div className="popup-content p-6 bg-white rounded-md shadow-md">
          <span className="close" onClick={closePopup}>
            &times;
          </span>
          <h2 className="text-2xl font-bold mb-4">Book {yogaClass}</h2>
         <form onSubmit={submitForm} className="space-y-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
              <input
                className="mt-1 p-2 w-full border rounded-md"
                type="text"
                id="name"
                name="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              /><br/><br/>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
              <input
                className="mt-1 p-2 w-full border rounded-md"
                type="email"
                id="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              /><br/><br/>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date:</label>
              <input
                className="mt-1 p-2 w-full border rounded-md"
                type="date"
                id="date"
                name="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
              /><br/><br/>
              <input type="submit" value="Book Class" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600" />
            </form>
         </div>
      </div>
          {/* Add more class cards as needed */}
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;
