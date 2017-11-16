CREATE DATABASE exoplanet_db;
USE exoplanet_db;

CREATE TABLE exosale (

  id int(11) AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(255) NOT NULL,
  devoured BOOLEAN NOT NULL,
  date DATETIME NOT NULL,

  PRIMARY KEY (id)

);