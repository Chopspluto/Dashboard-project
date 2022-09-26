CREATE DATABASE Assessment;

CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(), -- set extension uuid
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    user_location VARCHAR(255) NOT NULL,
    product_1 VARCHAR(255)
);

------ insert user --------

INSERT INTO users (user_name, user_email, user_password) VALUES ('admin', 'admin@gmail.com', 'A@dmin');
