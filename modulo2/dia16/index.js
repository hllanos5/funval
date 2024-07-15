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

const upload = multer({
    fileFilter: (req, file, cb)=>{
        if(MIMETYPE.includes(file.mimetype)){
            cb(null, true);
        }
        else {
            cb(`Only ${MIMETYPE.join(' , ')} mimetype area allowed`, false)
        }
    },
    limits: {
        fileSize:1000000
    }
    ,
    storage: storage
});

app.use(express.json());

app.post("/upload", upload.single("file"), (req, res, next ) => {
    res.json(req.file);
})

app.listen(port, ()=> {
    console.log("Servidor levantado: http://localhost:3000");
})


