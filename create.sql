drop schema my_barber CASCADE;
create schema my_barber

create my_barber.user {
    user_id uuid primary key,
    email text,
    phone text,
    name text,
}

create my_barber.calendar {
    calendar_id uuid primary key,
    user_id uuid not null references my_barber.user (user_id),
    date text,
    time text,
    start_date timestamp,
    end_date timestamp,
    duration int
}

insert into john.user (user_id, email, name) values (1, 'layconjohn@gmail.com', 'John', '5573988675742');
insert into john.user (user_id, email, name) values (2, 'layconjohn.sg@gmail.com', 'Laycon', '5571999597588');