
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

-- load dim tables
-- merchant
INSERT INTO merchant (name) VALUES ("Charles Riverboat Company");
INSERT INTO merchant (name) VALUES ("Tom's Detailing");
INSERT INTO merchant (name) VALUES ("Play With Clay");
INSERT INTO merchant (name) VALUES ("Sour Flour");
INSERT INTO merchant (name) VALUES ("Muse Paintbar");
INSERT INTO merchant (name) VALUES ("Funtown Splashtown USA");
INSERT INTO merchant (name) VALUES ("Cape Ann Whale Watch");
INSERT INTO merchant (name) VALUES ("King Richard's Faire");
INSERT INTO merchant (name) VALUES ("New England Distilling");
INSERT INTO merchant (name) VALUES ("Jimmy the Greek's Bowling and Arcade");
INSERT INTO merchant (name) VALUES ("Al Gauron Deep Sea Fishing & Whale Watching");
INSERT INTO merchant (name) VALUES ("North Ridge Mountain Guides");
INSERT INTO merchant (name) VALUES ("Kennebec River Pub and Brewery");
INSERT INTO merchant (name) VALUES ("Acadia Mountain Guides Climbing School");
INSERT INTO merchant (name) VALUES ("Gunstock Mountain Resort");
INSERT INTO merchant (name) VALUES ("Monkey Trunks Chocorua");
INSERT INTO merchant (name) VALUES ("Northern Axperts");
INSERT INTO merchant (name) VALUES ("SkillSuccess");
INSERT INTO merchant (name) VALUES ("Provo Canyon Adventures");
INSERT INTO merchant (name) VALUES ("Airborne Trampoline Arena");
INSERT INTO merchant (name) VALUES ("True Rest Float Spa");
INSERT INTO merchant (name) VALUES ("Mountain Yoga Sandy");
INSERT INTO merchant (name) VALUES ("Aribella Salon and Spa");
INSERT INTO merchant (name) VALUES ("Anchorage");
INSERT INTO merchant (name) VALUES ("Seward Cruise Transfer and Private Tour");
INSERT INTO merchant (name) VALUES ("Get Air");
INSERT INTO merchant (name) VALUES ("Aquarium of the Bay");
INSERT INTO merchant (name) VALUES ("Advanced Medical Certification School");
INSERT INTO merchant (name) VALUES ("Makani Catamaran");
INSERT INTO merchant (name) VALUES ("Hawaii Island And Ocean Tours");
INSERT INTO merchant (name) VALUES ("Moku Surf Rentals & Board Shop");
INSERT INTO merchant (name) VALUES ("Maita`i Catamaran");
INSERT INTO merchant (name) VALUES ("RHS Distillery");
INSERT INTO merchant (name) VALUES ("Twogood Kayaks");
INSERT INTO merchant (name) VALUES ("EO Waianae Tours");
INSERT INTO merchant (name) VALUES ("Aloha Pearl Harbor Tour");
INSERT INTO merchant (name) VALUES ("Miller Landing");
INSERT INTO merchant (name) VALUES ("Legends Alaska");
INSERT INTO merchant (name) VALUES ("Sunderland Ranch");
INSERT INTO merchant (name) VALUES ("Talkeetna Tour Company");
INSERT INTO merchant (name) VALUES ("Putters Wild");
INSERT INTO merchant (name) VALUES ("Rockridge Two Wheels and Vespa Walnut Creek");
INSERT INTO merchant (name) VALUES ("Sapphire Pool & Day Club");
INSERT INTO merchant (name) VALUES ("Specialized Helicopters");
INSERT INTO merchant (name) VALUES ("Event Logistic");
INSERT INTO merchant (name) VALUES ("Edda Limousine Service");
INSERT INTO merchant (name) VALUES ("Team Building Food Tours");
INSERT INTO merchant (name) VALUES ("Bay Expeditions");
INSERT INTO merchant (name) VALUES ("Eco Bike Adventures");
INSERT INTO merchant (name) VALUES ("America Cup Charters");
INSERT INTO merchant (name) VALUES ("Skyline Eco-Adventures");
INSERT INTO merchant (name) VALUES ("USS Bowfin Submarine Museum & Park");
INSERT INTO merchant (name) VALUES ("San Francisco Kayak & Adventures");
INSERT INTO merchant (name) VALUES ("Bay City Bike");
INSERT INTO merchant (name) VALUES ("San Francisco Sailing Company");
INSERT INTO merchant (name) VALUES ("Explore San Francisco");
INSERT INTO merchant (name) VALUES ("Flagship Cruises & Events");
INSERT INTO merchant (name) VALUES ("Davey's Locker");
INSERT INTO merchant (name) VALUES ("Uptown Jungle Fun Park");
INSERT INTO merchant (name) VALUES ("Fantastic Sams");
INSERT INTO merchant (name) VALUES ("P2K Range");
INSERT INTO merchant (name) VALUES ("The Wave Waterpark ");
INSERT INTO merchant (name) VALUES ("MyCaliforniaPermit.com");
INSERT INTO merchant (name) VALUES ("Flagship Cruises and Events");
INSERT INTO merchant (name) VALUES ("The Catalina Flyer");
INSERT INTO merchant (name) VALUES ("SynFast Oil Change");
INSERT INTO merchant (name) VALUES ("Pilates Room Studios");
INSERT INTO merchant (name) VALUES ("Laurel Parking");
INSERT INTO merchant (name) VALUES ("Aladdin Airport Parking");
INSERT INTO merchant (name) VALUES ("Gigi's Beauty Boutique");
INSERT INTO merchant (name) VALUES ("Berkeley Pizza");
INSERT INTO merchant (name) VALUES ("Brazilia Skin Care");
INSERT INTO merchant (name) VALUES ("Empower Weight Loss");
INSERT INTO merchant (name) VALUES ("Well-Balanced Chiropractic");
INSERT INTO merchant (name) VALUES ("Puerto La Boca");
INSERT INTO merchant (name) VALUES ("Relaxing Massage");
INSERT INTO merchant (name) VALUES ("Yoga Six");
INSERT INTO merchant (name) VALUES ("Precision Tune Auto Care");
INSERT INTO merchant (name) VALUES ("Hornblower San Diego");
INSERT INTO merchant (name) VALUES ("La Jolla Water Sports");

-- category table
INSERT INTO category (name) VALUES ("Fun & Leisure");
INSERT INTO category (name) VALUES ("Sightseeing & Tours");
INSERT INTO category (name) VALUES ("Kids Activities");
INSERT INTO category (name) VALUES ("Tickets & Events");
INSERT INTO category (name) VALUES ("Sports & Outdoors");
INSERT INTO category (name) VALUES ("Nightlife);");

-- location table
