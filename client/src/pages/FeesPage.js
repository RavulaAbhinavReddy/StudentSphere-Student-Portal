import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const FeesPage = () => {
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
      const response = await fetch('/fees.xlsx');
      const data = await response.arrayBuffer();
      const workbook = XLSX.read(data, { type: 'array' });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const rows = XLSX.utils.sheet_to_json(sheet);

      const match = rows.find(row => String(row.RollNumber).trim() === rollNumber.trim());

      if (match) {
        setStudent(match);
      } else {
        setError('Your roll number was not found in the fee data.');
      }
    } catch (err) {
      console.error(err);
      setError('Failed to load fee file.');
    }
  };

  const getDueAmount = () => {
    const total = Number(student?.TuitionFee || 0);
    const paid = Number(student?.PaidAmount || 0);
    return total - paid;
  };

  const isFullyPaid = () => getDueAmount() <= 0;

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>💳 Fee Status</h1>

      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <button onClick={handleSearch} style={buttonStyle}>Check My Fee Status</button>
      </div>

      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

      {student && (
        <div style={cardStyle}>
          <h3>{student.Name}</h3>
          <table style={tableStyle}>
            <tbody>
              <tr>
                <td><strong>Tuition Fee</strong></td>
                <td>₹{student.TuitionFee}</td>
              </tr>
              <tr>
                <td><strong>Amount Paid</strong></td>
                <td>₹{student.PaidAmount}</td>
              </tr>
              <tr>
                <td><strong>Remaining Due</strong></td>
                <td>₹{getDueAmount()}</td>
              </tr>
              <tr>
                <td><strong>Status</strong></td>
                <td style={{ color: isFullyPaid() ? 'green' : 'red' }}>
                  {isFullyPaid() ? '✅ Paid' : '❌ Due'}
                </td>
              </tr>
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
  backgroundColor: '#f7f9fc',
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

const cardStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  maxWidth: '500px',
  margin: '0 auto',
  borderRadius: '10px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
};

const tableStyle = {
  width: '100%',
  marginTop: '20px',
  borderCollapse: 'collapse',
  lineHeight: '1.8',
};

export default FeesPage;
