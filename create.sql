CREATE SCHEMA IF NOT EXISTS my_barber;

CREATE TABLE IF NOT EXISTS my_barber.user (
    user_id uuid primary key,
    email text,
    phone text,
    name text,
);

CREATE TABLE IF NOT EXISTS my_barber.calendar (
    calendar_id uuid primary key,
    user_id uuid not null references my_barber.user (user_id),
    date text,
    time text,
    start_date timestamp,
    end_date timestamp,
    duration int
);

insert into my_barber.user (user_id, email, name) values ('11111111-1111-1111-1111-111111111111', 'layconjohn@gmail.com', 'John', '5573988675742');
insert into my_barber.user (user_id, email, name) values ('22222222-2222-2222-2222-222222222222', 'layconjohn.sg@gmail.com', 'Laycon', '5571999597588');