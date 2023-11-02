import { useRouter } from 'next/router';
import { useState } from 'react';
import MinorProgressBar from './components/MinorProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap';



export async function getServerSideProps(context) {
    const{auth_user}=context.query

    try {
        const response = await fetch(`https://sqaudron.vercel.app/api/GetMinorStudents?fac_email=${auth_user}`);
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



import { ListGroup } from 'react-bootstrap';

const FacultyDashboard = ({studMinorData}) => {
    const router = useRouter();

    return (
        <>
            <div>
                <h1 style={{ textAlign: 'center' }}>Teacher Dashboard</h1>

                <h2 style={{ textAlign: 'center' }}> Welcome {studMinorData[0].faculty_name}</h2>

                <h3 style={{ textAlign: 'center' }}> Students currently pursuing minor in {studMinorData[0].dept_id}</h3>
                <ListGroup>
                    {studMinorData.map((student) => (
                        <ListGroup.Item key={student.roll_no}>
                            <h3>{student.name}</h3>
                            <p>Roll No: {student.roll_no}</p>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </div>

        </>
    );
};

export default FacultyDashboard;

