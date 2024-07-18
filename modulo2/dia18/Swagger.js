import swaggerAutogen from 'swagger-autogen';
import { HOST } from './src/config/ServerConfig.js';

const doc = {
    info: {
        title: 'HelpDesk',
        description: 'Esto es una API de pruebas del curso de programacion en FUNVAL INTERNACIONAL'
    },
    host: HOST,
    servers: [
        {
            url: "http://localhost:3000/api/v1"
        }
    ]
};

const outputFile = './swagger-output.json';
const routes = ['./src/routes/index.js'];

//swaggerAutogen()(outputFile, routes, doc);

swaggerAutogen({openapi:"3.0.0"})(outputFile, routes, doc).then(async () => {
        await import('./src/index.js')
    }
);
