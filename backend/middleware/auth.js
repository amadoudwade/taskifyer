import jwt from 'jsonwebtoken';

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
