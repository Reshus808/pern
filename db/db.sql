create table student(
id bigserial not null primary key,
name varchar(250) not null,
address varchar(250) not null
);


insert into student(id, name, address) values (123, 'john', 'gwalior');