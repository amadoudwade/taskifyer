
import { TASK_URL } from '@/lib/endpoints'
import axios from 'axios'
import React from 'react'
import { UpdateTaskForm } from '../../_components/edit-form'
import { cookies } from 'next/headers'
import { verifySession } from '@/lib/auth'

const UpdatePage = async ({ params }: {  params: Promise<{ id: string }> }) => {
  

    // const { id } = params;
    const id = (await params).id
    console.log({id});
    
    const user = await verifySession()
    console.log({user});
    

    const task = await axios.get(`${TASK_URL}/${user._id}/tasks/${id}`)
    
    

  return (
    <div className='flex p-36'>
        <UpdateTaskForm task={task.data} />
    </div>
  )
  
}

export default UpdatePage