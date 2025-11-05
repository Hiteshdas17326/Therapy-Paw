import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col } from "react-bootstrap";
import { getAllDoctors } from '../actions/doctorAction';
import Doctors from '../components/Doctors';
import Loader from '../components/Loader';
import Error from '../components/Error';


const DoctorScreen = () => {
  const dispatch = useDispatch()
  const doctorsState = useSelector(state => state.getAllDoctorReducer)
  const { doctors, load, error } = doctorsState;
  console.log(doctors)
  useEffect(() => {
    dispatch(getAllDoctors());
  }, [dispatch]);
  return (
    <>
      <Container>
        {
          load ? (<Loader />)
            : error ? (

              <Error>Error while fetching {error}</Error>
            )
              : (
                <Row>
                  {doctors?.map((doctors) => (
                    <Col md={4} key={doctors.name}>
                      <Doctors name={doctors.name}
                        description={doctors.description}
                        image={doctors.image}
                        height="300"
                        width="300"
                        education={doctors.education}
                        phone={doctors.phone}
                        price={doctors.price} />
                        {/* <Doctors doctors={doctors} /> */}

                    </Col>
                  ))};

                </Row>
              )}

      </Container>
      <footer
        _ngcontent-serverapp-c52=""
        className="container-fluid bg-dark my-0 py-3 text-light"
      >
        <p _ngcontent-serverapp-c52="" className="mb-0 text-center">
          Copyright © 2020-2021 TherapyPaw.com
        </p>
      </footer>
    </>
  )
}

export default DoctorScreen