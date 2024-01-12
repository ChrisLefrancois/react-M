import React, {useState, useEffect} from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import axios from 'axios';
import Modal from 'react-modal';



const AdminDashboard = () => {
  const localizer = momentLocalizer(moment);

  const [bookings, setBookings] = useState([]);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const openModal = (event) => {
    setSelectedEvent(event);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };


  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('/api/bookings');
        const data = response.data;
        console.log('Fetched bookings data:', data);
        setBookings(data);
      } catch (error) {
        console.error('Error fetching bookings:', error.message);
      }
    };

    fetchBookings();
  }, []);

  const events = bookings.reduce((uniqueEvents, booking) => {
    const parsedDate = new Date(booking.date);
    const endTime = new Date(parsedDate.getTime() + 60 * 60 * 1000);

    // Check if an event with the same start time and title already exists
    const existingEvent = uniqueEvents.find(
      (event) =>
        event.start.getTime() === parsedDate.getTime() &&
        event.title === booking.yogaClass
    );

    // If not found, add the event to the uniqueEvents array
    if (!existingEvent) {
      uniqueEvents.push({
        title: booking.yogaClass, // Use the class name instead of email
        start: parsedDate,
        end: endTime,
      });
    }

    return uniqueEvents;
  }, []);

  console.log('All Events:', events);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Admin Dashboard</h1>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Bookings Calendar</h2>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          onSelectEvent={openModal}
          style={{ height: 800 }}
        />
      </div>

      {/* Modal for displaying booking details */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Booking Details"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <div className="modal-header">
          <h2>Booking Details</h2>
          <button className="close-button" onClick={closeModal}>Close</button>
        </div>
        {selectedEvent && (
          <div className="modal-body">
            <h3>{selectedEvent.title}</h3>
            <ul>
              {events
                .filter((event) => event.title === selectedEvent.title)
                .map((event) => (
                  <li key={event.start.toString()}>
                    {moment(event.start).format('MMMM Do YYYY, h:mm a')}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default AdminDashboard;
