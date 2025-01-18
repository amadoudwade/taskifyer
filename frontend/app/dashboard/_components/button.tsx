import { handleDeleteFormTask } from "@/actions/task"
import { Button } from "@/components/ui/button"
import Link from "next/link"


export const CreateTask = () => {
    return(
        <Button> <Link href={'/dashboard/tasks/create'}>Ajouter une tâche</Link></Button>
    )
}

export const UpdateTask = ({ id }: {id: string}) => {
    return(
        <Button variant={"secondary"}> <Link href={`/dashboard/tasks/${id}`}>Update</Link></Button>
    )
}

export const DeleteTask = ({ id }: {id: string}) => {

    const formAction = handleDeleteFormTask.bind(null, id)

    return(
        <>
            <form action ={formAction}>
                <Button type="submit" variant={"destructive"}>Delete</Button>
            </form>
        </>
    )
}