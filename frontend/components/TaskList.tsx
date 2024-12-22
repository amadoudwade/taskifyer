import { Task } from "@/app/models/Task";

type TaskListProps = {
    tasks: Task[];
    updateTask: (task: Task) => void;
    deleteTask: (taskId: number) => void;
  };
  
  export const TaskList: React.FC<TaskListProps> = ({ tasks, updateTask, deleteTask }) => {
    return (
      <div className="p-4 border rounded">
        <h2 className="text-xl font-semibold">Task List</h2>
        {tasks.length === 0 ? (
          <p className="text-gray-500">No tasks available</p>
        ) : (
          <ul className="space-y-4">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="p-4 border rounded flex items-center justify-between"
              >
                <div>
                  <h3 className="font-medium">{task.title}</h3>
                  <p className="text-sm text-gray-500">{task.description}</p>
                  <p className="text-sm text-gray-500">Priority: {task.priority}</p>
                  <p className="text-sm text-gray-500">Status: {task.status}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() =>
                      updateTask({ ...task, status: 'Completed' })
                    }
                    className="px-2 py-1 text-white bg-green-500 rounded"
                  >
                    Complete
                  </button>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="px-2 py-1 text-white bg-red-500 rounded"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  