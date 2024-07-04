import path from "node:path";
import fs from "node:fs/promises";

export const grabarArchivo = (nombreArchivo, contenido) => {
    fs.writeFile('./' + nombreArchivo, contenido, err => {
        if (err) {
            console.log('Hubo un error: ', err);
        }
        console.log('Operación exitosa');
    })
}
