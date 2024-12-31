CREATE TABLE IF NOT EXISTS files (
    id SERIAL PRIMARY KEY,
    file_name VARCHAR(100) NOT NULL
);

INSERT INTO files (file_name) VALUES
('teste.pdf'),
('teste_2.pdf'),
('teste_3.pdf');