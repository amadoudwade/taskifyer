import { Tasks } from "../models/task.js";


//add new task
export const AddTask = (req, res, next) => {

    // Validate and construct the task object
    const task = new Tasks({
        title: req.body.title,
        description: req.body.description,
        status: req.body.status,
        priority: req.body.priority,
        deadline: req.body.deadline,
        user: req.body.user
        // user: req.user.id,
    });

    // Save the task to the database
    task.save()
        .then(() => 
            res.status(201).json({
                message: "New task added successfully!",
            })
        )
        .catch(
            
            (err) => 
            res.status(400).json({
                error: err.message, // Provide the error message for better debugging
            })
            
            
        );
};

//get all tasks
export const getAllTasks = async (req, res, next) => {
    console.log({params: req.params});
    
    const userId = req.params.userId

    try {

        const tasks = await Tasks.find({user: userId}).sort({createdAt:'desc'})

        return res.json(tasks)

    } catch (error) {
        console.log(error);
        
    }
    

}

//get one task
export const getOneTask = (req, res, next) => {
    Tasks.findOne({ _id: req.params.id }).populate('user').exec().then(
        (task) => res.status(200).json(task)
    ).catch((err) => res.status(400).json({
        error: err
    }))
}

//update one task
export const updateOneTask = (req, res, next) => {
    
    Tasks.updateOne(
        {_id: req.params.id},
        { $set: {
        title: req.body.title,
        description: req.body.description,
        status: req.body.status,
        priority: req.body.priority,
        deadline: req.body.deadline,
        createdAt: req.body.createdAt,
        updatedAt: Date.now(),
        //user: req.body.user
        } }
    ).then(() => res.status(200).json({
        message: `This ${req.params.id} task updated successfully!`
    })).catch((err) => res.status(400).json({
        error: err
    }
    ))
    
}

//delete one task
export const deleteOneTask = (req, res, next) => {
    Tasks.deleteOne({ _id: req.params.id }).then(() => res.status(200).json({
        message: `This ${req.params.id} task was deleted successfully!`
    })).catch((err) => res.status(400).json({
        error: err
    }))
}