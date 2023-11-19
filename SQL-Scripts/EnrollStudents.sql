use squadron;
call enrollStudent(2110110410, "CSD102", "M2023", "CORE");
call enrollStudent(2110110410, "CSD205", "M2023", "CORE");
call enrollStudent(2110110410, "CSD210", "M2023", "CORE");
call enrollStudent(2110110410, "COM192", "M2023", "UWE");
call enrollStudent(2110110017, "CSD102", "M2023", "CORE");
call enrollStudent(2110110017, "CSD205", "M2023", "CORE");
call enrollStudent(2110110017, "CSD210", "M2023", "CORE");
call enrollStudent(2110110017, "DES211", "M2023", "UWE");
call enrollStudent(2110110883, "CSD102", "M2023", "CORE");
call enrollStudent(2110110883, "CSD210", "M2023", "CORE");
call enrollStudent(2110110883, "CSD205", "M2023", "CORE");
call enrollStudent(2110110883, "DES211", "M2023", "UWE");
call enrollStudent(2110110842, "CSD102", "M2023", "CORE");
call enrollStudent(2110110842, "CSD205", "M2023", "CORE");
call enrollStudent(2110110842, "CSD210", "M2023", "CORE");
call enrollStudent(2110110842, "COM192", "M2023", "UWE");
insert into Student_Completed_Course
values(2110110410, "COM199", "S2022");
insert into Student_Completed_Course
values(2110110410, "CSD101", "M2022");
use squadron;
call insertIntoStudent(
    2110110410,
    "Rahul Jayaram",
    8.84,
    "2002-12-02",
    "rj712",
    60,
    "CSD",
    "COM"
);
call insertIntoStudent(
    2110110017,
    "Aayush Arora",
    8.61,
    "2003-02-12",
    "aa373",
    60,
    "CSD",
    "DES"
);
call insertIntoStudent(
    2110110842,
    "Punyam Singh",
    8.71,
    "2004-07-19",
    "ps232",
    60,
    "CSD",
    "COM"
);
call insertIntoStudent(
    2110110843,
    "Rishabh Singh",
    8.71,
    "2004-07-19",
    "rs232",
    60,
    "ECE",
    "COM"
);
call insertIntoStudent(
    2110110883,
    "Mitaali Singhal",
    8.6,
    "2001-11-28",
    "ms187",
    60,
    "CSD",
    "DES"
);