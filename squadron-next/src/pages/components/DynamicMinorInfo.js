import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import MinorCoursesModal from './MinorCoursesModal';
import DynamicMinorModal from './DynamicMinorModal';

const DynamicMinorInfo = ({rollNumber}) => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [dynmodalShow, dynsetModalShow] = useState(false);
  const [minorData, setMinorData] = useState([]);
  const[studRollNum,setRollNum]=useState(0);
  const[studData,setStudData]=useState({});
  useEffect(() => {
    console.log("rollNumberrrr: " + rollNumber);
    setRollNum(rollNumber);
    const fetchData = async () => {
      try {
        const response = await fetch('https://snucompass.vercel.app/api/GetMinorDep');
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.statusText}`);
        }

        const data = await response.json();
        setMinorData(data);
        console.log(minorData);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []); // Run only once on component mount

  const toggleExpand = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const [selectedMinor, setSelectedMinor] = useState(null);
  const openModal = (minor) => {
    setSelectedMinor(minor.dept_id);
    setModalShow(true);
  };

  const closeModal = () => {
    setSelectedMinor(null);
    setModalShow(false);
  };


  const openDynamicModal = (dept_id) => {
    setStudData({
      roll_no:studRollNum,
      dept_id:dept_id
    });
    dynsetModalShow(true);
  };

  const closeDynamicModal = () => {
    setSelectedMinor({});
    dynsetModalShow(false);
  };


  return (
    <div>
      <h1>Your Progress in Minor Departments</h1>
      <div style={{ rowGap: '20px' }} className="row mb-4">
        {minorData.map((minor, index) => {
          const isExpanded = expandedCard === index;

          return (
            <div key={minor.dept_id} className="col-md-4">
              <Card>
                <Card.Body>
                  <Card.Title>{minor.dept_name}</Card.Title>
                  <Card.Subtitle>Credits: {minor.credits}</Card.Subtitle>

                  <div style={{ height: isExpanded ? 'auto' : '150px', overflow: 'hidden' }}>
                    <Card.Text>{minor.minor_description}</Card.Text>
                  </div>

                  {/* <div style={{ display: 'flex', flexWrap: 'wrap' ,justifyContent:'space-evenly'}}> */}
                    {minor.minor_description.length > 100 && (
                      <Button variant="primary"  onClick={() => toggleExpand(index)} style={{marginRight:"20px"}}>
                        {isExpanded ? 'Read Less' : 'Read More'}
                      </Button>
                    )}

                    <Button variant='primary' onClick={()=>openDynamicModal(minor.dept_id)}>Your Progress</Button>

                    
                  {/* </div> */}
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>

      {studData && dynmodalShow && (
        <DynamicMinorModal student={studData} show={dynmodalShow} onHide={closeDynamicModal} />
      )}
    </div>
  );
};

export default DynamicMinorInfo;
