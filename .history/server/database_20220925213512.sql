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
    -- user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(), -- set extension uuid
    user_id PRIMARY KEY NOT NULL DEFAULT AUTO_INCREMENT
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    user_location VARCHAR(255) NOT NULL,
    product_1 VARCHAR(255),
    product_1_price INT(255),
    product_2 VARCHAR(255),
    product_2_price INT(255),
    product_3 VARCHAR(255),
    product_3_price INT(255),
    order_date VARCHAR(255) NOT NULL
);

------ insert user --------

INSERT INTO users (user_name, user_email, user_password, user_location, product_1, product_1_price, product_2,
product_2_price, product_3, product_3_price, order_date) VALUES ('kanishka', 'kanishka@gmail.com', 'K@nishka', 'Sri ');
