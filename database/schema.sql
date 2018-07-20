
DROP DATABASE IF EXISTS descriptions;

CREATE DATABASE descriptions;

USE descriptions;

CREATE TABLE merchants (
  id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(120),
  PRIMARY KEY (id)
);

CREATE TABLE locations (
  id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  addr_ln1 VARCHAR(255),
  addr_ln2 VARCHAR(255),
  city VARCHAR(120),
  state_abbr CHAR(2),
  zip CHAR(2),
  lat DECIMAL(10,7),
  lon DECIMAL(10,7),
  gp_id VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE categories (
  id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(120),
  PRIMARY KEY (id)
);

CREATE TABLE deal_cat_joins (
  id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  deal_id INTEGER REFERENCES deals(id),
  cat_id INTEGER REFERENCES categories(id),
  PRIMARY KEY (id)
);

CREATE TABLE deals (
  id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(255),
  merch_id INTEGER REFERENCES (id),
  loc_id INTEGER REFERENCES (id),
  descrip TEXT,
  addl_info TEXT,
  inclusions TEXT,
  exclusions TEXT,
  fine_print TEXT,
  deal_cat_id INTEGER REFERENCES deal_cat_joins(deal_id),
  PRIMARY KEY (id)
);

INSERT INTO merchants
VALUES (
  1,
  'River Otter Tours'
);

