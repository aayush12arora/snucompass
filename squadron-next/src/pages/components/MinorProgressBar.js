import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect,useState } from 'react';

function MinorProgressBar(props) {
    const[minorName,SetMinorName]=useState('');

    useEffect(()=>{
        SetMinorName(props.department);
    })
  return (
    <Container>
      <Row>
        <Col><h2>
        Pursuing Minor in {minorName}
            </h2></Col>
      </Row>
      <Row>
        <Col>
          <ProgressBar now={25} label={`${25}%`} />
        </Col>
      </Row>
    </Container>
  );
}

export default MinorProgressBar;