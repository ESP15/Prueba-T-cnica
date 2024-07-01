DROP DATABASE IF EXISTS db_prueba_tecnica;
CREATE DATABASE db_prueba_tecnica;


USE db_prueba_tecnica;

CREATE TABLE IF NOT EXISTS Articles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titular VARCHAR(255) NOT NULL,
    contenido TEXT NOT NULL
);

INSERT INTO Articles (titular, contenido) VALUES
('Primer Artículo', 'Contenido del primer artículo.'),
('Segundo Artículo', 'Contenido del segundo artículo.'),
('Tercer Artículo', 'Contenido del tercer artículo.'),
('Cuarto Artículo', 'Contenido del cuarto artículo.'),
('Quinto Artículo', 'Contenido del quinto artículo.');
