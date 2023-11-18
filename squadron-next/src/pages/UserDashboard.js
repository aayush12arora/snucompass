import { useRouter } from 'next/router';
import { useState } from 'react';
import MinorProgressBar from './components/MinorProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import DynamicMinorInfo from './components/DynamicMinorInfo';

export async function getServerSideProps(context) {
    const { rollNumber } = context.query;
    // const[deptName,SetDeptName]=useState('');
    
    try {
        const response = await fetch(`https://snucompass.vercel.app/api/GetStudentData?rollNo=${rollNumber}`);
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }

        // console.log(studentData)
        // if (deptName)
        // {
        //     const response2 = await fetch(`http://localhost:3000/api/GetEnrolledMinorCourses?dept=${deptName}`);
        // }

        const studentData = await response.json();
        console.log(studentData[0])
        if (studentData[0]?.dept_id === null) {
          console.log("Dept_id is null. Exiting early.");
          return {
            props: {
              
              studentData
            }
          };
      }
        const response2 = await fetch(`https://snucompass.vercel.app/api/GetEnrolledMinorCourses?dept="${studentData[0].dept_id}"&rollNo=${rollNumber}`);
        if (!response2.ok) {
            throw new Error(`Error fetching data: ${response2.statusText}`);
        }

        const minorEnrolledCourses = await response2.json();
        console.log("check")
        console.log(minorEnrolledCourses)


        const response3 = await fetch(`https://snucompass.vercel.app/api/GetProgressPercent?rollNo=${rollNumber}&minorDep="${studentData[0].dept_id}"`);
        if (!response3.ok) {
            throw new Error(`Error fetching data: ${response2.statusText}`);
        }

        const percentBar = await response3.json();
        console.log("check")
        console.log(percentBar)

        const response4 = await fetch(`https://snucompass.vercel.app/api/GetCompletedCourses?rollNo=${rollNumber}&minorDep="${studentData[0].dept_id}"`);
        if (!response4.ok) {
            throw new Error(`Error fetching data: ${response2.statusText}`);
        }

        const CompletedList= await response4.json();
        console.log("check")
        console.log(CompletedList)

        return {
            props: {
                studentData,
                minorEnrolledCourses,
                percentBar,
                CompletedList
            },
        };
    } catch (error) {
        console.error('Error:', error);
        return {
            notFound: true, // or handle the error in your preferred way
        };
    }
}

const UserDashboard = ({ studentData, minorEnrolledCourses, percentBar,CompletedList }) => {
    const router = useRouter();
    const { rollNumber } = router.query;
  
    if (studentData[0]?.dept_name ===null || studentData[0]?.dept_id===null) {
      console.log("null hai bhai")
      return (
        <div>
          <h1 style={{ textAlign: 'center' }}>User Dashboard</h1>
          <h2 style={{ textAlign: 'center' }}> Welcome {studentData[0].name}</h2>
          <p style={{ textAlign: 'center' }}>You are not pursuing a minor in any department.</p>

          <DynamicMinorInfo  rollNumber={rollNumber} />
        </div>
      );
    }
  
    return (
      <>
        <div>
          <h1 style={{ textAlign: 'center' }}>User Dashboard</h1>
  
          <h2 style={{ textAlign: 'center' }}> Welcome {studentData[0].name}</h2>
          {/* <h3>{studentData[0].minor_dept_id}</h3> */}
        </div>
  
        <MinorProgressBar department={studentData[0].dept_name} percentage={percentBar?.percentage} />
  
        <Container className="text-center" style={{ marginTop: '4rem' }}>
          <Row>
            <Col>
              <h3>Completed Courses</h3>
              {/* Add your completed courses component here */}
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Course ID</th>
                    <th>Course Name</th>
                    <th>Semester</th>
                  </tr>
                </thead>
                <tbody>
                  {CompletedList?.map((course) => (
                    <tr key={course.course_id}>
                      <td>{course.course_id}</td>
                      <td>{course.course_name}</td>
                      <td>{course.semester}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
            <Col>
              <h3>Ongoing Courses</h3>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Course ID</th>
                    <th>Course Name</th>
                  </tr>
                </thead>
                <tbody>
                  {minorEnrolledCourses.map((course) => (
                    <tr key={course.course_id}>
                      <td>{course.course_id}</td>
                      <td>{course.course_name}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </>
    );
  };
  
  export default UserDashboard;