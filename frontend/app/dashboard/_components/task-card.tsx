import React from 'react'
import { SquareCheckBig } from 'lucide-react';
import { CircleCheckBig } from 'lucide-react';
import { ClockAlert } from 'lucide-react';
import { Tag } from 'lucide-react';
import { TriangleAlert } from 'lucide-react';

export const TaskCard = (props) => {
  return (
    <div className='flex gap-8'>
        <div className="card bg-base-100 w-96 shadow-lg rounded-md hover:scale-105">
        <figure>
    <img
      src="https://vervoe.com/wp-content/uploads/2022/01/job-task-analysis.jpg"
      
      //  src="https://imageio.forbes.com/specials-images/dam/imageserve/1092571024/960x0.jpg?height=474&width=711&fit=bounds"
      //  src="https://activecollab.com/upload/blog/756/cover.png"
      // src="https://able.ac/blog/content/images/2022/08/calendar-with-thumbtacks.jpeg"
      alt="Task" />
  </figure>
          <div className="card-body p-2">
          <h1 className="card-title flex gap-1 items-center"><SquareCheckBig className="text-back w-4 h-4"/>Title: {props.title}</h1>
          <p className="flex gap-1 items-center"><Tag className="text-black w-4 h-4"/>Description: {props.description}</p>
          <div className="badge badge-primary flex gap-1 items-center"><CircleCheckBig className="text-green-700 w-4 h-4"/>Satuts: {props.status}</div>
          <div className="badge badge-primary flex gap-1 items-center"><ClockAlert className="text-orange-400 w-4 h-4"/>Priority: {props.priority}</div>
          <div className="badge badge-primary flex gap-1 items-center"><TriangleAlert className="text-red-600 w-4 h-4"/>Deadline: {props.deadline}</div>
          </div>
        </div>
    </div>
  )
}

