import Task from "../models/taskModel.js";

// Create task
export const createTask = async (req, res) => {

    try {

        const { title, description } = req.body;

        if (!title) {
            return res.status(400).json({
                message: "Title is required",
            });
        }

        const task = await Task.create({
            title,
            description,
            createdBy: req.user._id,
        });

        res.status(201).json(task);
        
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};


// Get all task
export const getTasks = async (req, res) => {

    try {

        const tasks = await Task.find({
            createdBy: req.user._id,
        });

        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};


// Update task
export const updateTask = async (req, res) => {

    try {

        const task = await Task.findById( req.params.id );

        if (!task) {
            return res.status(404).json({
                message: "Task not found",
            });
        }

        task.title = req.body.title || task.title;
        task.description = req.body.description || task.description;
        task.status = req.body.status || task.status;

        const updateTask = await task.save();

        res.status(200).json( updateTask );

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};


// Delete task
export const deleteTask = async (req, res) => {

    try {

        const task = await Task.findById( req.params.id );

        if (!task) {
            return res.status(404).json({
                message: "Task not found",
            });
        }

        await task.deleteOne();

        res.status(200).json({
            message: "Task deleted successfully",
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};