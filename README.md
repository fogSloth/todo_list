# Estructura de Aplicación - Modelo-Vista-Controlador (MVC)

Este proyecto sigue el patrón de arquitectura Modelo-Vista-Controlador (MVC) para organizar el código de manera modular y escalable.

## ¿Qué es MVC?

MVC es un patrón de diseño que divide una aplicación en tres componentes interconectados, cada uno con una responsabilidad específica:

1.  **Modelo (Model):** Representa los datos y la lógica de negocio de la aplicación. Se encarga de gestionar los datos, su estado y las reglas de cómo se pueden modificar. Los modelos interactúan directamente con la base de datos o cualquier otra fuente de datos.
2.  **Vista (View):** Es la interfaz de usuario que presenta los datos al usuario. Su responsabilidad principal es mostrar la información que recibe del Modelo, sin contener lógica de negocio.
3.  **Controlador (Controller):** Actúa como intermediario entre el Modelo y la Vista. Recibe las entradas del usuario (eventos), las procesa, interactúa con el Modelo para obtener o actualizar datos, y luego selecciona la Vista adecuada para mostrar la respuesta al usuario.

## Directorios en este Proyecto

### `models/`
Contiene la lógica de negocio y las representaciones de los datos de la aplicación. Cada archivo en este directorio (e.g., `UserModel.js`, `TaskModel.js`) representará una entidad o un conjunto de datos y sus operaciones asociadas.

**Responsabilidades:**
*   Acceso a la base de datos (consultas, inserciones, actualizaciones, eliminaciones).
*   Validación de datos.
*   Lógica de negocio específica de la entidad.

### `views/`
Contiene los archivos de plantilla que definen la interfaz de usuario. Estos archivos son responsables de cómo se presentan los datos al usuario.

**Responsabilidades:**
*   Renderizado de HTML (o cualquier otro formato de interfaz de usuario).
*   Visualización de los datos proporcionados por el Controlador.
*   No debe contener lógica de negocio.

### `controllers/`
Contiene la lógica que maneja las solicitudes de los usuarios, interactúa con los Modelos y selecciona las Vistas apropiadas para responder.

**Responsabilidades:**
*   Recibir y procesar las solicitudes HTTP.
*   Validar la entrada del usuario.
*   Comunicarse con los Modelos para obtener o actualizar datos.
*   Seleccionar y pasar datos a la Vista para su renderización.
*   Manejar la navegación y el flujo de la aplicación.

### `route/`
Este directorio (o `routes/`) se encarga de definir las rutas de la aplicación, mapeando las URLs a los Controladores correspondientes.

## Flujo de Trabajo Típico en MVC

1.  **El Usuario interactúa con la Vista:** Por ejemplo, hace clic en un botón o envía un formulario.
2.  **La Vista envía una solicitud al Controlador:** Esta solicitud puede ser una petición HTTP (GET, POST, etc.) a una URL específica.
3.  **El Controlador procesa la solicitud:**
    *   Recibe la entrada del usuario.
    *   Si es necesario, llama a uno o más Modelos para obtener o actualizar datos.
    *   El Modelo realiza las operaciones necesarias (e.g., consulta la base de datos, valida datos) y devuelve los resultados al Controlador.
4.  **El Controlador selecciona una Vista:** Basándose en la lógica y los datos recibidos del Modelo, el Controlador decide qué Vista debe mostrarse y le pasa los datos necesarios.
5.  **La Vista renderiza la respuesta:** Utiliza los datos proporcionados por el Controlador para generar la interfaz de usuario final (e.g., una página HTML) y la envía de vuelta al navegador del usuario.

Este ciclo asegura una clara separación de responsabilidades, lo que facilita el mantenimiento, la prueba y la escalabilidad del código.