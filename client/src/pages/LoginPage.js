import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('name', response.data.user.name);
      localStorage.setItem('rollNumber', response.data.user.rollNumber);
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid email or password');
      console.error('Login error:', err);
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
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 0 20px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '400px',
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
        <form onSubmit={handleLogin} style={formStyle}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px', color: colors.darkPurple }}>Login</h2>

          {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
            required
          />
          <button type="submit" style={buttonStyle}>Login</button>
          <Link to="/register" style={linkStyle}>Don't have an account? Register</Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
