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
//