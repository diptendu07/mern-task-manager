import { useState } from 'react';
import { createTask } from '../services/api';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [reminder, setReminder] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !dueDate) return;

    try {
      await createTask({ title, dueDate, reminder });
      setTitle('');
      setDueDate('');
      setReminder(false);
      alert('✅ Task added!');
    } catch (error) {
      console.error(error);
      alert('❌ Failed to add task.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>➕ Add Task</h2>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      /><br />
      <input
        type="datetime-local"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      /><br />
      <label>
        <input
          type="checkbox"
          checked={reminder}
          onChange={(e) => setReminder(e.target.checked)}
        /> Set Reminder
      </label><br />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
