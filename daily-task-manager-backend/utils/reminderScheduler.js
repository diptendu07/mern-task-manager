const cron = require('node-cron');
const Task = require('../models/Task');

// This should ideally be triggered regularly (like every minute)
const startReminderScheduler = () => {
  cron.schedule('* * * * *', async () => {
    const now = new Date();
    const tasks = await Task.find({
      reminderTime: { $lte: now },
      isCompleted: false
    });

    tasks.forEach(task => {
      // send web push or socket notification (to be implemented)
      console.log(`🔔 Reminder for Task: ${task.title}`);
    });
  });
};

module.exports = { startReminderScheduler };
