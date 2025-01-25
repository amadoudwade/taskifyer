"use client"

import { Task} from "@/lib/type"
import { 
    ColumnDef 
    // @ts-expect-error descr must go here
} from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox"
import { DeleteTask, UpdateTask } from "./button"
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button";
import { SquareCheckBig } from 'lucide-react';
import { CircleCheckBig } from 'lucide-react';
import { ClockAlert } from 'lucide-react';
import { Tag } from 'lucide-react';
import { TriangleAlert } from 'lucide-react';
import { CalendarPlus } from 'lucide-react';
import { Hammer } from 'lucide-react';
import { Pencil } from 'lucide-react';

export const columns: ColumnDef<Task>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        
        <Button 
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        ><SquareCheckBig className="text-blue-600"/>
          Title
          <ArrowUpDown className="h-4 w-4 text-primary" />
        </Button>
      )
    },
  },
  {
    accessorKey: "description",
    header: () => {
      return (
         <span className="flex items-center text-center gap-2"><Tag className="h-4 w-4 text-red-400"/>Description</span>
      )
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        
        <Button 
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        ><CircleCheckBig className="text-green-700"/>
          Status
          <ArrowUpDown className="h-4 w-4 text-primary" />
        </Button>
      )
    }
  },
  {
    accessorKey: "priority",
    header: ({ column }) => {
      return (
        
        <Button 
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        ><ClockAlert className="text-orange-400"/>
          Priority
          <ArrowUpDown className="h-4 w-4 text-primary" />
        </Button>
      )
    }
  },
  {
    accessorKey: "deadline",
    header: ({ column }) => {
      return (
        
        <Button 
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        ><TriangleAlert className="text-red-600"/>
          Deadline
          <ArrowUpDown className="h-4 w-4 text-primary" />
        </Button>
      )
    }
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        
        <Button 
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        ><CalendarPlus className="text-violet-600"/>
          Created at
          <ArrowUpDown className="h-4 w-4 text-primary" />
        </Button>
      )
    }
  },
  // {
  //   accessorKey: "updatedAt",
  //   header: ({ column }) => {
  //     return (
        
  //       <Button 
  //         variant="ghost"
  //         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
  //       ><Hammer className="text-black"/>
  //         Updated at
  //         <ArrowUpDown className="h-4 w-4 text-primary" />
  //       </Button>
  //     )
  //   }
  // },
  {
    accessorKey: "actions",
    header: ({ column }) => {
      return (
        
        <Button 
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        ><Pencil className="text-black"/>
          Actions
          <ArrowUpDown className="h-4 w-4 text-primary" />
        </Button>
      )
    },
    cell: ({row}) => { 
        const taskId = row.original._id
        
      return (
        
        <div className="flex gap-2"> <UpdateTask id={taskId} /> <DeleteTask id={taskId} /> </div>
      )
    },
  },
]