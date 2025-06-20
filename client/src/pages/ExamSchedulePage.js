import React from 'react';

const ExamSchedulePage = () => {
  const exams = [
    { date: '2025-04-10', time: '10:00 AM – 1:00 PM', subject: 'Big Data Analytics (BDA)', venue: 'Room A601' },
    { date: '2025-04-12', time: '10:00 AM – 1:00 PM', subject: 'Machine Learning (ML)', venue: 'Room A602' },
    { date: '2025-04-14', time: '10:00 AM – 1:00 PM', subject: 'Automata Theory & Compiler Design (AT&CD)', venue: 'Room A603' },
    { date: '2025-04-16', time: '10:00 AM – 1:00 PM', subject: 'Disaster Preparedness & Planning (DPPM)', venue: 'Room A604' },
    { date: '2025-04-18', time: '10:00 AM – 1:00 PM', subject: 'Software Testing Methodologies (STM)', venue: 'Room A605' },
    { date: '2025-04-20', time: '10:00 AM – 1:00 PM', subject: 'Environmental Science (ES)', venue: 'Room A606' },
  ];

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>📅 Exam Schedule – III-II B.Tech AI&DS</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Subject</th>
            <th>Venue</th>
          </tr>
        </thead>
        <tbody>
          {exams.map((exam, index) => (
            <tr key={index}>
              <td>{exam.date}</td>
              <td>{exam.time}</td>
              <td>{exam.subject}</td>
              <td>{exam.venue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Styling
const pageStyle = {
  padding: '40px',
  fontFamily: 'Segoe UI, sans-serif',
  backgroundColor: '#f7f9fc',
  minHeight: '100vh',
};

const titleStyle = {
  fontSize: '2rem',
  marginBottom: '30px',
  color: '#2c3e50',
  textAlign: 'center',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  backgroundColor: '#fff',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
};

const thStyle = {
  backgroundColor: '#2980b9',
  color: '#fff',
  padding: '12px',
  textAlign: 'left',
};

const tdStyle = {
  padding: '12px',
  borderBottom: '1px solid #ddd',
};

export default ExamSchedulePage;
