DROP DATABASE IF EXISTS order_maestro_db;

CREATE DATABASE order_maestro_db;

USE order_maestro_db;

CREATE TABLE orders(
  id INT NOT NULL AUTO_INCREMENT,
  user_id VARCHAR(50),
  items VARCHAR(400),
  complete BOOLEAN DEFAULT false,
  PRIMARY KEY(id)
);

CREATE TABLE plates(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100),
  PRIMARY KEY(id)
);
