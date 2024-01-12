import React from 'react';
import '../simpleCalendar.css';

const SimpleCalendar = ({ events }) => {
  return (
    <div className="simple-calendar">
      {events.map((event, index) => (
        <div key={index} className="event">
          {event.title} - {new Date(event.date).toLocaleDateString()}
        </div>
      ))}
    </div>
  );
};

export default SimpleCalendar;
