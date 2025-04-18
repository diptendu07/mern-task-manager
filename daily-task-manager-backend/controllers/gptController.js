const Task = require('../models/Task');

const getDailySummary = async (req, res) => {
  try {
    const tasks = await Task.find({});
    const now = new Date();

    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const summaries = tasks.map((task) => {
      const due = new Date(task.dueDate);
      let status;

      if (task.isCompleted) {
        status = 'Completed';
      } else if (due < now) {
        status = 'Overdue';
      } else {
        status = 'Upcoming';
      }

      return {
        title: task.title,
        dueDate: task.dueDate,
        reminder: !!task.reminderTime,
        status,
      };
    });

    // Filter tasks that are due *today* only (ignoring time)
    const tasksDueToday = tasks.filter((task) => {
      const dueDate = new Date(task.dueDate);
      return dueDate >= today && dueDate < tomorrow;
    });

    let message = '';

    if (tasksDueToday.length > 0) {
      message = `📆 You have ${tasksDueToday.length} task${tasksDueToday.length > 1 ? 's' : ''} scheduled for today. Stay focused and power through your day! 💪`;
    }

    res.json({ summaries, message });
  } catch (error) {
    console.error('Summary Error:', error.message);
    res.status(500).json({ error: 'Failed to generate summary' });
  }
};

module.exports = { getDailySummary };
