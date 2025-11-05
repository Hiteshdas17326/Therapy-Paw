import React ,{useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { Container, Row, Col } from "react-bootstrap";
import {getAllDogs} from '../actions/dogsAction'
import Dog from '../components/Dogs';
import Loader from '../components/Loader';
import Error from '../components/Error';


const HomeScreen = () => {
  const dispatch = useDispatch()
  const dogsState = useSelector(state => state.getAllDogReducer)
  const { loading , dogs ,error } = dogsState;
  console.log(dogs)
  useEffect(() => {
    dispatch(getAllDogs());
  } , [dispatch] );

  return (
    <>
    <Container>
      {
      loading ? ( <Loader/> )
                    :error ? (
                      
                    <Error>Error while fetching {error}</Error>
                    )
                    : (
                      <Row>      
            {dogs?.map((dogs) => (
              <Col md={4} key={dogs.title}>
                <Dog dogs={dogs} />
                
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

export default HomeScreen



//http://localhost:8080/api/dogs/getAllDogs