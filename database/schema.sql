
DROP DATABASE IF EXISTS descriptions;

CREATE DATABASE descriptions;

USE descriptions;

CREATE TABLE merchants (
  id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(120)
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
  gp_id VARCHAR(255)
);

CREATE TABLE categories (
  id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(120)
);

CREATE TABLE deal_cat_joins (
  id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  deal_id INTEGER XYZ,
  cat_id INTEGER XYZ
);

CREATE TABLE deals (
  id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(255),
  merch_id INTEGER XYZ,
  loc_id INTEGER XYZ,
  descrip TEXT,
  addl_info TEXT,
  inclusions TEXT,
  exclusions TEXT,
  fine_print TEXT,
  deal_cat_id INTEGER XYZ
);

INSERT INTO merchants
VALUES (
  1,
  'River Otter Tours'
);

