import { useEffect, useState } from 'react';
import { fetchSummary } from '../services/api';
import './Summary.css';

interface TaskSummary {
  title: string;
  dueDate: string;
  reminder: boolean;
  status: 'Overdue' | 'Upcoming' | 'Completed';
}

const Summary = () => {
  const [summaries, setSummaries] = useState<TaskSummary[]>([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchSummary()
      .then((res) => {
        setSummaries(res.data.summaries || []);
        setMessage(res.data.message || '');
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="summary-container">
      <h2 className="summary-header">🧠 Daily Summary</h2>
      {message && <p className="summary-message">{message}</p>}
      {summaries.length > 0 ? (
        summaries.map((task, idx) => (
          <div className="summary-card" key={idx}>
            <div className="summary-title">📌 {task.title}</div>
            <div className="summary-date">Due: {new Date(task.dueDate).toLocaleString()}</div>
            <div className="summary-details">
              {task.reminder && <span className="summary-reminder">🔔 Reminder</span>}
              <span className={`summary-status ${task.status.toLowerCase()}`}>
                {task.status === 'Overdue' ? '⚠️ Overdue' : task.status}
              </span>
            </div>
          </div>
        ))
      ) : (
        <p>No task summary available.</p>
      )}
    </div>
  );
};

export default Summary;
