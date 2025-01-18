import express from "express";
import { AddTask, getAllTasks, getOneTask, updateOneTask, deleteOneTask } from "../controllers/taskControllers.js";
import { auth } from "../middleware/auth.js";

const taskRoute = express.Router()

taskRoute.post('/', auth, AddTask)
// taskRoute.post('/', AddTask)
taskRoute.get('/users/:userId/tasks', getAllTasks)
taskRoute.get('/:id', getOneTask)
taskRoute.put('/:id', updateOneTask)
taskRoute.delete('/:id', deleteOneTask)

export default taskRoute;