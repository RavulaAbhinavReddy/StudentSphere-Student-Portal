import React from 'react';

const PlacementsPage = () => {
  const placements = [
    {
      company: 'TCS',
      role: 'Software Engineer',
      eligibility: '60% in 10th, Inter, and B.Tech; No active backlogs',
      lastDate: '2025-07-10',
      status: 'Open',
    },
    {
      company: 'Infosys',
      role: 'Systems Engineer',
      eligibility: 'Minimum 65% aggregate, all branches eligible',
      lastDate: '2025-06-25',
      status: 'Open',
    },
    {
      company: 'Capgemini',
      role: 'Analyst',
      eligibility: 'No backlogs, 60% in UG',
      lastDate: '2025-05-20',
      status: 'Closed',
    },
    {
      company: 'Wipro',
      role: 'Project Engineer',
      eligibility: 'B.Tech (All branches), 6.0 CGPA+',
      lastDate: '2025-05-05',
      status: 'Closed',
    },
  ];

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>💼 Placement Opportunities</h1>

      <div style={placementsGrid}>
        {placements.map((item, index) => (
          <div key={index} style={placementCard(item.status)}>
            <h2>{item.company}</h2>
            <p><strong>Role:</strong> {item.role}</p>
            <p><strong>Eligibility:</strong> {item.eligibility}</p>
            <p><strong>Last Date:</strong> {item.lastDate}</p>
            <p style={{ fontWeight: 'bold', color: item.status === 'Open' ? 'green' : 'red' }}>
              {item.status === 'Open' ? '🟢 Open for Application' : '🔴 Closed'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Styles
const pageStyle = {
  padding: '40px',
  fontFamily: 'Segoe UI, sans-serif',
  backgroundColor: '#f8f9fa',
  minHeight: '100vh',
};

const titleStyle = {
  fontSize: '2rem',
  textAlign: 'center',
  marginBottom: '30px',
  color: '#2c3e50',
};

const placementsGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '20px',
};

const placementCard = (status) => ({
  backgroundColor: '#ffffff',
  padding: '20px',
  borderLeft: `6px solid ${status === 'Open' ? '#28a745' : '#dc3545'}`,
  borderRadius: '10px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
});

export default PlacementsPage;
