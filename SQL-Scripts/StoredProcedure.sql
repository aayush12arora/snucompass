use squadron;
-- procedure for insertion into student table
-- hi
CREATE PROCEDURE insertIntoStudent(
    IN roll_no INT,
    IN name VARCHAR(255),
    IN cgpa DECIMAL(3, 2),
    IN dob DATE,
    IN net_id VARCHAR(10),
    IN total_credits INT,
    IN dept_id VARCHAR(3),
    IN minor_dept_id VARCHAR(3)
) BEGIN
INSERT INTO student
VALUES (
        roll_no,
        name,
        cgpa,
        dob,
        net_id,
        total_credits,
        dept_id,
        minor_dept_id
    );
END;
-- procedure for insertion into student_course_map table
CREATE PROCEDURE enrollStudent(
    in roll_no int,
    in course_id varchar(10),
    in semester varchar(10),
    in course_type varchar(10)
) BEGIN
INSERT INTO student_course_map
VALUES(roll_no, course_id, semester, course_type);
end;
-- procedure for insertion into course_table
-- stored procedure for insertion into course table
CREATE procedure insertIntoCourse(
    IN course_id varchar(10),
    IN course_name varchar(255),
    IN course_desc varchar(10000),
    IN course_credits int,
    IN course_medium varchar(10),
    IN dept_id varchar(3),
    IN offered_in_semester varchar(10),
    IN offered_as_uwe BOOLEAN,
    IN offered_as_me BOOLEAN
) BEGIN
INSERT INTO course
values(
        course_id,
        course_name,
        course_desc,
        course_credits,
        course_medium,
        dept_id,
        offered_in_semester,
        offered_as_uwe,
        offered_as_me
    );
END;
CREATE PROCEDURE insertNewMinorCourse(
    IN course_id VARCHAR(10),
    IN course_name VARCHAR(255),
    IN course_desc VARCHAR(10000),
    IN course_credits INT,
    IN course_medium VARCHAR(10),
    IN dept_id VARCHAR(3),
    IN semester VARCHAR(10),
    IN UWE TINYINT(1),
    IN Me TINYINT(1)
) BEGIN
INSERT INTO course
VALUES(
        course_id,
        course_name,
        course_desc,
        course_credits,
        course_medium,
        dept_id,
        semester,
        UWE,
        Me
    );
INSERT INTO minor_course_map(dept_id, course_id)
VALUES(dept_id, course_id);
END;
create procedure insertIntoMinorMap(
    in dept_id varchar(3),
    in course_id varchar(10)
) BEGIN
insert into Minor_Course_Map
values(dept_id, course_id);
end;
create procedure insertFaculty(
    IN fac_id int,
    IN fac_name varchar(255),
    IN fac_email varchar(255),
    IN fac_phone varchar(10),
    in fac_type varchar(10),
    in fac_res varchar(10),
    in dep_id varchar(3)
) begin
insert into faculty
values(
        fac_id,
        fac_name,
        fac_email,
        fac_phone,
        fac_type,
        fac_res,
        dep_id
    );
end;