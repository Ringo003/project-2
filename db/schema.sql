CREATE DATABASE exoplanet_db;
USE exoplanet_db;

CREATE TABLE exosale (
  id int(11) AUTO_INCREMENT NOT NULL,
  name VARCHAR(255) NOT NULL,
  mass float(11),
  distance float(11),
  xray float(11),
  price float(11),
  sold BOOLEAN NOT NULL,

  PRIMARY KEY (id)
);

CREATE TABLE cart (
	id_account int(11) NOT NULL,
    id_planet int(11) NOT NULL, 
    
    PRIMARY KEY (id_planet)
);

CREATE TABLE account (
	id int(11) AUTO_INCREMENT NOT NULL
    
);

drop table exosale;

drop table cart;
