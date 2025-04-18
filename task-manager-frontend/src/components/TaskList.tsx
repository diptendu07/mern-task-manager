import { useEffect, useState } from 'react';
import { fetchTasks } from '../services/api';
import { Task } from '../types/Task';
import './TaskList.css'; // Make sure this CSS file exists

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    fetchTasks()
      .then((res) => setTasks(res.data))
      .catch((err) => console.error(err));
  }, []);

  const now = new Date();

  const visibleTasks = showAll
    ? tasks
    : tasks.filter((task) => new Date(task.dueDate) >= now);

  return (
    <div className="task-list-container">
      <h2 className="task-list-header">📋 Task List</h2>
      <button className="toggle-button" onClick={() => setShowAll(!showAll)}>
        {showAll ? '🔍 Show Upcoming Only' : '📂 Show All Tasks'}
      </button>

      <div className="task-items">
        {visibleTasks.map((task) => {
          const dueDate = new Date(task.dueDate);
          const isOverdue = dueDate < now;

          return (
            <div key={task._id} className={`task-item ${isOverdue ? 'overdue' : 'upcoming'}`}>
              <div className="task-title">{task.title}</div>
              <div className="task-date">Due: {dueDate.toLocaleString()}</div>
              <div className="task-info">
                {task.reminder && <span className="reminder">🔔 Reminder Set</span>}
                {isOverdue && <span className="overdue-warning">⚠️ Overdue</span>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TaskList;
