-- Drops the todolist if it exists currently --
DROP DATABASE IF EXISTS groceries_db;
-- Creates the "todolist" database --
CREATE DATABASE groceries_db;
USE groceries_db;

CREATE TABLE burgers
(id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
name VARCHAR(300) NOT NULL,
user VARCHAR(300) NOT NULL,
created_at DATETIME DEFAULT CURRENT_TIMESTAMP);