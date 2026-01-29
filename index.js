const express = require('express');
const taskRoutes = require('./route/taskRoutes');

const app = express();
const PORT = 3000;

// Middleware para parsear JSON en el cuerpo de las solicitudes
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('Bienvenido a la API de Tareas MVC!');
});

// Usar las rutas de tareas bajo el prefijo /api/tasks
app.use('/api/tasks', taskRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
    console.log(`Accede a las tareas en: http://localhost:${PORT}/api/tasks`);
});