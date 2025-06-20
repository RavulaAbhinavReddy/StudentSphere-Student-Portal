import React from 'react';
import Header from '../components/Header';

const AssignmentsPage = () => {
  const assignments = [
    {
      title: 'ML Assignment 1 – Regression Models',
      subject: 'Machine Learning (ML)',
      dueDate: '2025-05-10',
      status: 'active',
    },
    {
      title: 'BDA Assignment 2 – Hadoop & MapReduce',
      subject: 'Big Data Analytics (BDA)',
      dueDate: '2025-05-14',
      status: 'active',
    },
    {
      title: 'AT&CD Assignment – DFA Design',
      subject: 'Automata Theory & Compiler Design (AT&CD)',
      dueDate: '2025-04-25',
      status: 'completed',
    },
    {
      title: 'STM Assignment – Test Case Design',
      subject: 'Software Testing Methodologies (STM)',
      dueDate: '2025-04-30',
      status: 'completed',
    },
  ];

  return (
    <div style={pageStyle}>
      <Header />
      <div style={contentStyle}>
        <h1 style={titleStyle}>📘 Assignments</h1>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>🔴 Active Assignments</h2>
          {assignments.filter(a => a.status === 'active').map((a, i) => (
            <div key={i} style={cardStyleActive}>
              <h3>{a.title}</h3>
              <p><strong>Subject:</strong> {a.subject}</p>
              <p><strong>Due Date:</strong> {a.dueDate}</p>
            </div>
          ))}
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>✅ Completed Assignments</h2>
          {assignments.filter(a => a.status === 'completed').map((a, i) => (
            <div key={i} style={cardStyleCompleted}>
              <h3>{a.title}</h3>
              <p><strong>Subject:</strong> {a.subject}</p>
              <p><strong>Submitted on:</strong> {a.dueDate}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Shared theme colors
const colors = {
  darkPurple: '#3b0076',
  lightGray: '#f4f8fb',
  activeBg: '#fff3cd',
  activeBorder: '#ffc107',
  completedBg: '#d4edda',
  completedBorder: '#28a745',
};

// Styles
const pageStyle = {
  minHeight: '100vh',
  backgroundColor: colors.lightGray,
  fontFamily: 'Segoe UI, sans-serif',
  display: 'flex',
  flexDirection: 'column',
};

const contentStyle = {
  flex: 1,
  padding: '40px',
};

const titleStyle = {
  fontSize: '2rem',
  color: colors.darkPurple,
  marginBottom: '30px',
  textAlign: 'center',
};

const sectionStyle = {
  marginBottom: '40px',
};

const sectionTitleStyle = {
  fontSize: '1.4rem',
  color: '#34495e',
  marginBottom: '15px',
};

const cardStyleBase = {
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  marginBottom: '20px',
  backgroundColor: '#fff',
};

const cardStyleActive = {
  ...cardStyleBase,
  backgroundColor: colors.activeBg,
  borderLeft: `5px solid ${colors.activeBorder}`,
};

const cardStyleCompleted = {
  ...cardStyleBase,
  backgroundColor: colors.completedBg,
  borderLeft: `5px solid ${colors.completedBorder}`,
};

export default AssignmentsPage;
