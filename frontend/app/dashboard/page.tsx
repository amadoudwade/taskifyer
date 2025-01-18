import { TASK_URL } from '@/lib/endpoints'
import axios from 'axios'
import React from 'react'
import { columns } from './_components/columns'
import { DataTable } from './_components/data-table'
import { verifySession } from '@/lib/auth'



const DashboardPage = async () => {

  const user = await verifySession()

const tasks = await axios.get(`${TASK_URL}/${user._id}/tasks`)


console.log({tasks});


  return (
    <div className="">

     <DataTable columns={columns} data={tasks.data} /> 
      
    </div>
    
    // <div className="grid grid-cols-5 min-h-screen">
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

