export interface Task {
    _id: string;
    title: string;
    dueDate: string;
    reminder: boolean;
  }
  
  export interface NewTask {
    title: string;
    dueDate: string;
    reminder: boolean;
  }
  