// src/components/StudentDashboard/StudentDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
  // Fetch enrolled courses and other details if needed

  return (
    <div>
      <h2>Student Dashboard</h2>
      <ul>
        {/* Display enrolled courses with links to details */}
        <li>
          <Link to="/course/1">Enrolled Course 1</Link>
        </li>
        <li>
          <Link to="/course/2">Enrolled Course 2</Link>
        </li>
        {/* ... add more enrolled courses */}
      </ul>
    </div>
  );
};

export default StudentDashboard;
