
import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

function  MinorCoursesModal({ minor, show, onHide }) {
  const [Courses, setCompletedCourses] = useState([]);
  const [isFetchingData, setIsFetchingData] = useState(false);

  useEffect(() => {
   
    if (show && minor) {
      setIsFetchingData(true);
      console.log(minor)
      const fetchCompletedCourses = async () => {
        try {
            console.log("namaste")
            console.log(minor)
          const response = await fetch(`https://snucompass.vercel.app/api/GetMinorCourseMap?dept="${minor}"`);
          if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
          }
          const coursesData = await response.json();
          console.log(coursesData)
          setCompletedCourses(coursesData);
        } catch (error) {
          console.error('Error:', error);
        } finally {
          setIsFetchingData(false);
        }
      };

      fetchCompletedCourses();
    }
  }, [show, minor]);

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{minor}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Offered Minor Courses List:</h4>
        {isFetchingData ? (
          <p>Loading...</p>
        ) : (
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Course ID</th>
                <th>Course Name</th>
                <th>Course Credits</th>
              </tr>
            </thead>
            <tbody>
              {Courses?.map((course) => (
                <tr key={course?.course_id}>
                  <td>{course?.course_id}</td>
                  <td>{course?.course_name}</td>
                  <td>{course?.course_credits}</td>
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

export default MinorCoursesModal;
