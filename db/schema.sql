DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE table burgers (
id INTEGER auto_increment,
burger_name VARCHAR(50),
devoured boolean,
PRIMARY KEY (id)
);