import React from 'react'
import { CreateTaskForm } from '../../_components/form'
import axios from 'axios'
import { TASK_URL } from '@/lib/endpoints'
import { cookies } from 'next/headers'

const CreatePage = async () => {
  
  return (
    <div className='flex justify-center items-center h-full'>
      <CreateTaskForm/>

    </div>
  )
}

export default CreatePage