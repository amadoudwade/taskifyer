'use client'

import { handleCreateFormTask } from "@/actions/task"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { User } from "@/lib/type"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useFormState } from "react-dom"
import { toast } from "sonner"
import { Textarea } from "@/components/ui/textarea"





export const CreateTaskForm = () => {

    const [state, FormAction] = useFormState(handleCreateFormTask, undefined)
    const [title, setName] = useState("")
    const [description, setDescription] = useState("")
    const [status, setStatus] = useState("")
    const [priority, setPriority] = useState("")
    const [deadline, setDeadline] = useState("")
    const router = useRouter()
    console.log(state?.errors);
    
    useEffect(()=> {
        if (state?.type === 'success') {
            toast.success(state.message)
            router.push('/dashboard/tasks')
        }

        if (state?.type === 'error') {
            toast.error(state.message)
        }
    }, [state])
    
    return (
        <>
            <form action={FormAction} className="flex flex-col gap-4 w-96 mx-auto p-5 border rounded-md">
                <div className="flex flex-col gap-2">
                    <Label>Title</Label>
                    <Input placeholder="Title" name="title" value={title} onChange={(e) => setName(e.target.value)} className="w-80" />
                    {
                        state?.errors?.title && (
                                <span className="text-red-500">{ state.errors.title }</span>
                        )
                    }
                </div>
                <div className="flex flex-col gap-2">
                    <Label>Description</Label>
                    <Textarea placeholder="Description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-80" />
                    {
                        state?.errors?.description && (
                                <span className="text-red-500">{ state.errors.description }</span>
                        )
                    }
                </div>
                    <div className="flex flex-col gap-2">
                    <Label>Status</Label>
                    <Select name="status" defaultValue={status} >
                        <SelectTrigger className="w-80">
                            <SelectValue  placeholder={status} />
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
                    <Select name="priority" defaultValue={priority} >
                        <SelectTrigger className="w-80">
                            <SelectValue  placeholder={priority} />
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
                <div className="flex flex-col gap-2">
                    <Label>Deadline</Label>
                    <Input placeholder="Deadline" name="deadline" value={deadline} onChange={(e) => setDeadline(e.target.value)} className="w-80" />
                    {
                        state?.errors?.title && (
                                <span className="text-red-500">{ state.errors.title }</span>
                        )
                    }
                </div>
                <div>
                    <Button type="submit">Ajouter la tâche</Button>
                </div>
            </form>
        </>
    )
}