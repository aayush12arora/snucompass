use squadron;
insert into course
values (
        "CSD391",
        "Image processing",
        "An introduction to image processing concepts and techniques.",
        4,
        "OFFLINE",
        "CSD",
        "BOTH",
        0,
        1
    );
insert into student
values(
        2110110410,
        "Rahul Jayaram",
        8.84,
        "2002-12-02",
        "rj712",
        60,
        "CSD",
        "COM"
    );
insert into student_course_map
values(2110110410, "CSD102", "M2023", "CORE");
insert into student_course_map
values(2110110410, "CSD205", "M2023", "CORE");
insert into student_course_map
values(2110110410, "CSD210", "M2023", "CORE");
insert into student_course_map
values(2110110410, "COM192", "M2023", "UWE");
insert into student_completed_course
values(2110110410, "COM199", "S2022");
insert into student_completed_course
values(2110110410, "CSD101", "M2022");
insert into department
values(
        "ECE",
        "Electronics and Communication Engineering",
        2302020202,
        "ECE@snu.edu.in",
        "Major",
        11
    );
-- select * from student_course_map where left(course_id,3)='COM';