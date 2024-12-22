import jwt from "jsonwebtoken";

export const auth = (req, res, next) =>{
       
    
    const token = req.headers.authorization
    
    if (!token) {
        res.status(401).json({msg: "Non autorisée!!"})
        
    }

    
    try {
        const decodetoken = jwt.verify(token, process.env.SECRET_KEY)
        req.auth = {
            userId: decodetoken.userid,
            userRole: decodetoken.userrole
        }
        
        
        next()
      
    } catch (error) {
        res.status(400).json({msg: "Login/password incorrect!!"})
    }
    
}