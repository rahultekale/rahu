// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourseListing from './components/CourseListing/CourseListing';
import CourseDetails from './components/CourseDetails/CourseDetails';
import StudentDashboard from './components/StudentDashboard/StudentDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={CourseListing} />
        <Route path="/course/:id" component={CourseDetails} />
        <Route path="/dashboard" component={StudentDashboard} />
      </Routes>
    </Router>
  );
};

export default App;
