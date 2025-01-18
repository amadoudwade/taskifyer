import React from 'react'
import { CreateTaskForm } from '../../_components/form'
import axios from 'axios'
import { TASK_URL } from '@/lib/endpoints'
import { cookies } from 'next/headers'

const CreatePage = async () => {
  
  const user = await axios.get( TASK_URL,
    {
        headers:{
            Authorization: `${cookies().get('token')?.value}`
        }
    }) 
  if (!user.data) {
      return { message: 'Error'}
  }
  return (
    <div>
      <CreateTaskForm />

    </div>
  )
}

export default CreatePage