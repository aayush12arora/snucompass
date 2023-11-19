insert into department
values(
        "COM",
        "Communication",
        8181818181,
        "Com@snu.edu.in",
        "Minor",
        10
    );
insert into department
values(
        "DES",
        "Design",
        5151515151,
        "des@snu.edu.in",
        "Minor",
        10
    );
insert into department
values(
        "CSD",
        "Computer Science",
        9191919191,
        "CSD@snu.edu.in",
        "Major",
        11
    );
insert into department
values(
        "MEC",
        "Mechanical ",
        9191919191,
        "MEC@snu.edu.in",
        "Major",
        11
    );
insert into department
values(
        "PHY",
        "Physics",
        9191919191,
        "PHY@snu.edu.in",
        "Major",
        11
    );
insert into department
values(
        "ECE",
        "Electronics and Communication Engineering",
        2302020202,
        "ECE@snu.edu.in",
        "Major",
        11
    );
insert into course
values(
        "DES211",
        "Introduction to Design",
        "This course is an introduction to design",
        4,
        "OFFLINE",
        "DES",
        "BOTH",
        1,
        0
    );
insert into course
values(
        "COM199",
        "Image and Sound Studio",
        "A detailed course covering various technical aspects of photography and sound effects",
        4,
        "OFFLINE",
        "COM",
        "BOTH",
        1,
        0
    );
insert into course
values(
        "COM192",
        "Interpreting Cinema",
        "A detailed course covering various technical aspects of Cinema, screenplay and imagery",
        4,
        "OFFLINE",
        "COM",
        "BOTH",
        1,
        0
    );
insert into course
values(
        "COM198",
        "Cinema between two world wars",
        "This Optional course is a historical survey of cinema during a time when most
of its grammar and syntax developed",
        4,
        "OFFLINE",
        "COM",
        "BOTH",
        1,
        0
    );
insert into course
values(
        "COM195",
        "Editing and post production",
        "Movies lets go",
        6,
        "OFFLINE",
        "COM",
        "BOTH",
        1,
        0
    );
-- Insert Computer Science department courses
insert into course
values (
        "CSD101",
        "Introduction to Computing and Programming (3:0:1)",
        "An introductory course in programming and computing concepts.",
        4,
        "OFFLINE",
        "CSD",
        "BOTH",
        1,
        0
    );
insert into course
values (
        "CSD102",
        "Data Structures (3:0:1)",
        "A course on data structures and algorithms.",
        4,
        "OFFLINE",
        "CSD",
        "BOTH",
        1,
        0
    );
insert into course
values (
        "CSD211",
        "Computer Organization (3:1:0)",
        "An overview of computer organization and architecture.",
        4,
        "OFFLINE",
        "CSD",
        "MONSOON",
        1,
        0
    );
insert into course
values (
        "CSD204",
        "Operating Systems (3:0:1)",
        "An introduction to operating systems principles and concepts.",
        4,
        "OFFLINE",
        "CSD",
        "SPRING",
        1,
        0
    );
insert into course
values (
        "CSD105",
        "Software Engineering (3:0:1)",
        "Choose one of the following courses: Software Engineering, Computer Networks, Design and Analysis of Computer Algorithms, or Database Systems.",
        4,
        "OFFLINE",
        "CSD",
        "BOTH",
        1,
        0
    );
insert into course
values (
        "CSD319",
        "Design and analysis of algorithms",
        "A course on the design and analysis of algorithms.",
        4,
        "OFFLINE",
        "CSD",
        "BOTH",
        1,
        0
    );
insert into course
values (
        "CSD400",
        "Theory of Computation",
        "A course on the theory of computation.",
        4,
        "OFFLINE",
        "CSD",
        "BOTH",
        0,
        0
    );
insert into course
values (
        "CSD210",
        "Introduction to Probability and Statistics",
        "An introductory course on probability and statistics.",
        4,
        "OFFLINE",
        "CSD",
        "BOTH",
        0,
        0
    );
