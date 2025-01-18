import mongoose from "mongoose";

const taskSchema = mongoose.Schema({

    title: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["To-do", "In-progress", "Completed", "Overdue"],
        default: "To-do"
    },
    priority: {
        type: String,
        enum: ["Low", "Normal", "High", "Urgent"],
        default: "Normal"
    },
    deadline: {
        type: Date
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
})

export const Tasks = mongoose.model("Tasks", taskSchema) 