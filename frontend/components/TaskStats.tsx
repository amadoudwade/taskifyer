import { Task } from "@/app/models/Task";

type TaskStatsProps = {
    tasks: Task[];
  };
  
  export const TaskStats: React.FC<TaskStatsProps> = ({ tasks }) => {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter((task) => task.status === 'Completed').length;
    const inProgressTasks = tasks.filter((task) => task.status === 'In-Progress').length;
    const toDoTasks = tasks.filter((task) => task.status === 'To-Do').length;
  
    return (
      <div className="grid grid-cols-4 gap-4">
        <div className="p-4 border rounded bg-gray-100">
          <h3 className="text-lg font-semibold">Total Tasks</h3>
          <p className="text-2xl font-bold">{totalTasks}</p>
        </div>
        <div className="p-4 border rounded bg-green-100">
          <h3 className="text-lg font-semibold">Completed</h3>
          <p className="text-2xl font-bold">{completedTasks}</p>
        </div>
        <div className="p-4 border rounded bg-yellow-100">
          <h3 className="text-lg font-semibold">In Progress</h3>
          <p className="text-2xl font-bold">{inProgressTasks}</p>
        </div>
        <div className="p-4 border rounded bg-blue-100">
          <h3 className="text-lg font-semibold">To-Do</h3>
          <p className="text-2xl font-bold">{toDoTasks}</p>
        </div>
      </div>
    );
  };
  