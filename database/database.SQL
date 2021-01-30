//tiene que usarse siempre ';'
CREATE DATABASE challenge_api;

USE challenge_api;

/*
\l <= muestra lista de base de datos 
\c 'nombrre'<= me permite usar una base de datos
\dt <= me muestra la tabla 
select * from 'nombre tabla'; <= me muestra la tabla y sus datos
*/

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    concepto VARCHAR(40),
    monto FLOAT(20),
    tipo VARCHAR(10),
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users ( concepto, monto, tipo, fecha ) VALUES
('alquiler','1000','entrada', '2021/01/31'),
('sueldo','75000','debita','2020/01/31');

\d+ users;