// src/components/CourseListing/CourseListing.js
import React, { useState } from 'react';
import CourseItem from './CourseItem';
import coursesData from '../../data/courses';

const CourseListing = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [courses, setCourses] = useState(coursesData);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Filter courses based on search term
    const filteredCourses = coursesData.filter((course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCourses(filteredCourses);
  };

  return (
    <div>
      <input type="text" placeholder="Search by course name" onChange={handleSearch} />
      <ul>
        {courses.map((course) => (
          <CourseItem key={course.id} course={course} />
        ))}
      </ul>
    </div>
  );
};

export default CourseListing;
