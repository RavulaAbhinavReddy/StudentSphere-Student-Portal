// client/src/components/Home.js
import React, { useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  // useEffect to make the API call when the component mounts
  useEffect(() => {
    // Axios GET request to the backend
    axios.get('http://localhost:5000')
      .then((response) => {
        // Log the response from the backend
        console.log(response.data);
      })
      .catch((error) => {
        // Log any errors
        console.error('There was an error making the request!', error);
      });
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      <h1>Welcome to the Student Portal</h1>
    </div>
  );
};

export default Home;
