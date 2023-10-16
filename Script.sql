-- Path: Script.sql
DROP DATABASE IF EXISTS squadron;
CREATE DATABASE squadron;
USE squadron;

-- student table
create table student(
    roll_no int not null,
    name varchar(255) not null,
    cgpa decimal(3,2) not null,
    dob date not null,
    net_id varchar(10) not null,
    total_credits int not null,
    dept_id int not null,
    minor_dept_id int,
    primary key(roll_no),
    foreign key(dept_id) references department(dept_id),
    foreign key(minor_dept_id) references department(dept_id),
);

-- department table
create table department(
    dept_id int not null,
    dept_name varchar(255) not null,
    dept_phone VARCHAR(10),
    dept_email varchar(10),
    dept_type varchar(10),
    uga_id int not null,
    primary key(dept_id),
    foreign key(uga_id) references faculty(faculty_id),
);

-- course table
create table course(
    course_id int not null,
    course_name varchar(255) not null,
    course_desc varchar(10000),
    course_credits int not null,
    course_medium varchar(10) not null, -- university, swayam
    dept_id int not null,
    offered_in_semester varchar(10) not null,
    offered_as_uwe BOOLEAN not null,
    offered_as_me BOOLEAN not null,
    primary key(course_id),
    foreign key(dept_id) references department(dept_id),
    -- foreign key(offered_in_semester) references semester(semester_name),
);

-- faculty table
create TABLE faculty(
    faculty_id int not null,
    faculty_name varchar(255) not null,
    faculty_email varchar(255) not null,
    faculty_phone varchar(10) not null,
    faculty_type varchar(10) not null, -- professor, associate professor, assistant professor
    faculty_res VARCHAR(10) not null, -- resident, visiting
    dept_id int not null,
    foreign key(dept_id) references department(dept_id),
    primary key(faculty_id),
);

-- course_student_map table
create Table Student_Course_Map(
    roll_no int not null,
    course_id int not null,
    semester varchar(10) not null, -- spring2023, monsoon2023
    course_type varchar(10) not null, -- core, minor, uwe, me
    primary key(roll_no, course_id),
    foreign key(roll_no) references student(roll_no),
    foreign key(course_id) references course(course_id),
);

-- student_completed_course table
create table Student_Completed_Course(
    roll_no int not null,
    course_id int not null,
    semester varchar(10) not null,
    primary key(roll_no, course_id),
    foreign key(roll_no) references student(roll_no),
    foreign key(course_id) references course(course_id),
);

-- student_pursuing_minor table



-- course_faculty_map table
create table Course_Faculty_Map(
    course_id int not null,
    faculty_id int not null,
    primary key(course_id, faculty_id),
    foreign key(course_id) references course(course_id),
    foreign key(faculty_id) references faculty(faculty_id),
);

-- course_pre_req table
create table Course_Pre_Req(
    course_id int not null,
    pre_req_course_id int not null,
    primary key(course_id, pre_req_course_id),
    foreign key(course_id) references course(course_id),
    foreign key(pre_req_course_id) references course(course_id),
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