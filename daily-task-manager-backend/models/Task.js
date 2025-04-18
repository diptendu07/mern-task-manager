const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  dueDate: Date,
  isCompleted: { type: Boolean, default: false },
  reminderTime: Date,
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
