import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const AttendancePage = () => {
  const rollNumber = localStorage.getItem('rollNumber');
  const [student, setStudent] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    setError('');
    setStudent(null);

    if (!rollNumber) {
      setError('Roll number not found in session. Please log in again.');
      return;
    }

    try {
      const response = await fetch('/attendance.xlsx');
      const data = await response.arrayBuffer();
      const workbook = XLSX.read(data, { type: 'array' });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const rows = XLSX.utils.sheet_to_json(sheet);

      const match = rows.find(row => String(row['R.NO']).trim() === rollNumber.trim());

      if (match) {
        setStudent(match);
      } else {
        setError('Your roll number was not found in the attendance data.');
      }
    } catch (err) {
      console.error(err);
      setError('Failed to load attendance file');
    }
  };

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>📅 Attendance</h1>

      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <button onClick={handleSearch} style={buttonStyle}>View My Attendance</button>
      </div>

      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

      {student && (
        <div style={cardStyle}>
          <h3 style={{ textAlign: 'center' }}>{student['Name of the Student']}</h3>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={cellStyle}>Subject</th>
                <th style={cellStyle}>Classes Attended</th>
              </tr>
            </thead>
            <tbody>
              {[
                'ATCD', 'ML', 'BDA', 'STM', 'DPPM',
                'UI FLUTTER', 'ES', 'ML LAB', 'BDA LAB', 'IP PROJECT'
              ].map((subject, i) => (
                <tr key={i}>
                  <td style={cellStyle}>{subject}</td>
                  <td style={cellStyle}>{student[subject]}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3 style={{ marginTop: '20px', color: '#007bff', textAlign: 'center' }}>
            ✅ Overall Attendance: {student['%']}%
          </h3>
        </div>
      )}
    </div>
  );
};

// Styles
const pageStyle = {
  padding: '40px',
  fontFamily: 'Segoe UI, sans-serif',
  backgroundColor: '#f0f4f8',
  minHeight: '100vh',
};

const titleStyle = {
  fontSize: '2rem',
  textAlign: 'center',
  marginBottom: '30px',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
};

const cardStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  maxWidth: '800px',
  margin: '0 auto',
  borderRadius: '10px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
};

const tableStyle = {
  width: '100%',
  marginTop: '20px',
  borderCollapse: 'collapse',
};

const cellStyle = {
  textAlign: 'center',
  padding: '10px',
  borderBottom: '1px solid #ddd',
};

export default AttendancePage;
