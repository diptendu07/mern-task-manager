# Daily Task Manager 🚀

A full-stack task management application with AI-powered daily summaries, built with the MERN stack and mock AI integration.

# Screenshots
![Home Page](./screenshots/Home.png) 
![Summary Page](./screenshots/Summary.png) 

---

# Screen Recording
![Web App Overview](./screenshots/screen_record.gif)

## Live Demos  
🌐 **Frontend**: [https://diptendu-mern-task-manager-project.netlify.app/](https://diptendu-mern-task-manager-project.netlify.app/)  
⚙️ **Backend**: [https://mern-task-manager-gxin.onrender.com](https://mern-task-manager-gxin.onrender.com)  

---

### API Endpoints (Tested via Postman)  
All endpoints are hosted at: `https://mern-task-manager-gxin.onrender.com/api`  

| Endpoint       | Method | Description                     |  
|----------------|--------|---------------------------------|  
| `/tasks`       | `POST`   | Create a new task               |  
| `/tasks`       | `GET`    | Fetch all tasks                 |  
| `/tasks/:id`   | `GET`    | Fetch a single task by ID       |  
| `/tasks/:id`   | `PUT`    | Update a task by ID             |  
| `/tasks/:id`   | `DELETE` | Delete a task by ID             |  
| `/summary`     | `GET`    | Get AI-generated daily summary  |  

---

## Tech Stack 🛠️  
- **Frontend**: React, Vite, TypeScript  
- **Backend**: Node.js, Express.js 
- **Database**: MongoDB Atlas 
- **AI**: Mock GPT Integration  
- **Deployment**: Netlify (Frontend), Render (Backend)  

## Database Implementation 🗃️
The application uses **MongoDB Atlas** for cloud-based data storage:
- Fully-managed cloud database service
- Secure connection with environment variables
- Scalable document-based storage
- Mongoose ODM for schema validation and modeling

## Key Features ✨  
- 📝 CRUD operations for tasks  
- ⏰ Due dates and reminders  
- 🤖 Mock AI daily summaries  
- 🚀 Optimized performance with Vite  

---

## Project Structure 📂  

mern-task-manager/
├── daily-task-manager-backend/ # Node/Express backend
└── task-manager-frontend/ # React frontend

# Backend (Node/Express)
daily-task-manager-backend/
├── controllers/
│   ├── taskController.js    # Mock task CRUD operations
│   └── gptController.js     # Mock GPT responses
├── models/
│   └── Task.js              # Task schema (for consistency)
├── routes/
│   ├── taskRoutes.js        # Task endpoints
│   └── gptRoutes.js         # GPT endpoints
├── utils/
│   ├── reminderScheduler.js # Mock scheduler
├── app.js                   # Express app configuration
├── server.js                # Server entry point
├── package.json
└── README.md                # Docs explaining mock setup

# Fronetend (React)

task-manager-frontend/
├── node_modules/          # Installed dependencies
├── public/                # Static assets
│   ├── vite.svg           # Default Vite logo
│   └── (other static files like favicon.ico)
├── src/
│   ├── assets/            # Assets like images (created by Vite)
│   │   └── react.svg      # Default React logo
│   ├── components/
│   │   ├── TaskList.tsx
│   │   ├── TaskList.css   # Component-specific styles
│   │   ├── TaskForm.tsx
│   │   ├── Summary.tsx
│   │   └── Summary.css    # Component-specific styles
│   ├── pages/
│   │   ├── Home.tsx
│   │   └── SummaryPage.tsx
│   ├── services/
│   │   └── api.ts         # Axios API configuration
│   ├── types/
│   │   └── Task.ts        # TypeScript type definitions
│   ├── App.tsx            # Main App component
│   ├── App.css            # Global styles
│   ├── main.tsx           # App entry point
│   └── index.css          # Base styles
├── .gitignore             # Git ignore file
├── index.html             # Main HTML file
├── package-lock.json      # Dependency lockfile
├── package.json           # Project configuration
├── tsconfig.json          # TypeScript config
└── vite.config.ts         # Vite configuration

---

## Setup Instructions 🛠️  

### Backend  
cd daily-task-manager-backend  
npm install  
npm start  

### Frontend 
cd task-manager-frontend  
npm install  
npm run dev  

### Key Highlights:  
1. **Minimal Endpoint Table**: Clear CRUD operations in markdown table format.  
2. **Postman Emphasis**: Explicitly states endpoints are Postman-tested.  
3. **Retained Essentials**: Preserves all critical project info (tech stack, features, setup).  
4. **Clean Formatting**: Uses dividers (`---`) for better visual separation.  
------------------------------------------------------------------------------------------------------

# Developed by Diptendu Lodh