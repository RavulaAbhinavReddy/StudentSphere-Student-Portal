import React from 'react';
import Header from '../components/Header';

const facultyMembers = [
  { name: 'Dr. B Ravikrishna', title: 'Head of the Department' },
  { name: 'Dr.N.Murali Krishna', title: 'Professor' },
  { name: 'Mr.T. Sai Lalith Prasad', title: 'Assistant Professor' },
  { name: 'Mrs.Lavanya Kumari', title: 'Assistant Professor' },
  { name: 'Mrs.Sai Sree', title: 'Assistant Professor' },
  { name: 'Mrs.Yamini', title: 'Assistant Professor' },
  { name: 'Mrs.Sindhuja', title: 'Assistant Professor' },
  { name: 'Mr.Naresh', title: 'Assistant Professor' },
  { name: 'Mr.Ramana Reddy', title: 'Assistant Professor' },
  { name: 'Mr.Somesh', title: 'DTP Operator' },
];

const FacultyPage = () => {
  const hod = facultyMembers.find(member => member.title.includes('Head'));
  const otherFaculty = facultyMembers.filter(member => member !== hod);

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', color: '#333' }}>
      <Header />

      <div style={{ padding: '40px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', color: '#4B0082', marginBottom: '10px' }}>
          Our Faculty
        </h2>
        <p style={{ textAlign: 'center', color: '#555', maxWidth: '700px', margin: '0 auto 40px', fontSize: '1.1rem' }}>
          The Department of Artificial Intelligence and Data Science boasts an exceptional faculty team passionate about innovation, academic excellence, and student success.
        </p>

        {/* HOD Section */}
        {hod && (
          <div style={{ marginBottom: '60px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.8rem', color: '#d35400', marginBottom: '20px', fontFamily: 'Georgia, serif' }}>
              Head of the Department
            </h3>
            <div
              style={{
                backgroundColor: '#fff8e1',
                border: '3px solid #e67e22',
                borderRadius: '15px',
                padding: '30px 20px',
                width: '320px',
                margin: '0 auto',
                boxShadow: '0 6px 15px rgba(0,0,0,0.1)',
              }}
            >
              <h2 style={{ color: '#e65100', fontSize: '1.6rem', marginBottom: '10px', fontFamily: 'Georgia, serif' }}>
                {hod.name}
              </h2>
              <p style={{ color: '#8e44ad', fontWeight: 'bold', fontSize: '1.1rem' }}>
                {hod.title}
              </p>
            </div>
          </div>
        )}

        {/* Other Faculty Section */}
        <h3 style={{ textAlign: 'center', color: '#4B0082', marginBottom: '30px' }}>Faculty Members</h3>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '30px',
          }}
        >
          {otherFaculty.map((faculty, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#f0f0ff',
                border: '2px solid #4B0082',
                borderRadius: '12px',
                padding: '20px',
                width: '260px',
                textAlign: 'center',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              }}
            >
              <h3 style={{ color: '#4B0082', marginBottom: '10px' }}>{faculty.name}</h3>
              <p style={{ color: '#1E90FF', fontWeight: '500' }}>{faculty.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacultyPage;
