DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE table burgers (
id INTEGER auto_increment,
burger_name VARCHAR(50) NOT NULL,
devoured boolean NOT NULL default 0,
PRIMARY KEY (id)
);