import React from 'react';
import Header from '../components/Header';

const EventsPage = () => {
  const events = [
    {
      title: 'TechFest 2025',
      date: '2025-07-05',
      venue: 'Main Auditorium',
      description: 'Annual technical fest with hackathons, coding contests, and tech talks.',
      status: 'upcoming',
    },
    {
      title: 'Placement Orientation',
      date: '2025-06-15',
      venue: 'Seminar Hall B',
      description: 'Guidelines for final year students about placement process and companies.',
      status: 'upcoming',
    },
    {
      title: 'AI & Data Science Seminar',
      date: '2025-04-28',
      venue: 'B-Block Conference Room',
      description: 'Guest lecture on latest trends in AI by industry experts.',
      status: 'completed',
    },
    {
      title: 'Cultural Fest: Kalakriti',
      date: '2025-03-21',
      venue: 'Open Stage',
      description: 'A cultural showcase of music, dance, and drama.',
      status: 'completed',
    },
  ];

  return (
    <div style={pageStyle}>
      <Header />
      <div style={contentStyle}>
        <h1 style={titleStyle}>📅 Campus Events</h1>

        <div style={eventsGrid}>
          {events.map((event, index) => (
            <div key={index} style={eventCard(event.status)}>
              <h2 style={eventTitle}>{event.title}</h2>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Venue:</strong> {event.venue}</p>
              <p>{event.description}</p>
              <p style={{ fontWeight: 'bold', color: event.status === 'upcoming' ? '#28a745' : '#6c757d' }}>
                {event.status === 'upcoming' ? '🔔 Upcoming' : '✔ Completed'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Shared theme colors
const colors = {
  background: '#f7f9fc',
  darkText: '#2c3e50',
  upcomingBg: '#e6fffa',
  upcomingBorder: '#20c997',
  completedBg: '#f1f1f1',
  completedBorder: '#bbb',
};

const pageStyle = {
  minHeight: '100vh',
  backgroundColor: colors.background,
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
  textAlign: 'center',
  marginBottom: '30px',
  color: colors.darkText,
};

const eventsGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '20px',
};

const eventCard = (status) => ({
  backgroundColor: status === 'upcoming' ? colors.upcomingBg : colors.completedBg,
  padding: '20px',
  borderRadius: '10px',
  borderLeft: `5px solid ${status === 'upcoming' ? colors.upcomingBorder : colors.completedBorder}`,
  boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
});

const eventTitle = {
  marginBottom: '10px',
  color: colors.darkText,
};

export default EventsPage;
