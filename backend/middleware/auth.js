import jwt from 'jsonwebtoken';

// export const auth = (req, res, next) => {
//     // const token = req.headers.authorization?.split(' ')[1]; // Récupère le token après "Bearer"
//     const { token } = req.params
//     if (!token) {
//         return res.status(401).json({ message: "Token not provided" });
//     }

//     try {
//         const decodedToken = jwt.verify(token, process.env.JWT_SECRET); // Valide le token avec la clé secrète
//         req.user = { id: decodedToken.id }; // Ajoute l'ID de l'utilisateur au `req.user`
        
        
//         next();
//     } catch (error) {
//         res.status(403).json({ message: "Invalid token" });
        
//     }
// };

// export const auth = async (req,res, next) => {
//     const token = req.headers.authorization?.split(' ')[1];

//     if (!token) {

//         res.status(403).json({message: "Non authorisé!"})
//     }

//     try {
//         const verifyToken = jwt.verify(token,process.env.SECRET_KEY)

//         if (!verifyToken) {

//             res.status(403).json({message: "Non authorisé!"})
//         }

//         req.auth = {
//             id: verifyToken.payload.userId,
//             role: verifyToken.payload.role
//         }
//         req.user = { id: verifyToken.id }

//         next()

//     } catch (error) {
//         res.status(500).json({error})
//     }

// }


export const auth = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(403).json({ message: "Non autorisé!" });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        req.auth = {
            id: decoded.userId,
            role: decoded.role,
        };

        next(); // Passer au middleware suivant
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: "Jeton expiré!" });
        } else if (error.name === 'JsonWebTokenError') {
            return res.status(403).json({ message: "Jeton invalide!" });
        } else {
            return res.status(500).json({ error: "Erreur serveur!" });
        }
    }
};
