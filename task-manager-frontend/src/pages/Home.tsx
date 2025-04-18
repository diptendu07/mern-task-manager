import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const Home = () => {
  return (
    <div>
      <h1>📝 Daily Task Manager</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default Home;
