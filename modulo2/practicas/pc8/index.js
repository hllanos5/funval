import express from 'express';
import multer from 'multer';

const app = express ();
const port = 3000;
const host = 'http://localhost:3000';

const  MIMETYPE = ["image/jpeg","application/pdf","image/png"]


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },

    filename: function(req, file, cb) {
        const uniqueSuffix = Date.now()+ '-' + file.originalname
        cb(null, uniqueSuffix)
    }
})

const upload = multer({ storage: storage });

app.use(express.json());

app.post("/upload", upload.single("file"), (req, res, next ) => {
    console.log("Hola");
    res.json(req.file);
    
})

app.listen(port, ()=> {
    console.log("Servidor levantado: http://localhost:3000");
})


