import express from "express";
import { AddUser, login, verifyToken } from "../controllers/userControllers.js";
import { upload } from "../middleware/fileupload.js";


const AuthRoutes = express.Router()

AuthRoutes.post('/register', AddUser)
AuthRoutes.post('/login', login)
AuthRoutes.get('/verify', verifyToken)


export default AuthRoutes;