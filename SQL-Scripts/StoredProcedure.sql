use squadron;
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
create procedure enrollStudent(
    in roll_no int,
    in course_id varchar(10),
    in semester varchar(10),
    in course_type varchar(10)
) begin
insert into student_course_map
values(roll_no, course_id, semester, course_type);
end;