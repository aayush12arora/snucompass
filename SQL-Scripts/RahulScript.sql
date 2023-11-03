use squadron;
-- need a trigger that whenever a row is deleted from student_course_map it goes to the completed course automatically
-- alter table completed course that shows grade
-- when uploading file you need to add delimiter vscode handles automatically
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
call insertFaculty(
    1,
    "Sonia Khetarpaul",
    "sonia.khetarpaul@snu.edu.in",
    "9999999999",
    "Assn.Prof",
    "No",
    "CSD"
);
call insertFaculty(
    2,
    "Ashwin Ramanathan",
    "ashwin.ramanathan@snu.edu.in",
    "9999999999",
    "Assc.Prof",
    "No",
    "COM"
);
call insertFaculty(
    3,
    "Vikash Kumar",
    "vikash.kumar@snu.edu.in",
    "9999999999",
    "Assc.Prof",
    "No",
    "COM"
);
update faculty
set dept_id = "DES"
where faculty_id = 3;
-- 3/11/2023
-- need to enroll students 
use squadron;
use squadron;
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
use squadron;
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