CREATE TABLE actor (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(200)
);

CREATE TABLE genero (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(200)
);

CREATE TABLE pelicula (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(200),
    genero_id BIGINT,
    director VARCHAR(200),
    stock INT(5)
);

CREATE TABLE actor_pelicula (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    actor_id BIGINT,
    pelicula_id BIGINT
);

CREATE TABLE socio (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150),
    apellido VARCHAR(150),
    codigo VARCHAR(15),
    direccion VARCHAR(150),
    telefono VARCHAR(15)
);

CREATE TABLE lista_espera (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    socio_id BIGINT,
    pelicula_id BIGINT,
    orden INT(3),
    estado tinyint,
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE ficha (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    socio_id BIGINT,
    pelicula_id BIGINT,
    tipo tinyint,
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- Insercion de data

insert into actor (nombre) values ('Will Glaserman');
insert into actor (nombre) values ('Quintana Lysons');
insert into actor (nombre) values ('Ruperta Handrik');
insert into actor (nombre) values ('Lorena Rampling');
insert into actor (nombre) values ('Mead Mawditt');
insert into actor (nombre) values ('Derwin Ketteman');
insert into actor (nombre) values ('Nero Kiefer');
insert into actor (nombre) values ('Chastity Bembridge');
insert into actor (nombre) values ('Faun Agett');
insert into actor (nombre) values ('Lauri Uglow');
insert into actor (nombre) values ('Asher Antcliff');
insert into actor (nombre) values ('Robby Sanpere');
insert into actor (nombre) values ('Florence Andreucci');
insert into actor (nombre) values ('Gweneth Sholem');
insert into actor (nombre) values ('Abrahan Djurevic');
insert into actor (nombre) values ('Amalie Purkiss');
insert into actor (nombre) values ('Rebekkah Adamou');
insert into actor (nombre) values ('Garrik Tranter');
insert into actor (nombre) values ('Lark Gavrielly');
insert into actor (nombre) values ('Angus Summerbell');


insert into genero (nombre) values ('Genero1');
insert into genero (nombre) values ('Genero2');


insert into pelicula (titulo, genero_id, director, stock) values ('End of America, The', 1, 'Aldin Bullard', 82);
insert into pelicula (titulo, genero_id, director, stock) values ('Police Academy 4: Citizens on Patrol', 1, 'Florentia Goldin', 1);
insert into pelicula (titulo, genero_id, director, stock) values ('Journey Beyond Three Seas', 2, 'Terese Freestone', 72);
insert into pelicula (titulo, genero_id, director, stock) values ('Sittin'' on a Backyard Fence', 2, 'Queenie Hegel', 41);
insert into pelicula (titulo, genero_id, director, stock) values ('City Zero', 2, 'Sarina Pickering', 88);
insert into pelicula (titulo, genero_id, director, stock) values ('Just Anybody (Le premier venu)', 1, 'Adah Siegertsz', 27);
insert into pelicula (titulo, genero_id, director, stock) values ('Cottage, The', 2, 'Jannelle Shearmur', 86);
insert into pelicula (titulo, genero_id, director, stock) values ('One and Only, The', 1, 'Cherie Trevain', 80);
insert into pelicula (titulo, genero_id, director, stock) values ('Inseparable', 2, 'Cherlyn Olek', 68);
insert into pelicula (titulo, genero_id, director, stock) values ('Geographer Drank His Globe Away, The (Geograf globus propil)', 2, 'Pierette Hedditch', 86);
insert into pelicula (titulo, genero_id, director, stock) values ('Original Sin', 1, 'Gilemette Rowden', 86);
insert into pelicula (titulo, genero_id, director, stock) values ('Cadence', 1, 'Auroora Scarsbrook', 36);
insert into pelicula (titulo, genero_id, director, stock) values ('Secret Policeman''s Other Ball, The', 2, 'Virgie Sibbet', 50);
insert into pelicula (titulo, genero_id, director, stock) values ('Kiss, The', 2, 'Oralee Cardello', 8);
insert into pelicula (titulo, genero_id, director, stock) values ('Virtuosity', 1, 'Gail Grossier', 59);
insert into pelicula (titulo, genero_id, director, stock) values ('Rouva presidentti', 1, 'Catherine Emor', 38);
insert into pelicula (titulo, genero_id, director, stock) values ('By the Pricking of My Thumbs (Mon petit doigt m''a dit...)', 2, 'Mohandis Juggins', 49);
insert into pelicula (titulo, genero_id, director, stock) values ('I Was an Adventuress', 1, 'Sherye Keepe', 32);
insert into pelicula (titulo, genero_id, director, stock) values ('Internet''s Own Boy: The Story of Aaron Swartz, The', 1, 'Sol Courtman', 23);
insert into pelicula (titulo, genero_id, director, stock) values ('Wonder Bar', 2, 'Zonnya Herley', 21);


insert into socio (nombre, apellido, codigo, direccion, telefono) values ('Ella Slaymaker', 'Slaymaker', '55154-3434', '075 Iowa Way', '749-639-3132');
insert into socio (nombre, apellido, codigo, direccion, telefono) values ('Janessa Passe', 'Passe', '66993-894', '28418 Truax Pass', '341-882-4857');
insert into socio (nombre, apellido, codigo, direccion, telefono) values ('Michal Debill', 'Debill', '0363-0650', '68 American Lane', '216-933-3203');
insert into socio (nombre, apellido, codigo, direccion, telefono) values ('Der Brimley', 'Brimley', '0268-6149', '08 Eastwood Junction', '287-483-9477');
insert into socio (nombre, apellido, codigo, direccion, telefono) values ('Suzi Dartnell', 'Dartnell', '49967-472', '6138 Pond Trail', '658-888-6201');
insert into socio (nombre, apellido, codigo, direccion, telefono) values ('Allard Bosanko', 'Bosanko', '63354-625', '2832 Fallview Street', '488-137-2163');
insert into socio (nombre, apellido, codigo, direccion, telefono) values ('Hieronymus Wallwood', 'Wallwood', '59365-5006', '178 Novick Street', '304-841-8306');
insert into socio (nombre, apellido, codigo, direccion, telefono) values ('Ethelyn Crack', 'Crack', '0799-0001', '7 Sherman Drive', '166-873-3523');
insert into socio (nombre, apellido, codigo, direccion, telefono) values ('Darnall Meikle', 'Meikle', '16590-901', '596 Becker Parkway', '931-213-4861');
insert into socio (nombre, apellido, codigo, direccion, telefono) values ('Fara Jikylls', 'Jikylls', '0363-0152', '16264 Laurel Plaza', '874-905-7128');
insert into socio (nombre, apellido, codigo, direccion, telefono) values ('Marian Ivankin', 'Ivankin', '51289-100', '48 Colorado Point', '605-652-8153');
insert into socio (nombre, apellido, codigo, direccion, telefono) values ('Aridatha Scarff', 'Scarff', '0409-7668', '60 Warbler Avenue', '188-879-5561');
insert into socio (nombre, apellido, codigo, direccion, telefono) values ('Lorenza McGonigal', 'McGonigal', '50145-222', '47 Pearson Point', '239-708-5089');
insert into socio (nombre, apellido, codigo, direccion, telefono) values ('Taryn Widdison', 'Widdison', '0615-6569', '16 Brickson Park Park', '727-189-8182');
insert into socio (nombre, apellido, codigo, direccion, telefono) values ('Devan Stetlye', 'Stetlye', '42507-274', '9099 Stoughton Junction', '610-445-3316');
insert into socio (nombre, apellido, codigo, direccion, telefono) values ('Rex Daft', 'Daft', '0615-1384', '22 Quincy Place', '333-472-3231');
insert into socio (nombre, apellido, codigo, direccion, telefono) values ('Tammy Fairtlough', 'Fairtlough', '42571-122', '2833 Sauthoff Way', '131-768-2297');
insert into socio (nombre, apellido, codigo, direccion, telefono) values ('Demetri Antonijevic', 'Antonijevic', '68703-114', '77 Springview Lane', '214-677-8260');
insert into socio (nombre, apellido, codigo, direccion, telefono) values ('Orlando McGourty', 'McGourty', '55346-0943', '99 Johnson Hill', '285-381-8125');
insert into socio (nombre, apellido, codigo, direccion, telefono) values ('Kiele Richie', 'Richie', '0074-5681', '618 Vidon Way', '188-257-7219');



insert into lista_espera (socio_id, pelicula_id, orden, estado) values (16, 6, 17, 1);
insert into lista_espera (socio_id, pelicula_id, orden, estado) values (3, 2, 3, 2);
insert into lista_espera (socio_id, pelicula_id, orden, estado) values (1, 9, 7, 1);
insert into lista_espera (socio_id, pelicula_id, orden, estado) values (3, 2, 3, 1);
insert into lista_espera (socio_id, pelicula_id, orden, estado) values (15, 3, 7, 1);
insert into lista_espera (socio_id, pelicula_id, orden, estado) values (1, 15, 16, 1);
insert into lista_espera (socio_id, pelicula_id, orden, estado) values (5, 7, 4, 2);
insert into lista_espera (socio_id, pelicula_id, orden, estado) values (1, 18, 17, 2);
insert into lista_espera (socio_id, pelicula_id, orden, estado) values (7, 7, 7, 1);
insert into lista_espera (socio_id, pelicula_id, orden, estado) values (11, 16, 18, 2);
insert into lista_espera (socio_id, pelicula_id, orden, estado) values (14, 12, 4, 2);
insert into lista_espera (socio_id, pelicula_id, orden, estado) values (10, 10, 11, 2);
insert into lista_espera (socio_id, pelicula_id, orden, estado) values (13, 10, 18, 2);
insert into lista_espera (socio_id, pelicula_id, orden, estado) values (15, 14, 9, 2);
insert into lista_espera (socio_id, pelicula_id, orden, estado) values (20, 15, 14, 1);
insert into lista_espera (socio_id, pelicula_id, orden, estado) values (11, 18, 17, 1);
insert into lista_espera (socio_id, pelicula_id, orden, estado) values (9, 11, 8, 2);
insert into lista_espera (socio_id, pelicula_id, orden, estado) values (6, 19, 7, 2);
insert into lista_espera (socio_id, pelicula_id, orden, estado) values (4, 12, 20, 2);
insert into lista_espera (socio_id, pelicula_id, orden, estado) values (6, 2, 8, 1);



insert into ficha (socio_id, pelicula_id, tipo) values (5, 1, 1);
insert into ficha (socio_id, pelicula_id, tipo) values (1, 3, 1);
insert into ficha (socio_id, pelicula_id, tipo) values (4, 11, 1);
insert into ficha (socio_id, pelicula_id, tipo) values (20, 20, 2);
insert into ficha (socio_id, pelicula_id, tipo) values (17, 9, 1);
insert into ficha (socio_id, pelicula_id, tipo) values (14, 13, 1);
insert into ficha (socio_id, pelicula_id, tipo) values (1, 7, 2);
insert into ficha (socio_id, pelicula_id, tipo) values (3, 2, 1);
insert into ficha (socio_id, pelicula_id, tipo) values (20, 11, 1);
insert into ficha (socio_id, pelicula_id, tipo) values (4, 14, 2);
insert into ficha (socio_id, pelicula_id, tipo) values (2, 1, 2);
insert into ficha (socio_id, pelicula_id, tipo) values (1, 10, 1);
insert into ficha (socio_id, pelicula_id, tipo) values (16, 16, 1);
insert into ficha (socio_id, pelicula_id, tipo) values (8, 20, 1);
insert into ficha (socio_id, pelicula_id, tipo) values (15, 11, 1);
insert into ficha (socio_id, pelicula_id, tipo) values (19, 8, 1);
insert into ficha (socio_id, pelicula_id, tipo) values (15, 6, 1);
insert into ficha (socio_id, pelicula_id, tipo) values (12, 16, 1);
insert into ficha (socio_id, pelicula_id, tipo) values (7, 9, 1);
insert into ficha (socio_id, pelicula_id, tipo) values (20, 7, 1);


-- Ejercicio 1
select f.*,p.titulo 
from ficha f
inner join pelicula p
on (f.pelicula_id = p.id)
order by p.titulo asc;

-- Ejercicio 2
select f.*,s.nombre
from ficha f
inner join socio s
on (f.socio_id = s.id)
order by s.nombre asc;

-- Ejercicio 3
select le.id, s.nombre, p.titulo, le.orden, le.estado from 
lista_espera le
inner join socio s
on (le.socio_id = s.id)
inner join pelicula p
on (le.pelicula_id = p.id)
order by le.pelicula_id, le.orden;


