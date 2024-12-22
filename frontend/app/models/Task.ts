export type Task = {
    id: number;
    title: string;
    description: string;
    priority: 'Low' | 'Medium' | 'High';
    status: 'To-Do' | 'In-Progress' | 'Completed';
    createdAt: string;
  };