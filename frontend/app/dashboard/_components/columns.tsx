"use client"

import { Button } from "@/components/ui/button"
import { Task, User } from "@/lib/type"
import { 
    ColumnDef 
    // @ts-expect-error descr must go here
} from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react"
import { DeleteTask, UpdateTask } from "./button"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
// export type Product = {
//   name: string
//   price: number
//   category: string
// }


export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "title",
    header: "Title"
  },
  {
    accessorKey: "description",
    header: "Description"
  },
  {
    accessorKey: "status",
    header: "Status"
  },
  {
    accessorKey: "priority",
    header: "Priority"
  },
  {
    accessorKey: "deadline",
    header: "Deadline"
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({row}) => { 
        const taskId = row.original._id
        
      return (
        <div className="flex gap-2"> <UpdateTask id={taskId} /> <DeleteTask id={taskId} /> </div>
      )
    },
  },
]