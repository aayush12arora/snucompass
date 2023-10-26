import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';

const MinorInfo = () => {
    return (
        <div>
            <h1>Minors offered at SNU</h1>
            <div style={{rowGap:'20px'}}className="row mb-4">
                <div className="col-md-4">
                    <Card>
                        <Card.Body>
                            <Card.Title> Minor in Communication</Card.Title>
                            <Card.Subtitle>Credits: 18</Card.Subtitle>
                            <Card.Text>Com is a good minor department</Card.Text>
                            <Button variant="primary">
                                Courses
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>Minor in Computer Science</Card.Title>
                            <Card.Subtitle>Credits: 18</Card.Subtitle>
                            <Card.Text>CSE is a good minor major department</Card.Text>
                            <Button variant="primary">
                                Courses
                            </Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-md-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>Minor in Dance</Card.Title>
                            <Card.Subtitle>Credits: 18</Card.Subtitle>
                            <Card.Text>Dance is a good minor department</Card.Text>
                            <Button variant="primary">
                                Courses
                            </Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-md-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>Minor in Design</Card.Title>
                            <Card.Subtitle>Credits: 18</Card.Subtitle>
                            <Card.Text>DES is a good minor department</Card.Text>
                            <Button variant="primary">
                                Courses
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default MinorInfo;
