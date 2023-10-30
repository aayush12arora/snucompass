-- Path: Script.sql
DROP DATABASE IF EXISTS squadron;
CREATE DATABASE squadron;
USE squadron;

create table student(
    roll_no int not null,
    name varchar(255) not null,
    cgpa decimal(3,2) not null,
    dob date not null,
    net_id varchar(10) not null,
    total_credits int not null,
    primary key(roll_no),
);

create table department(
    dept_id int not null,
    dept_name varchar(255) not null,
    dept_phone VARCHAR(10),
    dept_email varchar(10),
    dept_type varchar(10),
    primary key(dept_id),
);

create table course(
    course_id int not null,
    course_name varchar(255) not null,
    course_desc varchar(10000),
    course_credits int not null,
    course_type varchar(10) not null,
    primary key(course_id),
);

create TABLE faculty(
    faculty_id int not null,
    faculty_name varchar(255) not null,
    faculty_email varchar(255) not null,
    faculty_phone varchar(10) not null,
    faculty_type varchar(10) not null, -- professor, associate professor, assistant professor
    faculty_res VARCHAR(10) not null, -- resident, visiting
    primary key(faculty_id),
);


-- create table course_offering(
--     course_id int not null,
--     dept_id int not null,
--     semester varchar(10) not null,
--     year int not null,
--     primary key(course_id, dept_id, semester, year),
--     foreign key(course_id) references course(course_id),
--     foreign key(dept_id) references department(dept_id),
-- );