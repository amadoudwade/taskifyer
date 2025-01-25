"use server"

import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";


export async function login(state: any, formData: FormData){
  const userSchema = z.object({
    email: z.string().email("L'adresse e-mail est invalide"),
    password: z.string().min(6, "Le mot de passe doit contenir au moins 6 caractères")
  });
try {
    const validatedFields = userSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password')
      })
     
      // Return early if the form data is invalid
      if (!validatedFields.success) {


        return {
          errors: validatedFields.error.flatten().fieldErrors,
        }
      }
    //   return {type: "success", message: "login"}
    const {email, password} = validatedFields.data
    const res = await axios.post("http://localhost:8000/api/auth/login", {email, password})
      
    // stockage des cookies
    if (res.data.token) {
      const token = res.data.token
      cookies().set('token', token, {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      path: '/',
      secure: process.env.NODE_ENV === "production"
    })
  }
      

} catch (error: any) {
    return {type: "error", message: error?.response?.data?.message}
}

redirect('/dashboard')

}

// Fonction d'enregistrement
export async function register(state: any, formData: FormData): Promise<void> {
  try {

    // Extraction et validation des données avec Zod
    // Schéma de validation avec Zod
    const userSchema = z.object({
      first_name: z.string().min(1, "Le prénom est requis"),
      last_name: z.string().min(1, "Le nom est requis"),
      email: z.string().email("L'adresse e-mail est invalide"),
      password: z.string().min(6, "Le mot de passe doit contenir au moins 6 caractères"),
      telephone: z.string().regex(/^\+?[0-9]{7,15}$/, "Le numéro de téléphone est invalide"),
    });
    
    const data = {
      first_name: formData.get("first_name")?.toString() || "",
      last_name: formData.get("last_name")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      password: formData.get("password")?.toString() || "",
      telephone: formData.get("telephone")?.toString() || "",
    };

    // Validation des données
    const validatedData = userSchema.parse(data);

    // Logique d'envoi vers une API ou traitement
    const response = await fetch("http://localhost:8000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(validatedData),
    });

    if (!response.ok) {
      throw new Error("Erreur lors de l'enregistrement de l'utilisateur");
    }

    
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Erreurs de validation :", error.errors);
    } else {
      console.error("Erreur :", error);
    }

    throw error; // Relancer l'erreur pour une gestion plus haut dans la pile
  }

  console.log("Utilisateur enregistré avec succès !");

  redirect('/auth/login')
}

export const logout = async (state: any, formdata: FormData) => {

  try {
      
      cookies().delete('token')

  } catch (error) {
      
      return { type: 'error', message: error }
  }

  redirect('/auth/login')
} 
