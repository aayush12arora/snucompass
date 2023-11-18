// AddCourseModal.js
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function AddCourseModal({ show, onHide, addCourse }) {
  const [courseData, setCourseData] = useState({
    course_id: '',
    course_name: '',
    course_desc: '',
    course_credits: 0,
    course_medium: '',
    dept_id: '',
    semester: '',
    UWE: 0, // Initialize UWE and Me to 0
    Me: 0,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Use a conditional statement to handle checkboxes
    const newValue = type === 'checkbox' ? (checked ? 1 : 0) : value;

    setCourseData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Call your API endpoint here
    console.log( JSON.stringify(courseData))
    try {
      const response = await fetch('https://snucompass.vercel.app/api/PostNewCourse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(courseData),
      });

      if (!response.ok) {
        throw new Error(`Error posting data: ${response.statusText}`);
      }

      // Handle success as needed

      // Close the modal
      onHide();
    } catch (error) {
      console.error('Error:', error);
      // Handle error as needed
    }finally {
      // Stop loading regardless of success or error
      setLoading(false);
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add Course</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formCourseId">
            <Form.Label>Course ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Course ID"
              name="course_id"
              value={courseData.course_id}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formCourseName">
            <Form.Label>Course Name</Form.Label>
            
            <Form.Control
              type="text"
              placeholder="Enter Course Name"
              name="course_name"
              value={courseData.course_name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formCourseDesc">
            <Form.Label>Course Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter Course Description"
              name="course_desc"
              value={courseData.course_desc}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formCourseCredits">
            <Form.Label>Course Credits</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Course Credits"
              name="course_credits"
              value={courseData.course_credits}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formCourseMedium">
            <Form.Label>Course Medium</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Course Medium"
              name="course_medium"
              value={courseData.course_medium}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formDeptId">
            <Form.Label>Department ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Department ID"
              name="dept_id"
              value={courseData.dept_id}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formSemester">
            <Form.Label>Semester</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Semester"
              name="semester"
              value={courseData.semester}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formUWE">
            <Form.Check
              type="checkbox"
              label="UWE"
              name="UWE"
              checked={courseData.UWE === 1} // Check if UWE is 1
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formMe">
            <Form.Check
              type="checkbox"
              label="Me"
              name="Me"
              checked={courseData.Me === 1} // Check if Me is 1
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            {loading ? 'Adding...' : 'Add Course'}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
