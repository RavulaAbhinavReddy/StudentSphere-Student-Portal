const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Basic check for Mongo URI and JWT secret
if (!MONGO_URI || !process.env.JWT_SECRET) {
  console.error('❌ Missing environment variables: MONGO_URI or JWT_SECRET');
  process.exit(1);
}

// Middleware
app.use(cors({ origin: 'http://localhost:3000' })); // Enable CORS for frontend running at localhost:3000
app.use(express.json()); // Parse incoming JSON requests

// Routes
app.use('/api/auth', authRoutes); // Authentication routes

// Optional: Health check route
app.get('/', (req, res) => {
  res.send('✅ Student Portal API is running');
});

// Connect to MongoDB and start server
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => {
      console.log(`🚀 Server running at: http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection failed:', err.message);
    process.exit(1);
  });
