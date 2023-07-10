#  Ejercicio de NASA API

Este es un ejercicio que muestra cómo consumir la NASA API y mostrar la información en una aplicación web utilizando Node.js y Express.

## Descripción del proyecto

El objetivo de este proyecto es consumir la API de la NASA para obtener la "Imagen Astronómica del Día" (Astronomy Picture of the Day - APOD) y mostrarla en una página HTML. Se utiliza el framework Express para crear un servidor web y renderizar la vista utilizando EJS como motor de plantillas.

La API de la NASA proporciona datos e imágenes fascinantes relacionadas con la astronomía y el espacio. En este ejercicio, se utiliza la clave de API proporcionada para hacer una solicitud a la API y obtener la información y la imagen del APOD. Luego, se muestra la imagen y algunos detalles en una página web.

## Configuración del proyecto

Sigue estos pasos para configurar y ejecutar el proyecto:

1. Clona el repositorio o descarga los archivos del ejercicio.
2. Abre una terminal y navega hasta el directorio del proyecto.
3. Ejecuta los siguiente comando para instalar las dependencias:

```
shellCopy code
npm install ejs
npm install express
npm install node-fetch
npm install nodemon
```

1. Abre el archivo `app.js` y asegúrate de que la clave de API de la NASA sea válida. Puedes obtener una clave de API gratuita registrándote en el sitio web de la NASA.
2. Ejecuta los siguiente comandos para iniciar el servidor:

```
shellCopy code
nodemon --quiet app.js
```

1. Abre tu navegador web y visita `http://localhost:3000` para ver la página con la imagen y los detalles del APOD.

## Estructura del proyecto

El proyecto tiene la siguiente estructura de archivos y directorios:

- `app.js`: Archivo principal de la aplicación donde se configura el servidor y se manejan las rutas.
- `views/`: Directorio que contiene las vistas de la aplicación.
  - `index.ejs`: Archivo de vista que muestra la imagen y los detalles del APOD.
- `package.json`: Archivo de configuración de npm que contiene las dependencias y los scripts del proyecto.
- Otros archivos y directorios: Archivos y directorios generados automáticamente por npm o el sistema de control de versiones (por ejemplo, `node_modules/`).

## Recursos adicionales

- [Documentación de la NASA API](https://api.nasa.gov/): Puedes consultar la documentación oficial de la NASA API para obtener más información sobre los endpoints y los datos disponibles.
- [Documentación de Express](https://expressjs.com/): La documentación oficial de Express proporciona información detallada sobre cómo utilizar el framework para crear aplicaciones web en Node.js.

¡Disfruta del ejercicio y explora el fascinante mundo de la NASA API! Si tienes alguna pregunta, no dudes en contactarme.

------

# Ejercicio de NASA API

This is an exercise that demonstrates how to consume the NASA API and display the information in a web application using Node.js and Express.

## Project Description

The goal of this project is to consume the NASA API to retrieve the "Astronomy Picture of the Day" (APOD) and display it on an HTML page. Express framework is used to create a web server and render the view using EJS as the template engine.

The NASA API provides fascinating data and images related to astronomy and space. In this exercise, the provided API key is used to make a request to the API and retrieve the APOD information and image. Then, the image and some details are displayed on a web page.

## Project Setup

Follow these steps to set up and run the project:

1. Clone the repository or download the exercise files.
2. Open a terminal and navigate to the project directory.
3. Run the following command to install the dependencies:

```
shellCopy code
npm install ejs
npm install express
npm install node-fetch
npm install nodemon
```

1. Open the `app.js` file and make sure the NASA API key is valid. You can obtain a free API key by registering on the NASA website.
2. Run the following command to start the server:

```
shellCopy code
nodemon --quiet app.js
```

1. Open your web browser and visit `http://localhost:3000` to see the page with the APOD image and details.

## Project Structure

The project has the following file and directory structure:

- `app.js`: The main file of the application where the server is configured and routes are handled.
- `views/`: Directory containing the views of the application.
  - `index.ejs`: View file that displays the APOD image and details.
- `package.json`: npm configuration file that lists the dependencies and scripts of the project.
- Other files and directories: Automatically generated files and directories by npm or the version control system (e.g., `node_modules/`).

## Additional Resources

- [NASA API Documentation](https://api.nasa.gov/): You can refer to the official NASA API documentation to learn more about the available endpoints and data.
- [Express Documentation](https://expressjs.com/): The official Express documentation provides detailed information on how to use the framework to create web applications in Node.js.

Enjoy the exercise and explore the fascinating world of the NASA API! If you have any questions, feel free to contact me.