'use server'

import { TASK_URL } from '@/lib/endpoints'
import axios from 'axios'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import { cookies } from 'next/headers'
import { verifySession } from '@/lib/auth'

const formSchema = z.object({
    title: z.string().min(1, {message: "Veuillez saisir un titre"}),
    description: z.string().min(1, {message: "Veuillez saisir la description de la tâche à effectuer"}),
    status: z.string().min(1,{message: "Selectionnez le statut de la tâche!"}),
    priority: z.string().min(1,{message: "Selectionnez la priorité de la tâche!"}),
    deadline: z.coerce.date()
})





// export const handleCreateFormTask = async (state : any, formData: FormData) => {
//     const user = verifySession();
    
//     try {
//         const formField = formSchema.safeParse({
//             title: formData.get('title'),
//             description: formData.get('description'),
//             status: formData.get('status'),
//             priority: formData.get('priority'),
//             deadline: formData.get('deadline')
//         })
        
//         console.log({formField});
        
//         if (!formField.success) {
//             return {
//                 errors: formField.error.flatten().fieldErrors
//             }
//         }

        
//         const { title, description, status, priority, deadline } = formField.data
//         console.log(formField);
        
//         const res = await axios.post(TASK_URL,
//             {
//                 title,
//                 description,
//                 status,
//                 priority,
//                 deadline,
//                 user
//             },
//             {
//                 headers:{
//                     Authorization: `${cookies().get('token')?.value}`
//                 }
//             }
//         )
//         console.log({res}); 
        
        
//     } catch (error: any) {
        
//         console.log(error?.response.data);
        
//         return { type : "error", message: error?.response.data.msg }
        
//     }
//     revalidatePath('/dashboard/tasks')

//     return { type: 'success', message:"Task created!" }
// }


export const handleUpdateFormTask = async (state: any, formData: FormData) => {
    const taskId = formData.get('taskId')
    
    try {
        const currentUser = await verifySession()
        
        const formField = formSchema.safeParse({
            title: formData.get('title'),
            description: formData.get('description'),
            status: formData.get('status'),
            priority: formData.get('priority'),
            deadline: formData.get('deadline')
        })
        
        
        if (!formField.success) {
            return {
                errors: formField.error.flatten().fieldErrors
            }
        }

        const { title, description, status, priority, deadline } = formField.data
        // ${TASK_URL}/${user._id}/tasks
        await axios.put(`${TASK_URL}/${currentUser._id}/tasks/${taskId}`,
            {
                title,
                description,
                status,
                priority,
                deadline
            },
            {
                headers:{
                    Authorization: `${cookies().get('token')?.value}`
                }
            }
        )
        
        
    } catch (error: any) {
        
        return { type: 'error', message: error?.response?.data?.error?.errorResponse.errmsg }
        
    }
    revalidatePath('/dashboard/tasks')
    return { type: 'success', message: "Update success!" }
    
}

export const handleDeleteFormTask = async (id: string) => {
    try {
        const currentUser = await verifySession()
        await axios.delete(`${TASK_URL}/${currentUser._id}/tasks/${id}`,
            {
                headers:{
                    Authorization: `${cookies().get('token')?.value}`
                }
            })
        
    } catch (error:any) {
        return { type: 'error', message: error?.response?.data?.message }
        
    }
    revalidatePath('/dashboard/tasks')    
}

export const handleCreateFormTask = async (state: any, formData: FormData) => {
    try {
        const currentUser = await verifySession()
        console.log({currentUser});
        
        if (!currentUser) {
            return { type: "error", message: "Utilisateur non authentifié." };
        }
        console.log(formData);
        
        // Validation des champs du formulaire
        const formField = formSchema.safeParse({
            title: formData.get("title"),
            description: formData.get("description"),
            status: formData.get("status"),
            priority: formData.get("priority"),
            deadline: formData.get("deadline"),
        });

        if (!formField.success) {
            return { type: "error", errors: formField.error.flatten().fieldErrors };
        }

        const { title, description, status, priority, deadline } = formField.data;
        
        
        // Création de la tâche via l'API
        const response = await axios.post(
            `${TASK_URL}/${currentUser._id}/tasks`,
            { title, description, status, priority, deadline, user: currentUser._id },
            {
                headers: {
                    Authorization: `Bearer ${cookies().get("token")?.value}`,
                },
            }
        );

        console.log("Réponse API :", response.data);

        // Réinitialiser le cache ou invalider la page correspondante
        revalidatePath("/dashboard/tasks");

        return { type: "success", message: "Tâche créée avec succès !" };
    } catch (error: any) {
        // console.log(error);
        
        // console.error("Erreur lors de la création de la tâche :", error);

        // Gérer les erreurs provenant de l'API
        if (error.response) {
            return { type: "error", message: error.response.data?.msg || "Erreur serveur." };
        }

        return { type: "error", message: "Erreur inattendue." };
    }
};