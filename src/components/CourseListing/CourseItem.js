// src/components/CourseListing/CourseItem.js
import React from 'react';
import { Link } from 'react-router-dom';

const CourseItem = ({ course }) => {
  return (
    <li>
      <Link to={`/course/${course.id}`}>
        <h3>{course.name}</h3>
        <p>Instructor: {course.instructor}</p>
        <p>Description: {course.description}</p>
        {/* ... other course details */}
      </Link>
    </li>
  );
};

export default CourseItem;
