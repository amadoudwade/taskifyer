
import { TASK_URL } from '@/lib/endpoints'
import axios from 'axios'
import React from 'react'
import { UpdateTaskForm } from '../../_components/edit-form'
import { cookies } from 'next/headers'

const UpdatePage = async ({ params }: { params: Promise<{ id: string }> }) => {
  

    const id = (await params).id

    const task = await axios.get(`${TASK_URL}/${id}`,
      {
          headers:{
              Authorization: `${cookies().get('token')?.value}`
          }
      })
 
    

  return (
    <div className='flex p-36'>
        <UpdateTaskForm task={task.data} />
    </div>
  )
  
}

export default UpdatePage