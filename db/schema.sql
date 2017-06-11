CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burger(
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(225) NOT NULL,
    devoured boolean DEFAULT false,
    date TIMESTAMP,
    PRIMARY KEY (id)

);
