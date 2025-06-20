import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import DepartmentPage from './pages/DepartmentPage';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import TimetablePage from './pages/TimetablePage';
import ExamSchedulePage from './pages/ExamSchedulePage';
import AssignmentsPage from './pages/AssignmentsPage';
import MarksPage from './pages/MarksPage';
import AttendancePage from './pages/AttendancePage';
import EventsPage from './pages/EventsPage';
import PlacementsPage from './pages/PlacementsPage';
import FeesPage from './pages/FeesPage';
import ContactPage from './pages/ContactPage';

import FacultyPage from './pages/FacultyPage';


import StudentPage from './pages/StudentPage';  // <-- Added this import

const App = () => {
  const isAuthenticated = localStorage.getItem('token') ? true : false;

  return (
    <Router>
      <Routes>
        {/* Default page */}
        <Route path="/" element={<StudentPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route
          path="/dashboard"
          element={isAuthenticated ? <DashboardPage /> : <Navigate to="/login" />}
        />

        {/* Protected Functional Routes */}
        <Route
          path="/timetable"
          element={isAuthenticated ? <TimetablePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/exam-schedule"
          element={isAuthenticated ? <ExamSchedulePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/assignments"
          element={isAuthenticated ? <AssignmentsPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/marks"
          element={isAuthenticated ? <MarksPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/attendance"
          element={isAuthenticated ? <AttendancePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/events"
          element={isAuthenticated ? <EventsPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/placements"
          element={isAuthenticated ? <PlacementsPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/fees"
          element={isAuthenticated ? <FeesPage /> : <Navigate to="/login" />}
        />

        {/* Public Student Page - no login required */}
        <Route path="/students" element={<StudentPage />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
