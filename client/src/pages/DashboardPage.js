import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header'; // Adjust path as needed

const DashboardPage = () => {
  const studentName = localStorage.getItem('name');
  const rollNumber = localStorage.getItem('rollNumber');

  return (
    <div style={pageWrapper}>
      <Header /> {/* Your site-wide header */}

      <div style={headerSection}>
        <h1 style={mainTitle}>📚 Student Dashboard</h1>
        <p style={welcomeText}>
          👋 Welcome, <strong>{studentName}</strong> ({rollNumber})<br />
          Access your academic and campus resources here.
        </p>
      </div>

      <div style={gridStyle}>
        {cards.map((card, idx) => (
          <Link to={card.path} key={idx} style={cardStyle}>
            <h3 style={cardTitleStyle}>{card.title}</h3>
            <p style={cardDescriptionStyle}>{card.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

// Dashboard cards
const cards = [
  { path: '/timetable', title: 'Timetable', description: 'View your class schedule.' },
  { path: '/exam-schedule', title: 'Exam Schedule', description: 'View your upcoming exams.' },
  { path: '/assignments', title: 'Assignments', description: 'Check ongoing and upcoming assignments.' },
  { path: '/marks', title: 'Marks', description: 'Check your latest marks and performance.' },
  { path: '/attendance', title: 'Attendance', description: 'Track your attendance records.' },
  { path: '/events', title: 'Events', description: 'Stay updated on upcoming campus events.' },
  { path: '/placements', title: 'Placements', description: 'Check placement opportunities and updates.' },
  { path: '/fees', title: 'Fees', description: 'View and manage your fee payments.' },
];

// Styling
const pageWrapper = {
  fontFamily: 'Segoe UI, sans-serif',
  backgroundColor: '#f5f8fc',
  minHeight: '100vh',
};

const headerSection = {
  padding: '40px 20px 20px',
  textAlign: 'center',
  background: 'linear-gradient(90deg, #004c99, #0066cc)',
  color: '#fff',
};

const mainTitle = {
  fontSize: '2.5rem',
  marginBottom: '10px',
};

const welcomeText = {
  fontSize: '1.1rem',
  fontWeight: '300',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  gap: '20px',
  padding: '30px 20px',
};

const cardStyle = {
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  padding: '25px',
  textDecoration: 'none',
  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
  color: '#2c3e50',
  textAlign: 'center',
  transition: 'transform 0.2s, box-shadow 0.2s',
};

const cardTitleStyle = {
  fontSize: '1.4rem',
  marginBottom: '10px',
  fontWeight: '600',
};

const cardDescriptionStyle = {
  fontSize: '1rem',
  color: '#6c757d',
};

export default DashboardPage;
