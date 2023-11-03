-- 3/11/2023
-- need to enroll students 
-- use squadron;
use sql12657494;
insert into Student_Completed_Course
values(
        2110110414,
        "CSD101",
        "M2023",
        "A-"
    );
insert into Student_Completed_Course
values(
        2110110414,
        "CSD102",
        "M2023",
        "B"
    );
insert into Student_Completed_Course
values(
        2110110410,
        "COM199",
        "M2022",
        "B-"
    );
UPDATE course
SET course_name = SUBSTRING_INDEX(course_name, ' (', 1)
WHERE course_name LIKE '% (%%:%%:%%)';