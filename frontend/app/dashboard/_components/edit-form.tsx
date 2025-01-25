
'use client'

import { handleUpdateFormTask } from "@/actions/task"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { User, Task } from "@/lib/type"
import { Label } from "@radix-ui/react-label"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useFormState } from "react-dom"
import { toast } from "sonner"
import { Textarea } from "@/components/ui/textarea"




export const UpdateTaskForm = ({task}: { task : Task }) => {

    const [state, formAction] = useFormState(handleUpdateFormTask, undefined)
    const router = useRouter()

    useEffect(() => {
        if (state?.type === 'success') {
            toast.success(state.message)
            router.push('/dashboard')
        }

        if (state?.type === 'error') {
            toast.error(state.message)
        }
    }, [state])
   
    
    return (
        <>
            <form action={formAction} className="flex flex-col gap-4 w-96 mx-auto p-5 border rounded-md">
                <Input type="hidden" name="taskId" value={task._id}/>
                <div className="flex flex-col gap-2">
                    <Label>Title</Label>
                    <Input placeholder="Title" name="title" defaultValue={task.title}  className="w-80" />
                    {
                        state?.errors?.title && (
                                <span className="text-red-500">{ state.errors.title }</span>
                        )
                    }
                </div>
                <div className="flex flex-col gap-2">
                    <Label>Description</Label>
                    <Textarea placeholder="Description" name="description" defaultValue={task.description} className="w-80" />
                    {
                        state?.errors?.description && (
                                <span className="text-red-500">{ state.errors.description }</span>
                        )
                    }
                </div>
                <div className="flex flex-col gap-2">
                    <Label>Status</Label>
                    <Select name="status" defaultValue={task.status} >
                        <SelectTrigger className="w-80">
                            <SelectValue  placeholder={task.status} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="To-do">To-do</SelectItem>
                            <SelectItem value="In-progress">In-progress</SelectItem>
                            <SelectItem value="Completed">Completed</SelectItem>
                            <SelectItem value="Overdue">Overdue</SelectItem>    
                        </SelectContent>
                    </Select>
                    {
                        state?.errors?.status && (
                                <span className="text-red-500">{ state.errors.status }</span>
                        )
                    }
                </div>
                <div className="flex flex-col gap-2">
                    <Label>Priority</Label>
                    <Select name="priority" defaultValue={task.priority} >
                        <SelectTrigger className="w-80">
                            <SelectValue  placeholder={task.priority} />
                        </SelectTrigger>
                        <SelectContent>
                        <SelectItem value="Low">Low</SelectItem>
                            <SelectItem value="Normal">Normal</SelectItem>
                            <SelectItem value="High">High</SelectItem>
                            <SelectItem value="Urgent">Urgent</SelectItem> 
                        </SelectContent>
                    </Select>
                    {
                        state?.errors?.status && (
                                <span className="text-red-500">{ state.errors.priority }</span>
                        )
                    }
                </div>
                <div>
                    <Button type="submit">Modifier</Button>
                </div>
            </form>
        </>
    )
}