const TaskModel = require('../models/TaskModel');

class TaskController {
    static getAllTasks(req, res) {
        const tasks = TaskModel.getAllTasks();
        res.json(tasks);
    }

    static addTask(req, res) {
        const { title } = req.body;
        if (!title) {
            return res.status(400).json({ message: 'Title is required' });
        }
        const newTask = TaskModel.addTask(title);
        res.status(201).json(newTask);
    }
}

module.exports = TaskController;
