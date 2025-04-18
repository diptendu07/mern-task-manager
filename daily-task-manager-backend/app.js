const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');
const gptRoutes = require('./routes/gptRoutes'); // ✅ Add this

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/tasks', taskRoutes);
app.use('/api', gptRoutes); // ✅ Mount GPT route

module.exports = app;
