-- Criando o schema (se não existir)
CREATE SCHEMA IF NOT EXISTS my_barber;

-- Criando a tabela user
CREATE TABLE IF NOT EXISTS my_barber.user (
    user_id UUID PRIMARY KEY,
    hash text unique,
    email TEXT,
    phone TEXT,
    name TEXT
);

-- Criando a tabela calendar
CREATE TABLE IF NOT EXISTS my_barber.calendar (
    calendar_id UUID PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES my_barber.user (user_id),
    date TEXT,
    time TEXT,
    start_date TIMESTAMP,
    end_date TIMESTAMP,
    duration INT
);

-- Inserindo registros na tabela user
INSERT INTO my_barber.user (user_id, email, phone, name) VALUES 
    ('11111111-1111-1111-1111-111111111111', 'layconjohn@gmail.com', '5573988675742', 'John'),
    ('22222222-2222-2222-2222-222222222222', 'layconjohn.sg@gmail.com', '5571999597588', 'Laycon');
