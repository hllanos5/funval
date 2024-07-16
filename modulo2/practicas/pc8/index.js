import express from 'express';
import {borrarArchivo, uploadFileMulter} from './util/utility.js';

const app = express ();
const port = 3000;
const host = 'http://localhost:3000';

app.use(express.json());

app.post("/upload", uploadFileMulter.single("file"), (req, res, next ) => {
    res.json(req.file);
})

app.post("/delete-file",async (req, res, next ) => {
    let dato = await borrarArchivo(req.body.fileName)
    if(dato){
        res.json({respuesta: "Borrado Exitoso"});
    }
    else {
        res.json({respuesta: "Hubo un problema con el borrado"});
    }
})

app.listen(port, ()=> {
    console.log("Servidor levantado: http://localhost:3000");
})


