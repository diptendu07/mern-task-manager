import axios from 'axios';
import { NewTask } from '../types/Task';

const API = axios.create({
  baseURL: 'https://mern-task-manager-gxin.onrender.com/api',
});

export const fetchTasks = () => API.get('/tasks');
export const createTask = (task: NewTask) => API.post('/tasks', task);
export const fetchSummary = () => API.get('/summary');
