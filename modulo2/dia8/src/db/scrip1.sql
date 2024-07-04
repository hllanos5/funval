drop table if exists usuario;

CREATE TABLE usuario (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombres VARCHAR(50),
    apellidos VARCHAR(50) ,
    direccion VARCHAR(150),
    correo_electronico VARCHAR(50) NOT NULL UNIQUE ,
    dni VARCHAR(8) NOT NULL UNIQUE,
    edad INTEGER,
    telefono VARCHAR(20),
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP    
);

INSERT INTO usuario (nombres,apellidos,direccion,correo_electronico,dni,edad,telefono)
VALUES ("HANS JONATHAN", "LLANOS CHAVEZ", "PERU TABLADA", "hans.llanos1@gmail.com", "12345678", 30, "961287931"),
("HANS JONATHAN2", "LLANOS CHAVEZ2", "PERU TABLADA", "hans.llanos2@gmail.com", "12345677", 30, "961287931");