import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';

export async function getServerSideProps(context) {
    const { rollNumber } = context.query;
    // const[deptName,SetDeptName]=useState('');
    
    try {
        const response = await fetch(`https://sqaudron.vercel.app/api/GetMinorDep`);
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }

        const MinorData = await response.json();
        console.log(MinorData)
        return {
            props: {
                MinorData
            },
        };
    } catch (error) {
        console.error('Error:', error);
        return {
            notFound: true, // or handle the error in your preferred way
        };
    }
}


const MinorInfo = ({MinorData}) => {

    let minorList = MinorData.map((minor) => {
        return (
            <div className="col-md-4">
                <Card>
                    <Card.Body>
                        <Card.Title> {minor.dept_name}</Card.Title>
                        <Card.Subtitle>Credits: {minor.credits}</Card.Subtitle>

                        {/* <div style={{height: '100px', overflow: 'hidden'}}> */}
                            <Card.Text>{minor.minor_description}</Card.Text>
                        {/* </div> */}
                        <Link href={`/MinorCourses?minor=${minor.minor_id}`}>
                            <Button variant="primary">
                                Courses
                            </Button>
                        </Link>
                    </Card.Body>
                </Card>
            </div>
        )
    });
    return (
        <div>
            <h1>Minors offered at SNU</h1>
            <div style={{rowGap:'20px'}}className="row mb-4">
                {minorList}
            </div>
        </div>
    );
}

export default MinorInfo;
