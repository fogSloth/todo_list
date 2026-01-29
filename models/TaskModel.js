let tasks = [
    { id: 1, title: 'Learn MVC', completed: false },
    { id: 2, title: 'Build a Todo API', completed: true }
];

class TaskModel {
    static getAllTasks() {
        return tasks;
    }

    static addTask(title) {
        const newTask = {
            id: tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1,
            title,
            completed: false
        };
        tasks.push(newTask);
        return newTask;
    }
}

module.exports = TaskModel;