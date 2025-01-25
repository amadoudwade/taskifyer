import React from 'react'
import { DataTable } from '../_components/data-table';
import { columns } from '../_components/columns';
import axios from 'axios';
import { TASK_URL } from '@/lib/endpoints';
import { verifySession } from '@/lib/auth';

const TasksPage = async () => {

  const user = await verifySession()
  const tasks = await axios.get(`${TASK_URL}/${user._id}/tasks`)



  return (
    <div className="">

     <DataTable columns={columns} data={tasks.data} /> 
      
    </div>

  );
}

export default TasksPage