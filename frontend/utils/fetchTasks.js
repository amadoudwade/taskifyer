export const fetchTasks = async () => {
     const TASK_URL = process.env.TASK_URL; // URL stockée dans les variables d'environnement
  
    if (!TASK_URL) {
      throw new Error("TASK_URL n'est pas définie dans les variables d'environnement.");
    }
  
    try {
      const response = await fetch(TASK_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`Erreur HTTP ! Statut : ${response.status}`);
      }
  
      const data = await response.json(); // Conversion de la réponse en JSON
      return data; // Renvoie les données récupérées
    } catch (error) {
      console.error("Erreur lors de la récupération des tâches :", error);
      throw error; // Propagation de l'erreur pour gestion ultérieure
    }
  };
  