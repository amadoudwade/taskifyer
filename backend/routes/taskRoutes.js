import express from "express";
import { AddTask, getAllTasks, getOneTask, updateOneTask, deleteOneTask } from "../controllers/taskControllers.js";
import { auth } from "../middleware/auth.js";

const taskRoute = express.Router()

// taskRoute.post('/', auth, AddTask)
taskRoute.post('/users/:userId/tasks', auth, AddTask)
taskRoute.get('/users/:userId/tasks', getAllTasks)
taskRoute.get('/users/:userId/tasks/:id', getOneTask)
taskRoute.put('/users/:userId/tasks/:id', updateOneTask)
taskRoute.delete('/users/:userId/tasks/:id', deleteOneTask)

export default taskRoute;