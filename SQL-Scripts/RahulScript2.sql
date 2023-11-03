-- 3/11/2023
-- need to enroll students 
-- use squadron;
-- use squadron;
call insertIntoStudent(
    2110110414,
    "Rohit Tripathi",
    8.94,
    "2002-01-30",
    "rt187",
    60,
    "ECE",
    "CSD"
);
-- use squadron;
call insertIntoStudent(
    2110110191,
    "Devesh Sharma",
    8.77,
    "2002-10-28",
    "ds766",
    60,
    "MEC",
    "CSD"
);
-- use squadron;
alter table student_completed_course
add Grade varchar(2);
update student_completed_course
set Grade = "A";
use squadron;
insert into student_completed_course
values(
        2110110414,
        "CSD101",
        "M2023",
        "A-"
    );
insert into student_completed_course
values(
        2110110414,
        "CSD102",
        "M2023",
        "B"
    );
UPDATE course
SET course_name = SUBSTRING_INDEX(course_name, ' (', 1)
WHERE course_name LIKE '% (%%:%%:%%)';