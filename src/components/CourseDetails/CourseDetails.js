// src/components/CourseDetails/CourseDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import coursesData from '../../data/courses';

const CourseDetails = () => {
  const { id } = useParams();
  const course = coursesData.find((c) => c.id === parseInt(id, 10));

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div>
      <h2>{course.name}</h2>
      <p>Instructor: {course.instructor}</p>
      <p>Description: {course.description}</p>
      {/* ... other course details */}
    </div>
  );
};

export default CourseDetails;
