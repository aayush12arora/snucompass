-- Path: Script.sql

DROP DATABASE IF EXISTS squadron;
CREATE DATABASE squadron;
USE squadron;

-- DROP TABLE IF EXISTS squadron.faculty;
-- DROP TABLE IF EXISTS squadron.department;
-- DROP TABLE IF EXISTS squadron.student;
-- DROP TABLE IF EXISTS squadron.courses;

CREATE TABLE squadron.faculty (
    faculty_id INT NOT NULL AUTO_INCREMENT,
    faculty_name VARCHAR(50) NOT NULL,
    faculty_email VARCHAR(50) NOT NULL,
    faculty_phone VARCHAR(50) NOT NULL,
    PRIMARY KEY (faculty_id)
);

-- CREATE TABLE squadron.department (
--     department_id INT NOT NULL AUTO_INCREMENT,
--     department_name VARCHAR(50) NOT NULL,
--     PRIMARY KEY (department_id)
-- );

-- CREATE TABLE squadron.courses (
--     course_id INT NOT NULL AUTO_INCREMENT,
--     course_name VARCHAR(50) NOT NULL,
--     course_code VARCHAR(50) NOT NULL,
--     course_description VARCHAR(50) NOT NULL,
--     PRIMARY KEY (course_id)
-- );

-- CREATE TABLE squadron.student (

-- )