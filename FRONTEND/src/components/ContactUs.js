import React from 'react'
import { Form, Container, Row, Col, Card } from 'react-bootstrap'
const ContactUs = () => {
    const formStyle = {
        textAlign: "center-important",
        width: "100 %",
        maxWidth: "530px",
        padding: "15px",
        margin: "auto",


    }

    const mapStyle = {
        position: "relative",
        textAlign: "right",
        height: "490px",
        width: "615px",
        marginTop: "50px",
        marginRight: "50px"
    }
    return (
        <>
            <div class="p-4 p-md-5 mb-5 text-white  bg-dark" style={{ background: "aqua" }}>
                <Container>
                <Row md="4">
                    <Form style={formStyle} >
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>

                    <div class="mapouter" style={mapStyle}>
                        <div class="gmap_canvas">
                            <iframe width="715" height="490" id="gmap_canvas" src="https://maps.google.com/maps?q=Salt%20Pan%20Rd,%20Vijay%20Nagar,%20Antop%20Hill,%20Mumbai,%20Maharashtra%20400037&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                            </iframe><a href="https://fmovies-online.net">
                            </a>


                        </div>
                    </div>
                </Row>
                <Row>
                    <Col md={5}>
                        <h3>Give us a Shout,</h3>
                        <h3>We'll make u a believer.</h3>
                        <span>
                            Reach us by Hitesh Das
                        </span>
                        <p>hiteshtherapypaw@paw.com</p>
                        <p>+91 9967385009</p>
                    </Col>
                </Row>
                </Container>
            </div>

            {/* <div style={{background: "aqua"}}>
                <div >
                    <Row >
                        <Card className="max-w-sm rounded-2xl overflow-hidden shadow-lg " style={{ width: '500px',borderRadius: "25px" }}>
                        <Form style={formStyle} >
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                            </Row>
                            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Form>
                        </Card>
                        
                        <div class="mapouter" style={mapStyle}>
                            <div class="gmap_canvas">
                                <iframe width="715" height="490" id="gmap_canvas" src="https://maps.google.com/maps?q=Salt%20Pan%20Rd,%20Vijay%20Nagar,%20Antop%20Hill,%20Mumbai,%20Maharashtra%20400037&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                                </iframe><a href="https://fmovies-online.net">
                                </a>
                                <br></br>
                                 <style>.mapouter{{position:"relative",textAlign:"right",height:"490px",width:"715px"}}</style>
                <Link to="https://www.embedgooglemap.net">how to add a google map to my website</Link><style>.gmap_canvas {{overflow:"hidden",background:"none!important",height:"490px",width:"715px"}}</style> 
                            </div>
                        </div>
                        
                    </Row>
                </div>
                </div> */}
            <footer className="container-fluid bg-dark my-0 py-3 fixed-bottom text-light">

                <p className="mb-0 text-center">Copyright © 2020-2021 TherapyPaw.com</p>
            </footer>
        </>
    )
}

export default ContactUs