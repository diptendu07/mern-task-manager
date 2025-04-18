const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');
const gptRoutes = require('./routes/gptRoutes'); // ✅ Add this

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/tasks', taskRoutes);
app.use('/api', gptRoutes); // ✅ Mount GPT route

// Health check/test route
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: '🚀 MERN Task Manager Backend is running!',
    available_endpoints: {
      tasks: '/api/tasks',
      gpt: '/api/gpt'
    },
    database: 'Connected ✅' // This will show if MongoDB is connected when route is called
  });
});

module.exports = app;
