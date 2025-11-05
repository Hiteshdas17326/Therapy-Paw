import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { Container, Form, Button } from "react-bootstrap";
import 'animate.css';

import { useDispatch } from "react-redux";
import { loginUser } from "../actions/userAction";
import images from '../components/Images/loginbgimage.jpg'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);

  const loginHandler = (e) => {
    e.preventDefault();
    const user = { email, password };
    dispatch(loginUser(user));
  };

  const textCenter = {
    textAlign: "center!important"
}
const formSignin = {
    width: "100 %",
    maxWidth: "330px",
    padding: "15px",
    margin: "auto",
    fontFamily: "cursive",
    fontWeight: "bold"
}

  return (
    <>
    {/* <div style={textCenter}>
                    <div className="text-center" style={{backgroundImage: 'url('+images+')',backgroundSize: "cover" , height: "90vh" }} >

                    <main className="form-signin" style={formSignin}>
                        <form  >
                            <img className="mb-4" src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Dog_Paw_Print.png" alt="" width="72" height="57" />
                            <h1 className="h3 mb-3 fw-normal"> </h1>

                            <div className="form-floating my-1">
                                <input type="email  " className="form-control" id="floatingInput"  value={email}
              onChange={(e) => setEmail(e.target.value)}  placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating my-1">
                                <input type="password " className="form-control" id="floatingPassword" value={password}
              onChange={(e) => setPassword(e.target.value)}  placeholder="Password" />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>

                            <div className="checkbox mb-3" >
                            <Link className="nav-link np" aria-current="page" to="/register" style={{color:"black"}}>create a new account</Link>
                               
                            </div>
                            <button className="w-100 btn btn-lg btn-info" type="submit" onClick={loginHandler}  >Login</button>
                            <p className="mt-5 mb-3 text-muted">©2021</p>
                        </form>
                    </main>
                </div>
                </div>
                <footer  className="container-fluid bg-dark my-0 py-3 fixed-bottom text-light">
            
                <p  className="mb-0 text-center">Copyright © 2020-2021 TherapyPaw.com</p>
            </footer> */}
      <div style={textCenter}>
      <div className="text-center" style={{backgroundImage: 'url('+images+')',backgroundSize: "cover" , height: "90vh" }} >

      <Container >
        <Form style={formSignin}>
        <img className="mb-4" src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Dog_Paw_Print.png" alt="" width="72" height="57" />
          <Form.Group className="mb-10" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
            {/* <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>image</Form.Label>
            <Form.Control
             type="text" 
             value={urlToImage}
             onChange={(e) => seturlToImage(e.target.value)} 
             placeholder="image url" />
          </Form.Group> */}
            
          </Form.Group>

          <Form.Group className="my-3" controlId="formBasicPassword">
          <Form.Label style={{}}>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </Form.Group>
          
          <div className="checkbox mb-3" >
                            <Link className="nav-link np" aria-current="page" to="/register" style={{color:"black"}}>create a new account</Link>
                               
                            </div>
          <Button variant="primary" className="w-100 btn btn-lg btn-info animate__animated animate__bounce  " onClick={loginHandler}>
            Login
          </Button>
        </Form>
      </Container>
      </div>
      </div>
      <footer  className="container-fluid bg-dark my-0 py-3 fixed-bottom text-light">
            
                <p  className="mb-0 text-center">Copyright © 2020-2021 TherapyPaw.com</p>
            </footer>
    </>
  );
};

export default Login;


// import React,{useState} from 'react'
// import { useHistory } from 'react-router-dom'
// import { Link } from 'react-router-dom'
// import images from '../components/Images/loginbgimage.jpg'

// export default function LoginPage () {
    
//         const textCenter = {
//             textAlign: "center!important"
//         }
//         const formSignin = {
//             width: "100 %",
//             maxWidth: "330px",
//             padding: "15px",
//             margin: "auto"
//         }
        
//        const [credentials, setCredentials] = useState({email: "", password: ""}) 
//     let history  = useHistory();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const response = await fetch("http://localhost:8080/api/auth/login", {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({email: credentials.email, password: credentials.password})
//         });
//         const json = await response.json()
//         console.log(json);
//         if (json.success){
//             // Save the auth token and redirect
//             localStorage.setItem('token', json.authtoken); 
//             history.push("/");

//         }
//         else{
//             alert("Invalid credentials");
//         }
//     }

//     const onChange = (e)=>{
//         setCredentials({...credentials, [e.target.name]: e.target.value})
//     }


//         return (
//             <>
//             <div style={textCenter}>
//                     <div className="text-center" style={{backgroundImage: 'url('+images+')',backgroundSize: "cover" , height: "90vh" }} >

//                     <main className="form-signin" style={formSignin}>
//                         <form onSubmit={handleSubmit} >
//                             <img className="mb-4" src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Dog_Paw_Print.png" alt="" width="72" height="57" />
//                             <h1 className="h3 mb-3 fw-normal"> </h1>

//                             <div className="form-floating my-1">
//                                 <input type="email  " className="form-control" id="floatingInput" value={credentials.email} name='email' placeholder="name@example.com" onChange={onChange}/>
//                                 <label htmlFor="floatingInput">Email address</label>
//                             </div>
//                             <div className="form-floating my-1">
//                                 <input type="password " className="form-control" id="floatingPassword" value={credentials.password} name='password' placeholder="Password" onChange={onChange}/>
//                                 <label htmlFor="floatingPassword">Password</label>
//                             </div>

//                             <div className="checkbox mb-3" >
//                             <Link className="nav-link np" aria-current="page" to="/SignInPage" style={{color:"black"}}>create a new account</Link>
                               
//                             </div>
//                             <button className="w-100 btn btn-lg btn-info" type="submit"   >Login</button>
//                             <p className="mt-5 mb-3 text-muted">©2021</p>
//                         </form>
//                     </main>
//                 </div>
//                 </div>
//                 <footer  className="container-fluid bg-dark my-0 py-3 fixed-bottom text-light">
            
//                 <p  className="mb-0 text-center">Copyright © 2020-2021 TherapyPaw.com</p>
//             </footer>
            
//             </>
//         )
    
// }







