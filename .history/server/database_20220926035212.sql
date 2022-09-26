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
    product_1 VARCHAR(255),
    product_1_price INT,
    product_2 VARCHAR(255),
    product_2_price INT,
    product_3 VARCHAR(255),
    product_3_price INT,
    order_date DATE NOT NULL,
    order_day INT NOT NULL,
    order_month VARCHAR(25) NOT NULL,
    order_year INT NOT NULL
);

------ insert user --------

INSERT INTO users (user_name, user_email, user_password, user_location, product_1, product_1_price, product_2,
product_2_price, product_3, product_3_price, order_date, order_day, order_month, order_year) VALUES ('kanishka', 'kanishka@gmail.com', 'K@nishka', 'Sri Lanka',
'Floral Desktop Stationery Set', '60', 'Purple Glitter Stationery Set', '30', 'nul', '0', '2022-09-26', '26', 'September', '2022');

INSERT INTO users (user_name, user_email, user_password, user_location, product_1, product_1_price, product_2,
product_2_price, product_3, product_3_price, order_date, order_day, order_month, order_year) VALUES ('jay', 'jay@gmail.com', 'jay@123', 'Malaysia',
'Unicorn Set', '50', 'Fluorescent sticky notes', '10', 'nul', '0', '2022-09-20', '20', 'September', '2022');

INSERT INTO users (user_name, user_email, user_password, user_location, product_1, product_1_price, product_2,
product_2_price, product_3, product_3_price, order_date, order_day, order_month, order_year) VALUES ('nadish', 'nadish@gmail.com', 'nadish@123', 'Sri Lanka',
'Unicorn Set', '50', 'Fluorescent sticky notes', '10', 'Metallic Cups & Straw Set', '70', '2022-09-15', '15', 'September', '2022');

INSERT INTO users (user_name, user_email, user_password, user_location, product_1, product_1_price, product_2,
product_2_price, product_3, product_3_price, order_date, order_day, order_month, order_year) VALUES ('sadi', 'nadish@gmail.com', 'nadish@123', 'Sri Lanka',
'Unicorn Set', '50', 'Fluorescent sticky notes', '10', 'Metallic Cups & Straw Set', '70', '2022-09-15', '15', 'September', '2022');

SELECT order_month FROM users;