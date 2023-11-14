// MinorInfo.js
import React, { useState,useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import MinorCoursesModal from './components/MinorCoursesModal';

export async function getServerSideProps(context) {
  try {
    const response = await fetch(`https://snucompass.vercel.app/api/GetMinorDep`);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }

    const MinorData = await response.json();
    console.log(MinorData)
    return {
      props: {
        MinorData,
      },
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      notFound: true,
    };
  }
}

const MinorInfo = ({ MinorData }) => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [selectedMinor, setSelectedMinor] = useState(null);
  const[selectedMin,setSelectedMin]=useState(null);

  const toggleExpand = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  useEffect(() => {
    // Log the updated value of selectedMinor whenever it changes
    // console.log(selectedMinor);
    setSelectedMinor(selectedMinor);
    setSelectedMin(selectedMinor);
  }, [selectedMinor]);
  const openModal = (minor) => {
    setSelectedMinor(minor.dept_id);
    // console.log(minor.dept_id);
    setSelectedMinor(minor.dept_id);
    // console.log(selectedMinor);
    setModalShow(true);
  };

  const closeModal = () => {
    setSelectedMinor(null);
    setModalShow(false);
  };

  return (
    <div>
      <h1>Minors offered at SNU</h1>
      <div style={{ rowGap: '20px' }} className="row mb-4">
        {MinorData.map((minor, index) => {
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

                  {minor.minor_description.length > 100 && (
                    <Button variant="primary" style={{ marginRight: '20px' }} onClick={() => toggleExpand(index)}>
                      {isExpanded ? 'Read Less' : 'Read More'}
                    </Button>
                  )}

                  <Button variant="primary" onClick={ () =>  openModal(minor)}>
                    Courses
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>

      {selectedMin && modalShow && (
        <MinorCoursesModal minor={selectedMin} show={modalShow} onHide={closeModal} />
      )}
    </div>
  );
};

export default MinorInfo;
