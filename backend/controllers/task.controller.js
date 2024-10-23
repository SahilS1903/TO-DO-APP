import { Task } from "../models/Task.model.js";

export const createTask = async (req, res) => {
    const { TaskName, description} = req.body;

    if (!TaskName || !description ) {
        res.status(400).json({ message: "All fields are required" });
    }

    try {
        const task = new Task({
            TaskName,
            description,
            
            owner: req.user._id,
        });

        task
            .save()
            .then(() => {
                res.status(200).json({
                    message: "Task added successfully",
                    task,
                });
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

export const getTasks = async (req, res) => {
    try {
        const task = await Task.find();

        if (!task) {
            res.status(404).json({ message: "Task not found" });
        }

        return res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

export const userTasks = async (req, res) => {
    try {
        const task = await Task.find({ owner: req.user._id });

        if (!task) {
            res.status(404).json({ message: "Task not found" });
        }

        return res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

export const buyTask = async (req, res) => {
    const { taskId } = req.params;

    try {
        const task = await Task.findById(taskId);

        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        if (!task.isSellable) {
            return res.status(400).json({ message: "Task is already sold" });
        }

        task.buyer = req.user._id;
        task.isSellable = false;

        await task.save();

        return res
            .status(200)
            .json({ message: "Task bought successfully", task });
    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
};

export const getSellableTasks = async (req, res) => {
    try {
        const sellableTasks = await Task.find({ isSellable: true }).sort({
            createdAt: -1,
        });

        if (!sellableTasks.length) {
            return res
                .status(404)
                .json({ message: "No sellable tasks found" });
        }

        return res.status(200).json(sellableTasks);
    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
};

export const userBuyTasks = async (req, res) => {
    try {
        const buyTaskss = await Task.find({ buyer: req.user._id });

        if (!buyTaskss.length) {
            return res.status(404).json({ message: "No buy tasks found" });
        }

        return res.status(200).json(buyTaskss);
    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
};

export const getTasksById = async (req, res) => {
    const { taskId } = req.params;

    try {
        const task = await Task.findById(taskId);

        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        return res.status(200).json(task);
    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
};

export const deleteTask = async (req, res) => {
    const { taskId } = req.params;
    
    try {
        const task = await Task.findById(taskId);
        
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        await Task.deleteOne({ _id: taskId });

        return res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
};

