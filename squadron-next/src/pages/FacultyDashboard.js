import { useRouter } from 'next/router';
import { useState } from 'react';
import MinorProgressBar from './components/MinorProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import StudentDetailsModal from './components/StudentDetailsModal';
//REMEMBER TO CHANGE API ENDPOINT WHILE PUSHING TO PRODUCTION


function MyVerticallyCenteredModal(props) {

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export async function getServerSideProps(context) {
    const{auth_user}=context.query

    try {
        const response = await fetch(`https://snucompass.vercel.app/api/GetMinorStudents?fac_email=${auth_user}`);
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }

        const studMinorData = await response.json();
        console.log(studMinorData)
        return {
            props: {
                studMinorData
            },
        };
    }
    catch(error)
    {
        console.error('Error:', error);
        return {
            notFound: true, // or handle the error in your preferred way
        };
    }
}




const FacultyDashboard = ({studMinorData}) => {
    const router = useRouter();
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [modalShow, setModalShow] = useState(false);

    const openModal = (student) => {
        setSelectedStudent(student);
        setModalShow(true);
      };
    
      const closeModal = () => {
        setSelectedStudent(null);
        setModalShow(false);
      };
    return (
        <>
            <div>
                <h1 style={{ textAlign: 'center' }}>Teacher Dashboard</h1>

                <h2 style={{ textAlign: 'center' }}> Welcome {studMinorData[0]?.faculty_name}</h2>

                <h3 style={{ textAlign: 'center' }}> Students currently pursuing minor in {studMinorData[0]?.dept_id}</h3>


                <ListGroup>
                    
                    {studMinorData.map((student) => (
                        <ListGroup.Item key={student.roll_no} onClick={() => openModal(student)} style={{cursor:'pointer'}}>
                            <h3>{student.name}</h3>
                            <p>Roll No: {student.roll_no}</p>
                        </ListGroup.Item>
                    ))}
                </ListGroup>

                        {/* <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
/> */}
                {selectedStudent && modalShow && (
        <StudentDetailsModal student={selectedStudent} show={modalShow} onHide={closeModal} />
      )}
            </div>

        </>
    );
};

export default FacultyDashboard;

