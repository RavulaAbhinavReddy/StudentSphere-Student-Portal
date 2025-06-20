import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const MarksPage = () => {
  const rollNumber = localStorage.getItem('rollNumber');
  const [studentMarks, setStudentMarks] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    setError('');
    setStudentMarks(null);

    if (!rollNumber) {
      setError('Roll number not found in session. Please log in again.');
      return;
    }

    try {
      const response = await fetch('/marks.xlsx');
      const data = await response.arrayBuffer();
      const workbook = XLSX.read(data, { type: 'array' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);

      const student = jsonData.find(
        (row) => String(row.RollNumber).trim() === rollNumber.trim()
      );

      if (student) {
        setStudentMarks(student);
      } else {
        setError('Your roll number was not found in the marks file.');
      }
    } catch (err) {
      console.error(err);
      setError('Failed to load marks file.');
    }
  };

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>📊 Marks Viewer</h1>

      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <button onClick={handleSearch} style={buttonStyle}>View My Marks</button>
      </div>

      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

      {studentMarks && (
        <div style={marksBlock}>
          <h3>
            Marks for {studentMarks['Student Name']} (Roll Number: {rollNumber})
          </h3>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Assignment Marks</th>
                <th>Exam Marks</th>
              </tr>
            </thead>
            <tbody>
              {[ 
                { subject: 'ML', a: studentMarks.ML_Assignment, e: studentMarks.ML_Exam },
                { subject: 'BDA', a: studentMarks.BDA_Assignment, e: studentMarks.BDA_Exam },
                { subject: 'AT&CD', a: studentMarks.ATCD_Assignment, e: studentMarks.ATCD_Exam },
                { subject: 'STM', a: studentMarks.STM_Assignment, e: studentMarks.STM_Exam },
              ].map((item, idx) => (
                <tr key={idx}>
                  <td>{item.subject}</td>
                  <td>{item.a ?? 'N/A'}</td>
                  <td>{item.e ?? 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

// Styles
const pageStyle = {
  padding: '40px',
  fontFamily: 'Segoe UI, sans-serif',
  backgroundColor: '#f4f8fb',
  minHeight: '100vh',
};

const titleStyle = {
  fontSize: '2rem',
  textAlign: 'center',
  marginBottom: '30px',
  color: '#2c3e50',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
};

const marksBlock = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '10px',
  maxWidth: '700px',
  margin: '0 auto',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
};

export default MarksPage;
