import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Class from './Class';

const ClassList = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get('/api/classes');
        setClasses(response.data);
      } catch (error) {
        console.error('Error fetching classes:', error.message);
      }
    };

    fetchClasses();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {classes.map((classData) => (
        <Class key={classData._id} classData={classData} />
      ))}
    </div>
  );
};

export default ClassList;
