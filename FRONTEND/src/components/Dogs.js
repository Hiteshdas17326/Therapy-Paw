import React, { useState } from "react";
import { Card, Button, Col, Row , Modal  } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addToCart } from '../actions/cartAction'

const Dog = ({ dogs }) => {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1);

  const addToCartHandler = () => {

    dispatch(addToCart(dogs , quantity))
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <div className="my-3">
    <Card className="max-w-sm rounded-2xl overflow-hidden shadow-lg" style={{ width: '18rem',borderRadius: "25px" }} >
      <Card.Img variant="top" src={dogs.urlToImage}   height="200rem" width="10rem" class="card-img-top" alt="..." onClick={handleShow} />
      <Card.Body>
        <Card.Title onClick={handleShow} style={{ fontFamily: "cursive", fontSize: "xx-large" }}>{dogs.title}</Card.Title>
        <Card.Title>{dogs.breed}</Card.Title>
        <Card.Text>
          {dogs.description.slice(0, 129)}...
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
          Price : {dogs.price * quantity} /-RS</Col>
        </Card.Text>
        <Button variant="primary" className="btn btn-info" onClick={addToCartHandler}>Add to Cart</Button>
      </Card.Body>
    </Card>
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg">
                <Modal style={{borderRadius: "50px" }} show={show}>
                <Modal.Header >
                        <Modal.Title style={{fontFamily: "cursive", fontSize: "xx-large"}}>{dogs.title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <img src={dogs.urlToImage} height="300rem" width="1rem" class="card-img-top" alt="..." />

                        <p className="my-3">{dogs.description}</p>
                        <strong style={{font: "initial", fontSize: "x-large"}} >{dogs.author}</strong>
                        <p>
                        <strong>Price : {dogs.price * quantity} /-RS</strong></p>
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

export default Dog