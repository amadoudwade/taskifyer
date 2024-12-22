"use client"

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { TaskForm } from '@/components/TaskForm';
import { TaskList } from '@/components/TaskList';
import { TaskStats } from '@/components/TaskStats';
import { Sidebar } from '@/components/ui/sidebar';
import { AppSidebar } from './_components/app-sidebar';


const DashboardPage = () => {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    setFilteredTasks(
      tasks.filter((task) =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [tasks, searchQuery]);

  const addTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <div>DashboardPage</div>
    
    // <div className="grid grid-cols-5 min-h-screen">
    //   <AppSidebar />
    //   <div className="col-span-4 p-6">
    //     <div className="mb-4">
    //       <input
    //         type="text"
    //         placeholder="Search tasks..."
    //         className="w-full p-2 border rounded"
    //         value={searchQuery}
    //         onChange={(e) => setSearchQuery(e.target.value)}
    //       />
    //     </div>

    //     <TaskStats tasks={tasks} />

    //     <div className="grid grid-cols-2 gap-4 mt-6">
    //       <TaskForm addTask={addTask} />
    //       <TaskList
    //         tasks={filteredTasks}
    //         updateTask={updateTask}
    //         deleteTask={deleteTask}
    //       />
    //     </div>
    //   </div>
    // </div>
  );
};

export default DashboardPage;