insert into course
values (
        "CSD205",
        "Discrete Mathematics",
        "A course on discrete mathematics.",
        4,
        "OFFLINE",
        "CSD",
        "BOTH",
        1,
        0
    );
insert into course
values (
        "CSD307",
        "Software Design Lab",
        "A lab-based course on software design.",
        4,
        "OFFLINE",
        "CSD",
        "BOTH",
        0,
        0
    );
insert into course
values (
        "CSD311",
        "Artificial Intelligence",
        "A course on artificial intelligence.",
        4,
        "OFFLINE",
        "CSD",
        "BOTH",
        1,
        0
    );
insert into course
values (
        "CSD451",
        "Applied Cryptography",
        "A course on applied cryptography.",
        4,
        "OFFLINE",
        "CSD",
        "BOTH",
        0,
        1
    );
insert into course
values (
        "CSD456",
        "Introduction to Machine Learning",
        "An introduction to machine learning concepts and techniques.",
        4,
        "OFFLINE",
        "CSD",
        "BOTH",
        0,
        1
    );
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
insert into offered_minors
values(
        "DES",
        "In the background of rapidly changing global economy Industrial Design is playing positive role.
     By introducing Design Minor at SNU for the undergraduate the university will provide excellent opportunity in wider range of 
     placement for the undergraduate students. Design being an interdisciplinary discipline it provides much broader vision and professional exposure.",
        20
    );
insert into offered_minors
values(
        "COM",
        "The Minor in Communication offered by the Department of Communication is structured in a way that takes the student on the 
        journey a story takes till it manifests itself on screen; from Ideation and Writing, Basic Photography and Sound Recording.This is divided between six courses, 
         three compulsory and three optional.The student should complete 18 credits out of a possible 24.",
        18
    );
insert into offered_minors
values(
        "CSD",
        "Undergraduate students of Shiv Nadar University who are not majoring in Computer Science & Engineering (CSE) 
    have the option to take a Minor in CSE.Students have to acquire a minimum of 19 credits from the minor courses offered by the Department of CSE. For Non Engineering majors, 
    you have to acquire a minimum of 23 credits.",
        19
    );
-- use squadron;
-- insert into department
-- values(
--         "MEC",
--         "Mechanical Engineering",
--         9191919191,
--         "mec@snu.edu.in",
--         "Major",
--         11
--     );
-- insert into department
-- values(
--         "PHY",
--         "Physics",
--         9191919191,
--         "phy@snu.edu.in",
--         "Major",
--         11
--     );
insert into offered_minors
values(
        "MEC",
        " Minor in Mechanical Engineering would be offered to those Students who 
have cleared the Physics, and Maths courses from the Basic Sciences and Engineering 
Graphics, Engineering Mechanics/Static and Dynamics and Manufacturing Processes from 
Engineering Sciences categories",
        18
    );
insert into offered_minors
values(
        "PHY",
        " The physics department offers undergraduate students at SNU an opportunity of obtaining a 
minor in physics. A minor in physics has two aspects to it. First, it ensures that a student is 
well versed with the central core of physics, and secondly it will allow the student to learn 
more advanced aspects of the subject according to his or her interests. A minor in physics 
will equip a student to engage in challenging multi-disciplinary problems. It will be equally 
valuable for students seeking employment in industry or finance, where physicist skills of 
making quantitative models of complex situations are welcomed",
        18
    );
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
insert into Student_Completed_Course
values(
        2110110112,
        "CSD102",
        "S2023",
        "A-"
    );
insert into Student_Completed_Course
values(
        2110110112,
        "COM192",
        "S2023",
        "A"
    );
insert into Student_Completed_Course
values(
        2110110112,
        "COM199",
        "M2023",
        "A-"
    );
insert into Student_Completed_Course
values(
        2110110112,
        "DES211",
        "S2023",
        "C"
    );