import { usuarioList } from './controller.js'
import fs from 'node:fs/promises';
import http from 'node:http';


const server = http.createServer(async (request, response) => {
    const url = request.url;
    try {
        if (request.method === "GET") {

            if (url === "/datos") {
                const aUsuario = await usuarioList();
                grabarArchivo(aUsuario);

                response.writeHead(200, { "Content-Type": "text/plain" });
                response.end(JSON.stringify(aUsuario));
            }
            else {
                // Metodo no implementado
                response.writeHead(500, { "Content-Type": "text/plain" });
                response.end("Method not Implemented");
            }
        }
        else {
            // Manejar otras rutas o métodos
            response.writeHead(500, { "Content-Type": "text/plain" });
            response.end("Method not Implemented");
        }

    } catch (error) {
        const oError= {"Error":error+""};
        
        response.writeHead(500, { "Content-Type": "text/plain" });
        response.end(JSON.stringify(oError));
        console.log("Ha sucedido un error: " + error);
    }
});

server.listen(3000, () => console.log("Se ha levantado el servidor"));


function grabarArchivo(query) {
    fs.writeFile('./datos.txt', JSON.stringify(query), err => {
        if (err) {
            console.log('Hubo un error: ', err);
        }
        console.log('Operación exitosa');
    });
}