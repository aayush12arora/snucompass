import React, { use, useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import MinorProgressBar from './MinorProgressBar';
import Table from 'react-bootstrap/Table';

function StudentDetailsModal({ student, show, onHide }) {
  const [completedCourses, setCompletedCourses] = useState([]);
  const [isFetchingData, setIsFetchingData] = useState(false);
  const[percent,setPercent]=useState(0);
  const[dep_name,setdep]=useState('');

  useEffect(() => {
    if (show && student && student?.roll_no) {
      setIsFetchingData(true);
        console.log("hai")
        setdep(student?.dept_id)
      const fetchCompletedCourses = async () => {
        try {
          const response = await fetch(`https://snucompass.vercel.app/api/GetCompletedCourses?rollNo=${student?.roll_no}&minorDep="${student?.dept_id}"`);
          if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
          }
          const coursesData = await response.json();
          setCompletedCourses(coursesData);

          
        const response3 = await fetch(`https://snucompass.vercel.app/api/GetProgressPercent?rollNo=${student?.roll_no}&minorDep="${student?.dept_id}"`);
        if (!response3.ok) {
            throw new Error(`Error fetching data: ${response2.statusText}`);
        }

        const percentBar = await response3.json();
        console.log("check")
        console.log(percentBar)
        setPercent(percentBar?.percentage)
        } catch (error) {
          console.error('Error:', error);
        } finally {
          setIsFetchingData(false);
        }
      };

      fetchCompletedCourses();
    }
  }, [show, student]);

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{student?.name}'s Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
    <MinorProgressBar department={dep_name} percentage={percent} />
        <h4>Completed Courses:</h4>
        {isFetchingData ? (
          <p>Loading...</p>
        ) : (
          <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Course ID</th>
              <th>Course Name</th>
              <th>Semester</th>
            </tr>
          </thead>
          <tbody>
            {completedCourses?.map((course) => (
              <tr key={course.course_id}>
                <td>{course.course_id}</td>
                <td>{course.course_name}</td>
                <td>{course.semester}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        )}

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default StudentDetailsModal;
