
DROP DATABASE IF EXISTS descriptions;

CREATE DATABASE descriptions;

USE descriptions;

-- ---
-- dimension tables
-- ---

CREATE TABLE merchant (
  id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(120),
  PRIMARY KEY (id)
);

CREATE TABLE location (
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

CREATE TABLE category (
  id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(120),
  PRIMARY KEY (id)
);

-- ---
-- fact tables
-- ---

CREATE TABLE deal (
  id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(255),
  merch_id INTEGER UNSIGNED NOT NULL,
  loc_id INTEGER UNSIGNED NOT NULL,
  descrip TEXT,
  addl_info TEXT,
  inclusions TEXT,
  exclusions TEXT,
  fine_print TEXT,
  deal_cat_id INTEGER UNSIGNED NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (merch_id) REFERENCES merchant (id),
  FOREIGN KEY (loc_id) REFERENCES location(id)
);

-- ---
-- join tables
-- ---

CREATE TABLE deal_cat_join (
  id INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  deal_id INTEGER UNSIGNED NOT NULL,
  cat_id INTEGER  UNSIGNED NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (deal_id) REFERENCES deal (id),
  FOREIGN KEY (cat_id) REFERENCES category (id)
);

INSERT INTO merchant
VALUES (
  1,
  'River Otter Tours'
);

