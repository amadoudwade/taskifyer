import React from 'react'
import { DataTable } from '../_components/data-table';
import { columns } from '../_components/columns';
import axios from 'axios';
import { TASK_URL } from '@/lib/endpoints';

const TasksPage = async () => {
  const tasks = await axios.get(TASK_URL)



  return (
    <div className="">

     <DataTable columns={columns} data={tasks.data.reverse()} /> 
      
    </div>

  );
}

export default TasksPage