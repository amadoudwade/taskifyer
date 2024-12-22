import { useState } from 'react';
import { Task } from '@/app/models/Task';

type TaskFormProps = {
  addTask: (task: Task) => void;
};

export const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState<'Low' | 'Medium' | 'High'>('Low');
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!title.trim()) return alert('Task title is required');
  
      const newTask: Task = {
        id: Date.now(),
        title,
        description,
        priority,
        status: 'To-Do',
        createdAt: new Date().toISOString(),
      };
      addTask(newTask);
      setTitle('');
      setDescription('');
      setPriority('Low');
    };
  
    return (
      <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded">
        <h2 className="text-xl font-semibold">Add Task</h2>
        <div>
          <label className="block text-sm font-medium">Task Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Priority</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value as 'Low' | 'Medium' | 'High')}
            className="w-full p-2 border rounded"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded">
          Add Task
        </button>
      </form>
    );
  };
