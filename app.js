import express from 'express';
import fetch from 'node-fetch';

const app = express();

// Configurar el motor de vistas
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

// Configurar una ruta para manejar las solicitudes
app.get('/', async (req, res) => {
  try {
    // Hacer la solicitud a la API utilizando fetch
    const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=QjKInJeEkJcK2JifdTv3rUk82iMqqMBcFRoaYUpj');

    // Verificar el estado de la respuesta
    if (response.ok) {
      // Convertir la respuesta a formato JSON
      const data = await response.json();
      console.log(data);

    } else {
      // Manejar errores de la solicitud
      const errorData = await response.json();
      console.error(errorData);
      res.status(500).send('Error al obtener los datos de la API');
    }
  } catch (error) {
    // Manejar errores de red u otros errores
    console.error(error);
    res.status(500).send('Error al obtener los datos de la API');
  }
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});

