-- deletes the previous database
DROP DATABASE IF EXISTS toonamania;

-- creates a new one
CREATE DATABASE toonamania;

-- conect the DB we just created
\c toonamania

CREATE TABLE
    characters (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        age INTEGER,
        image TEXT,
        description TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );