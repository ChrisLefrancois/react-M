import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Class = ({ classData }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState(null);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };


  // Function to check if a date is a valid class day
  const isClassDay = (date) => {
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
    return classData.days.includes(dayOfWeek);
  };

  // Function to calculate the minimum and maximum valid dates
  const calculateMinMaxDates = () => {
    const currentDate = new Date();
    let minDate = currentDate;
    let maxDate = currentDate;

    while (!isClassDay(minDate)) {
      console.log('Calculating minDate:', minDate);
      minDate = new Date(minDate.getTime() - (24 * 60 * 60 * 1000)); // Subtract one day
    }

    while (!isClassDay(maxDate)) {
      console.log('Calculating maxDate:', maxDate);
      maxDate = new Date(maxDate.getTime() + (24 * 60 * 60 * 1000)); // Add one day
    }

    console.log('Final minDate:', minDate);
    console.log('Final maxDate:', maxDate);

    return { minDate, maxDate };
  };

  const { minDate, maxDate } = calculateMinMaxDates();


  const submitForm = (e) => {
    e.preventDefault();
    // Add your booking submission logic here
    // You can use name, email, date, and classData to create a booking
    console.log('Booking submitted:', { name, email, date, classData });
    // Clear the form fields
    setName('');
    setEmail('');
    setDate('');
    // Close the popup
    closePopup();
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {classData.classTitle}
      </h3>
      <p className="text-gray-600">{classData.description}</p>
      <p className="text-gray-600 mt-4">Schedule: {classData.schedule}</p>

      <div className="mt-4">
        <strong>Available Hours:</strong>
        <ul className="list-disc pl-6">
          {classData.hours.map((hour) => (
            <li key={hour}>{hour}</li>
          ))}
        </ul>
      </div>

      <button onClick={openPopup} className="mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
        Book Now
      </button>

      <div className={showPopup ? "popup active" : "popup"}>
        <div className="popup-content p-6 bg-white rounded-md shadow-md">
          <span className="close" onClick={closePopup}>
            &times;
          </span>
          <h2 className="text-2xl font-bold mb-4">Book {classData.classTitle}</h2>
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
            <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            dateFormat="yyyy-MM-dd"
            minDate={minDate}
            maxDate={maxDate}
            placeholderText="Select a date"
          />
          <br/><br/>
            <input type="submit" value="Book Class" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Class;
