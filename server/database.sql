CREATE DATABASE Assessment;

CREATE TABLE manager(
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(), -- set extension uuid
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);

INSERT INTO manager (user_name, user_email, user_password) VALUES ('admin', 'admin@gmail.com', 'A@dmin');

-- 

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    user_location VARCHAR(255) NOT NULL,
    product_1 VARCHAR(255) DEFAULT NULL,
    product_1_price float DEFAULT NULL,
    product_2 VARCHAR(255) DEFAULT NULL,
    product_2_price float DEFAULT NULL,
    product_3 VARCHAR(255) DEFAULT NULL,
    product_3_price float DEFAULT NULL,
    totalprice float DEFAULT NULL,
    order_date DATE,
    order_month VARCHAR(25) NOT NULL,
    order_day INT NOT NULL,
    order_year INT NOT NULL
);

------ insert user --------

  INSERT INTO users (user_name, user_email, user_password, user_location, product_1, product_1_price, product_2, product_2_price, product_3, product_3_price, totalprice, order_date, order_month, order_day, order_year) VALUES ('Irma Lyons','ipsum@google.net', 'cus@123', 'Chile', 'Purple Gift Box', '20.50', 'Custom Gift Box', '99.9', 'Matte Tumbler', '9.99', '130.39', '2022-09-23', 'September', '23', '2022');
  INSERT INTO users (user_name, user_email, user_password, user_location, product_1, product_1_price, product_2, product_2_price, product_3, product_3_price, totalprice, order_date, order_month, order_day, order_year) VALUES ('Olympia Barker','ipsum.cursus@google.net', 'cus@123', 'Colombia', 'Custom Gift Box', '99.9', 'Matte Tumbler', '9.99', '0.00', '0.00', '109.89', '2022-09-15', 'September', '15', '2022');
  INSERT INTO users (user_name, user_email, user_password, user_location, product_1, product_1_price, product_2, product_2_price, product_3, product_3_price, totalprice, order_date, order_month, order_day, order_year) VALUES ('Lani Frank', 'mus.aenean@google.ca', 'cus@123', 'Ukraine', 'Custom Print Insulated Bottles', '15.5', 'Purple Gift Box', '20.50', '0.00', '0.00', '36', '2022-09-08', 'September', '08', '2022');
  INSERT INTO users (user_name, user_email, user_password, user_location, product_1, product_1_price, product_2, product_2_price, product_3, product_3_price, totalprice, order_date, order_month, order_day, order_year) VALUES ('Alice Rivas', 'lobortis.quam@aol.com', 'cus@123', 'United Kingdom', 'Matte Tumbler', '9.99', 'Ocean Print Mug', '4.95', '0.00', '0.00', '14.94', '2022-09-03', 'September', '03', '2022');
  INSERT INTO users (user_name, user_email, user_password, user_location, product_1, product_1_price, product_2, product_2_price, product_3, product_3_price, totalprice, order_date, order_month, order_day, order_year) VALUES ('Yoshio Hunter', 'a.enim@outlook.com', 'cus@123', 'Indonesia', 'Custom Print Insulated Bottles', '15.5', '0.00', '0.00', '0.00', '0.00', '15.5', '2022-09-02', 'September', '02', '2022');
  
  INSERT INTO users (user_name, user_email, user_password, user_location, product_1, product_1_price, product_2, product_2_price, product_3, product_3_price, totalprice, order_date, order_month, order_day, order_year) VALUES ('Addison Mcmillan','ut@yahoo.org', 'cus@123', 'Belgium', 'Purple Gift Box', '20.50', 'Rose Gold Gift Box', '25.60', 'Custom Gift Box', '99.9', '146', '2022-08-29', 'August', '29', '2022');
  INSERT INTO users (user_name, user_email, user_password, user_location, product_1, product_1_price, product_2, product_2_price, product_3, product_3_price, totalprice, order_date, order_month, order_day, order_year) VALUES ('Ezra Brady','ultrices@protonmail.ca', 'cus@123', 'Chile', 'Ocean Print Mug', '4.95', '0.00', '0.00', '0.00', '0.00', '4.95', '2022-08-24', 'August', '24', '2022');
  INSERT INTO users (user_name, user_email, user_password, user_location, product_1, product_1_price, product_2, product_2_price, product_3, product_3_price, totalprice, order_date, order_month, order_day, order_year) VALUES ('Breanna Skinner','semper.cursus@hotmail.net', 'cus@123', 'Costa Rica', 'Purple Gift Box', '20.50', 'Custom Gift Box', '99.9', '0.00', '0.00', '120.4', '2022-08-13', 'August', '13', '2022');
  INSERT INTO users (user_name, user_email, user_password, user_location, product_1, product_1_price, product_2, product_2_price, product_3, product_3_price, totalprice, order_date, order_month, order_day, order_year) VALUES ('Clare Vargas','accumsan@aol.couk', 'cus@123', 'Colombia', 'Purple Gift Box', '20.50', 'Ocean Print Mug', '4.95', '0.00', '0.00', '25.45', '2022-08-12', 'August', '12', '2022');
  INSERT INTO users (user_name, user_email, user_password, user_location, product_1, product_1_price, product_2, product_2_price, product_3, product_3_price, totalprice, order_date, order_month, order_day, order_year) VALUES ('Maile Contreras','nec.orci@outlook.org', 'cus@123', 'China', 'Rose Gold Gift Box', '25.60', 'Ocean Print Mug', '4.95', '0.00', '0.00', '30.55', '2022-08-10', 'August', '10', '2022');
  
  INSERT INTO users (user_name, user_email, user_password, user_location, product_1, product_1_price, product_2, product_2_price, product_3, product_3_price, totalprice, order_date, order_month, order_day, order_year) VALUES ('Cora Wilkerson','dignissim.tempor@icloud.edu', 'cus@123', 'Pakistan', 'Custom Gift Box', '99.9', 'Matte Tumbler', '9.99', 'Ocean Print Mug', '4.95', '114.84', '2022-08-8', 'August', '08', '2022');
  INSERT INTO users (user_name, user_email, user_password, user_location, product_1, product_1_price, product_2, product_2_price, product_3, product_3_price, totalprice, order_date, order_month, order_day, order_year) VALUES ('Fatima Cross','diam.at.pretium@hotmail.ca', 'cus@123', 'Germany', 'Custom Print Insulated Bottles', '15.5', 'Purple Gift Box', '20.50', 'Rose Gold Gift Box', '25.60', '61.60', '2022-08-3', 'August', '03', '2022');
  INSERT INTO users (user_name, user_email, user_password, user_location, product_1, product_1_price, product_2, product_2_price, product_3, product_3_price, totalprice, order_date, order_month, order_day, order_year) VALUES ('Mariam Allen','sit.amet@google.org', 'cus@123', 'Costa Rica', 'Custom Gift Box', '99.9', 'Matte Tumbler', '9.99', 'Custom Print Insulated Bottles', '15.5', '125.39', '2022-07-29', 'July', '29', '2022');
  INSERT INTO users (user_name, user_email, user_password, user_location, product_1, product_1_price, product_2, product_2_price, product_3, product_3_price, totalprice, order_date, order_month, order_day, order_year) VALUES ('Kim Austin','ornare.lectus.justo@icloud.ca', 'cus@123', 'India', 'Purple Gift Box', '20.50', 'Rose Gold Gift Box', '25.60', 'Custom Gift Box', '99.9', '146', '2022-7-20', 'July', '20', '2022');
  INSERT INTO users (user_name, user_email, user_password, user_location, product_1, product_1_price, product_2, product_2_price, product_3, product_3_price, totalprice, order_date, order_month, order_day, order_year) VALUES ('Timon Delacruz','curabitur.vel@hotmail.edu', 'cus@123', 'South Korea', 'Custom Gift Box', '99.9', 'Custom Print Insulated Bottles', '15.5', '0.00', '0.00', '115.40', '2022-7-13', 'July', '13', '2022');