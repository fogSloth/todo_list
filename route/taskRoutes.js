const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskController');

// Definir las rutas para las tareas
router.get('/', TaskController.getAllTasks);
router.post('/', TaskController.addTask);

module.exports = router;