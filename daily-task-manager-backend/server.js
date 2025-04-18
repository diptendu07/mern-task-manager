const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config();
const { startReminderScheduler } = require('./utils/reminderScheduler');

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB and start server
mongoose.connect(MONGO_URI, {
  
})
.then(() => {
  console.log('✅ MongoDB connected');
  
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);

    // Start the reminder scheduler once the server is up
    startReminderScheduler();
  });
})
.catch((err) => {
  console.error('❌ MongoDB connection error:', err.message);
});
