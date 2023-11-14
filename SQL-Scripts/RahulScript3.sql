use sql12657494;
delimiter // create procedure insertIntoMinorMap(
    in dept_id varchar(3),
    in course_id varchar(10)
) BEGIN
insert into Minor_Course_Map
values(dept_id, course_id);
end;
// delimiter;
call insertIntoCourse (
    "CSD317",
    "Introduction to Database Management Systems",
    "This course is an introduction to DBMS and SQL",
    4,
    "OFFLINE",
    "CSD",
    "BOTH",
    1,
    0
);
call insertIntoMinorMap('CSD', 'CSD101');
call insertIntoMinorMap('CSD', 'CSD102');
call insertIntoMinorMap('CSD', 'CSD204');
call insertIntoMinorMap('CSD', 'CSD205');
call insertIntoMinorMap('CSD', 'CSD311');
call insertIntoMinorMap('CSD', 'CSD317');
call insertIntoMinorMap('COM', 'COM191');
call insertIntoMinorMap('COM', 'COM192');
call insertIntoMinorMap('COM', 'COM198');
call insertIntoMinorMap('COM', 'COM199');
call insertIntoMinorMap('COM', 'COM195');
call insertIntoMinorMap('DES', 'DES101');
call insertIntoMinorMap('DES', 'DES102');
call insertIntoMinorMap('DES', 'DES121');
call insertIntoMinorMap('DES', 'DES211');
call insertIntoMinorMap('DES', 'DES502');
use squadron;
call insertIntoStudent(
    2110110543,
    "Vijay Varma",
    9.24,
    "2001-10-05",
    "vv712",
    60,
    "ECE",
    "CSD"
);
insert into Student_Completed_Course
values(
        2110110543,
        "CSD101",
        "M2023",
        "A-"
    );
insert into Student_Completed_Course
values(
        2110110543,
        "CSD102",
        "M2023",
        "A-"
    );
insert into Student_Completed_Course
values(
        2110110543,
        "CSD204",
        "M2023",
        "A"
    );
insert into Student_Completed_Course
values(
        2110110543,
        "CSD311",
        "M2023",
        "A"
    );
use squadron;
CALL enrollStudent(2110110543, "CSD205", "M2023", "UWE");