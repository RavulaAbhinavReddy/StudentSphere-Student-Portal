import React, { useState } from 'react';

const TimetablePage = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  const handleToggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>III-II B.Tech AI&DS Timetable (2024–25)</h1>
      <h3 style={subTitleStyle}>Room No: B-601 | w.e.f 27.01.2025</h3>

      <div style={tableContainer}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th>Day / Time</th>
              <th>8:45–9:35</th>
              <th>9:35–10:25</th>
              <th>10:40–11:30</th>
              <th>11:30–12:20</th>
              <th>12:20–1:10</th>
              <th>2:00–2:45</th>
              <th>2:45–3:30</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Monday', 'BDA', 'BDA', 'Mini Project', '', '', 'STM', 'ML'],
              ['Tuesday', 'STM', 'ML', 'IP Project', '', '', 'AT&CD (A601)', 'DPPM (A601)'],
              ['Wednesday', 'BDA LAB', '', 'AT&CD', 'BDA', 'DPPM', '', ''],
              ['Thursday', 'AT&CD', 'STM', 'Mini Project', '', 'ES', 'AT&CD', 'BDA'],
              ['Friday', 'DPPM', 'ML', 'ML LAB', '', '', 'STM', 'DPPM'],
              ['Saturday', 'ML', 'STM', 'AT&CD', 'BDA', 'AT&CD', 'DPPM', 'ES'],
            ].map((row, idx) => (
              <tr key={idx}>
                {row.map((cell, i) => (
                  <td key={i} style={i === 0 ? dayCellStyle : cellStyle}>{cell || '-'}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 style={sectionTitleStyle}>📘 Subjects & Faculty</h2>
      <div style={facultyListStyle}>
        {[
          ['AD601PC', 'Automata Theory & Compiler Design', 'Dr. K. Ramakrishna Reddy'],
          ['AD602PC', 'Machine Learning', 'Dr. K M V Madan Kumar'],
          ['AD603PC', 'Big Data Analytics', 'Mrs. G. Lavanya Kumari'],
          ['AD621PE', 'Software Testing Methodologies', 'Dr. M. Prabhakar'],
          ['CE611OE', 'Disaster Preparedness & Planning', 'Mr. J. Naresh'],
          ['AD606PC', 'Mini Project (UI design–Flutter)', 'Mr. Sk Khaleelullah'],
          ['MC609', 'Environmental Science', 'Mrs. K. Sindhuja'],
          ['AD604PC', 'ML Lab', 'Mrs. K. Sindhuja, Dr. K M V Madan Kumar'],
          ['AD605PC', 'BDA Lab', 'Mrs. G. Lavanya Kumari'],
          ['IP PROJECT', 'Industrial Project', 'Mrs. G. Lavanya Kumari, Mrs. K. Sindhuja'],
        ].map(([code, name, faculty], i) => (
          <p key={i}><strong>{code}:</strong> {name} — <em>{faculty}</em></p>
        ))}
      </div>

      <h2 style={sectionTitleStyle}>📅 Academic Calendar</h2>
      <button style={calendarToggleBtn} onClick={handleToggleCalendar}>
        {showCalendar ? 'Hide Calendar' : 'View Calendar (PDF)'}
      </button>

      {showCalendar && (
        <iframe
          title="Academic Calendar"
          src="/B._Tech_._III_YEAR_I_II_SEMESTERS_.pdf"
          width="100%"
          height="600px"
          style={{ marginTop: '20px', border: '1px solid #ccc' }}
        />
      )}
    </div>
  );
};

// Styles
const pageStyle = {
  padding: '30px',
  fontFamily: 'Segoe UI, sans-serif',
  backgroundColor: '#f0f4f8',
};

const titleStyle = {
  textAlign: 'center',
  fontSize: '2rem',
  color: '#2c3e50',
};

const subTitleStyle = {
  textAlign: 'center',
  fontSize: '1.1rem',
  color: '#555',
  marginBottom: '20px',
};

const tableContainer = {
  overflowX: 'auto',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  backgroundColor: '#fff',
  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
};

const dayCellStyle = {
  backgroundColor: '#2980b9',
  color: '#fff',
  padding: '10px',
  fontWeight: 'bold',
};

const cellStyle = {
  border: '1px solid #ccc',
  padding: '10px',
  textAlign: 'center',
};

const sectionTitleStyle = {
  marginTop: '40px',
  fontSize: '1.5rem',
  color: '#34495e',
};

const facultyListStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '10px',
  marginTop: '10px',
  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  lineHeight: '1.6',
};

const calendarToggleBtn = {
  backgroundColor: '#3498db',
  color: '#fff',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '1rem',
  marginTop: '10px',
};

export default TimetablePage;
