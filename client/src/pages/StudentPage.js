import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const HomePage = () => {
  const colors = {
    darkPurple: '#3b0076',
    mediumPurple: '#5b2a86',
    blue: '#4c84a9',
    lightBlue: '#85a1c8',
    white: '#ffffff',
    gradientBg: 'linear-gradient(to right, #6a11cb, #2575fc)',
  };

  const containerStyle = {
    minHeight: '100vh',
    background: colors.gradientBg,
    fontFamily: 'Segoe UI, sans-serif',
    color: colors.white,
    display: 'flex',
    flexDirection: 'column',
  };

  const contentWrapper = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px 20px',
    backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1), transparent 60%)',
  };

  const headingStyle = {
    fontSize: '3.2rem',
    marginBottom: '15px',
    fontWeight: '800',
    lineHeight: '1.3',
    textShadow: '2px 2px 5px rgba(0,0,0,0.2)',
  };

  const subheadingStyle = {
    fontSize: '1.5rem',
    marginBottom: '40px',
    color: colors.white,
    opacity: 0.9,
  };

  const buttonGroupStyle = {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  const buttonBase = {
    padding: '14px 36px',
    fontSize: '1.1rem',
    textDecoration: 'none',
    borderRadius: '10px',
    transition: 'all 0.3s ease',
    fontWeight: 'bold',
    letterSpacing: '0.5px',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
  };

  const loginButton = {
    ...buttonBase,
    backgroundColor: '#ff6b6b',
    color: '#fff',
  };

  const registerButton = {
    ...buttonBase,
    backgroundColor: '#1dd1a1',
    color: '#fff',
  };

  const hoverEffect = (e) => {
    e.target.style.transform = 'scale(1.06)';
    e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
  };

  const removeHover = (e) => {
    e.target.style.transform = 'scale(1)';
    e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
  };

  return (
    <div style={containerStyle}>
      <Header />
      <div style={contentWrapper}>
        <h1 style={headingStyle}>
          Welcome to the Student Portal
        </h1>
        <p style={subheadingStyle}>
          Access academic resources, updates, and more — all in one place.
        </p>
        <div style={buttonGroupStyle}>
          <Link
            to="/login"
            style={loginButton}
            onMouseEnter={hoverEffect}
            onMouseLeave={removeHover}
          >
            Login
          </Link>
          <Link
            to="/register"
            style={registerButton}
            onMouseEnter={hoverEffect}
            onMouseLeave={removeHover}
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
