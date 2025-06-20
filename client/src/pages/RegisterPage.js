// src/pages/RegisterPage.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as XLSX from 'xlsx';
import Header from '../components/Header';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    rollNumber: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    year: '', // ✅ Added year field
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRollSearch = async () => {
    setFormData({ ...formData, name: '' });
    try {
      const response = await fetch('/marks.xlsx');
      const data = await response.arrayBuffer();
      const workbook = XLSX.read(data, { type: 'array' });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const rows = XLSX.utils.sheet_to_json(sheet);
      const student = rows.find(row => String(row.RollNumber).trim() === formData.rollNumber.trim());

      if (student) {
        setFormData(prev => ({ ...prev, name: student.StudentName }));
        setError(null);
      } else {
        setError('Roll number not found in marks.xlsx');
      }
    } catch (err) {
      console.error(err);
      setError('Error reading marks.xlsx');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        name: formData.name,
        rollNumber: formData.rollNumber,
        email: formData.email,
        password: formData.password,
        year: formData.year, // ✅ Include year in request
      });

      localStorage.setItem('token', response.data.token);
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
      console.error('Registration error:', err);
    }
  };

  const colors = {
    darkPurple: '#3b0076',
    mediumPurple: '#5b2a86',
    blue: '#4c84a9',
    lightBlue: '#85a1c8',
    white: '#ffffff',
  };

  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: colors.white,
    fontFamily: 'Segoe UI, sans-serif',
    display: 'flex',
    flexDirection: 'column',
  };

  const contentWrapper = {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
  };

  const formStyle = {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 0 20px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '420px',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    margin: '10px 0',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    marginTop: '15px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: colors.mediumPurple,
    color: '#fff',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: '0.3s',
  };

  const secondaryButtonStyle = {
    ...buttonStyle,
    backgroundColor: colors.blue,
  };

  const linkStyle = {
    display: 'block',
    textAlign: 'center',
    marginTop: '15px',
    color: colors.blue,
    textDecoration: 'none',
  };

  return (
    <div style={containerStyle}>
      <Header />
      <div style={contentWrapper}>
        <form onSubmit={handleRegister} style={formStyle}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px', color: colors.darkPurple }}>Register</h2>

          {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

          <input
            type="text"
            name="rollNumber"
            placeholder="Roll Number"
            value={formData.rollNumber}
            onChange={handleChange}
            style={inputStyle}
            required
          />
          <button type="button" onClick={handleRollSearch} style={secondaryButtonStyle}>
            Autofill Name
          </button>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
            readOnly
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
            required
          />

          <input
            type="number"
            name="year"
            placeholder="Year (e.g., 2, 3, 4)"
            value={formData.year}
            onChange={handleChange}
            style={inputStyle}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={inputStyle}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={inputStyle}
            required
          />

          <button type="submit" style={buttonStyle}>Register</button>
          <Link to="/login" style={linkStyle}>Already have an account? Login</Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
