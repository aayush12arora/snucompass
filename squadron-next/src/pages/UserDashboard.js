import { useRouter } from 'next/router';
import { useState } from 'react';
import MinorProgressBar from './components/MinorProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap';



export async function getServerSideProps(context) {
    const { rollNumber } = context.query;
    // const[deptName,SetDeptName]=useState('');
    
    try {
        const response = await fetch(`http://localhost:3000/api/GetStudentData?rollNo=${rollNumber}`);
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }

        // console.log(studentData)

        
        // if (deptName)
        // {
        //     const response2 = await fetch(`http://localhost:3000/api/GetEnrolledMinorCourses?dept=${deptName}`);
        // }

        const studentData = await response.json();
        console.log(studentData)
        const response2 = await fetch(`http://localhost:3000/api/GetEnrolledMinorCourses?dept="${studentData[0].dept_id}"&rollNo=${rollNumber}`);
        if (!response2.ok) {
            throw new Error(`Error fetching data: ${response2.statusText}`);
        }

        const minorEnrolledCourses = await response2.json();
        console.log("check")
        console.log(minorEnrolledCourses)
        return {
            props: {
                studentData,
                minorEnrolledCourses
            },
        };
    } catch (error) {
        console.error('Error:', error);
        return {
            notFound: true, // or handle the error in your preferred way
        };
    }
}



const UserDashboard = ({ studentData, minorEnrolledCourses }) => {
    const router = useRouter();

    return (
        <>
            <div>
                <h1 style={{ textAlign: 'center' }}>User Dashboard</h1>

                <h2 style={{ textAlign: 'center' }}> Welcome {studentData[0].name}</h2>
                {/* <h3>{studentData[0].minor_dept_id}</h3> */}
            </div>

            <MinorProgressBar department={studentData[0].dept_name} />

            
            <Container className="text-center" style={{marginTop:'4rem'}}>
                <Row>
                    <Col>
                        <h3>Completed Courses</h3>
                        {/* Add your completed courses component here */}
                        
                    </Col>
                    <Col>
                        <h3>Ongoing Courses</h3>
                        <div>
                            {minorEnrolledCourses.map(course => (
                                <p key={course.course_id}>{course.course_name}</p>
                            ))}
                        </div>
                        {/* {minorEnrolledCourses[0].course_name} */}
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default UserDashboard;

