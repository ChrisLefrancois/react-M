import React, {useState, useEffect} from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const AdminDashboard = () => {
  const localizer = momentLocalizer(moment);

  const [events, setEvents] = useState([]);

useEffect(() => {
  // Fetch booking data from the backend and update the state
  const fetchBookingData = async () => {
    try {
      const response = await fetch('/bookings');

      if (!response.ok) {
        throw new Error(`Error fetching booking data: ${response.statusText}`);
      }

      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  fetchBookingData();
}, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
};

export default AdminDashboard;
