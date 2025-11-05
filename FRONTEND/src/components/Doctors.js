import React, { useState } from "react";
import { Card, Button, Col, Row , Modal  } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addToCart } from '../actions/cartAction'

const Doctors = ( doctors ) => {
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(1);
  
    const addToCartHandler = () => {
  
      dispatch(addToCart(doctors , quantity))
    }
  
   
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
      
  return (
    <>
    <div className="my-3">
    <Card className="max-w-sm rounded-2xl overflow-hidden shadow-lg" style={{ width: '18rem',borderRadius: "25px" }} >
      <Card.Img variant="top" src={doctors.image}   height="200rem" width="10rem" className="card-img-top" alt="..." onClick={handleShow} />
      <Card.Body>
        <Card.Title onClick={handleShow} style={{ fontFamily: "cursive", fontSize: "xx-large" }}>{doctors.title}</Card.Title>
        <Card.Title>{doctors.name}</Card.Title>
        <Card.Text>
          {doctors.description}...
        </Card.Text>
        <Row>
        <Col md={4}>
          <h6>NO. Of HOURS</h6>
          <select
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            {[...Array(10).keys()].map((v, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1} 
              </option>
            ))}
          </select>

        </Col>
        </Row>
        <Card.Text>
          <Col>
          Price : {doctors.price * quantity} /-RS</Col>
        </Card.Text>
        <Button variant="primary" className="btn btn-info" onClick={addToCartHandler}>Add to Cart</Button>
      </Card.Body>
    </Card>
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg">
                <Modal style={{borderRadius: "50px" }} show={show}>
                <Modal.Header >
                        <Modal.Title style={{fontFamily: "cursive", fontSize: "xx-large"}}>{doctors.name}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <img src={doctors.image} height="300rem" width="1rem" className="card-img-top" alt="..." />

                        <p className="my-3">{doctors.description}</p>
                        <strong style={{font: "initial", fontSize: "x-large"}} >{doctors.author}</strong>
                        <p>
                        <strong>Price : {doctors.price * quantity} /-RS</strong></p>
                    </Modal.Body>

                    <Modal.Footer>
                        <button className="btn btn-info" onClick={handleClose}>Close</button>
                        <button className="btn btn-info">Save changes</button>
                    </Modal.Footer>
                </Modal>
                </div>
                </div>
    </>
  )
}

export default Doctors