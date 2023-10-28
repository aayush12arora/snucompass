use squadron;
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

call enrollStudent(2110110017, "CSD102", "M2023", "CORE");
call enrollStudent(2110110017, "CSD205", "M2023", "CORE");
call enrollStudent(2110110017, "CSD210", "M2023", "CORE");
call enrollStudent(2110110017, "DES211", "M2023", "UWE");




-- select * from student_course_map where left(course_id,3)='COM';