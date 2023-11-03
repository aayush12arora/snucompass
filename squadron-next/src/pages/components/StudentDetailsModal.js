import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function StudentDetailsModal({ student, show, onHide }) {
  const [completedCourses, setCompletedCourses] = useState([]);
  const [isFetchingData, setIsFetchingData] = useState(false);

  useEffect(() => {
    if (show && student && student.roll_no) {
      setIsFetchingData(true);
        console.log("hai")
      const fetchCompletedCourses = async () => {
        try {
          const response = await fetch(`https://sqaudron.vercel.app/api/GetCompletedCourses?rollNo=${student.roll_no}&minorDep="${student.dept_id}"`);
          if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
          }
          const coursesData = await response.json();
          setCompletedCourses(coursesData);
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
        <Modal.Title>{student.name}'s Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Completed Courses:</h4>
        {isFetchingData ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {completedCourses.map((course) => (
              <li key={course.course_id}>{course.course_name}</li>
            ))}
          </ul>
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
