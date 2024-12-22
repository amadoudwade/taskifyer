export const authorize = (role) => {
    return [
        (req, res, next) => {
            
              if (req.auth.userRole != role) {
                return res.status(403).json({msg: "Acces refusé!!"})
              }
              next()
            
        }
    ]
    
    
}