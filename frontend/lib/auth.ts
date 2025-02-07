"use server"

import axios from "axios";
import { cookies } from "next/headers"


export const verifySession = async () => {
    try {
        // Récupération du token depuis les cookies
        const token = cookies().get("token")?.value;

        if (!token) {
            console.warn("Aucun token trouvé dans les cookies.");
            return null;
        }

        // Envoi de la requête pour vérifier la session
        const response = await axios.get("http://localhost:8000/api/auth/verify", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        // Vérification du statut de la réponse
        if (response.status !== 200) {
            console.warn("Statut de réponse inattendu :", response.status);
            return null;
        }
        
        // Retourne les données utilisateur si tout est correct
        return response.data
    } catch (error: any) {

        
        // Journalisation des erreurs
        if (error.response) {
            console.error("Erreur API :", error.response.data);
        } else {
            console.error("Erreur inattendue :", error.message);
        }

        return null;
    }
};


