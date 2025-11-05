import { Form, Row, Col, Button } from 'react-bootstrap'
import { useState } from 'react'
import { addDog} from '../../actions/dogsAction'
import { useDispatch , useSelector } from 'react-redux'
import Loader from '../Loader'
import Error from '../Error'
import Success from '../Success'




const AddNewDog = () => {

  const addDogState = useSelector(state => state.addDogReducer)
const {loading , error , success} = addDogState


  const [title, settitle] = useState('')
  const [description, setdescription] = useState('')
  const [urlToImage, seturlToImage] = useState('')
  const [price, setprice] = useState("")
  const [breed, setbreed] = useState("")
  const dispatch = useDispatch()

  const submitForm = (e) => {
    e.preventDefault();
    const dog ={
      title, 
      breed,
      urlToImage,
      description,
      price
    }
    dispatch(addDog(dog));
  }
  

  return (
    <div>
      {loading && (<Loader/>)}
      {error && (<Error error="add new pizza error"/>)}
      {success && (<Success success="Pizza Added Successfully"/>)}
      <Form onSubmit={submitForm}  className="bg-light p-4">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>name</Form.Label>
            <Form.Control 
            type="text" 
            value={title} 
            onChange={(e) => settitle(e.target.value)} 
            placeholder="Enter name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>price</Form.Label>
            <Form.Control
             type="text" 
             value={price} 
             onChange={(e) => setprice(e.target.value)}
             placeholder="price /hr"/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>breed</Form.Label>
            <Form.Control
             type="text" 
             value={breed}
             onChange={(e) => setbreed(e.target.value)} 
             placeholder="breed" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>description</Form.Label>
          <Form.Control 
          type="text" 
          value={description} 
          onChange={(e) => setdescription(e.target.value)}
          placeholder="description" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>image</Form.Label>
            <Form.Control type="text" 
            value={urlToImage}
            onChange={(e) => seturlToImage(e.target.value)} 
            placeholder="image url"/>
          </Form.Group>

          
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          ADD NEW DOG
        </Button>
      </Form>
    </div>
  )
}

export default AddNewDog