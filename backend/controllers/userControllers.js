import { User } from "../models/user.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

export const AddUser = async (req, res, next) =>{

try {
    
    const { first_name, last_name, email, password, telephone, role } = req.body

    const isExistUser = await User.findOne({
        email: email
    })

    if (isExistUser){
        return res.status(400).json({msg: "User already exist !"})
    }

    const hashpassword = await bcrypt.hash(password,10)

    await new User({
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: hashpassword,
        telephone: telephone,
        role: role,
    }).save()
    return res.status(200).json({msg: "User added successfully"})

} catch (error) {
    return res.send({error})
}

}


export const login = async (req, res, next) => {
    
    const { email, password } = req.body

    try {
       
        const isExistUser = await User.findOne({
            email: email
        })

        if (!isExistUser) {
            return res.status(400).json({ msg: "email incorrect!!!" })
        }

        const isMatching = await bcrypt.compare(password, isExistUser.password)

        if (!isMatching) {
            return res.status(400).json({ msg: "Password incorrect!!!" })

        }

        const payload = {

            userid: isExistUser._id,
            userrole: isExistUser.role

        }

        const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1h' })
        return res.json({ message: 'Connexion réussie', token });

    } catch (error) {
        console.log(error);
        
        return res.status(500).json(error)
    }

}


// export const verifyToken = async (req, res, next) => {

//     try {
         
//         const token = req.headers.authorization.split(' ')[1];
//         // const { token } = req.params 

//         if (!token) {
//             res.status(401).json({ msg: "Non autorisée!!" })

//         }
//         const decodetoken = jwt.verify(token, process.env.SECRET_KEY
//         )    

//         const user = await User.findOne({
//             _id: decodetoken.userid
//         })

//         if (!user) {
//             res.status(404).json({ msg: "User inexistant !!" })
//         }

//         const UserInfo = {
//             first_name: user.first_name,
//             last_name: user.last_name,
//             email: user.email,
//             role: user.role
//         }

//         res.status(200).json(UserInfo)

//     } catch (error) {
//         console.log(error);

//         res.status(400).json({ msg: "Login/password incorrect!!" })
//     }
// }



export const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(403).json({ message: "Non autorisé!" });
        }

        // Vérification du jeton
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
        
        // Recherche de l'utilisateur dans la base de données
        const user = await User.findById(decodedToken.userid);
        if (!user) {
            return res.status(404).json({ message: "Utilisateur non trouvé!" });
        }

        // Envoi de la réponse
        return res.status(200).json(user);
    } catch (error) {
       
        
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: "Jeton expiré!" });
        } else if (error.name === 'JsonWebTokenError') {
            return res.status(403).json({ message: "Jeton invalide!" });
        } else {
            return res.status(500).json({ message: "Erreur serveur!", error: error.message });
        }
    }
};
