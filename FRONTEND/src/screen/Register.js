import React,{useState , useEffect} from 'react'
import { Container, Form, Button } from "react-bootstrap";
import {useSelector,useDispatch} from 'react-redux';
import { registerUser } from '../actions/userAction';
import Loader from '../components/Loader';
import Success from '../components/Success';
import Error from '../components/Error';
import images from '../components/Images/siginbgimage.jpg'

const Register = () => {
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [confirmPassword , setConfirmPassword] = useState('')


    const registerState = useSelector(state => state.registerUserReducer)
    const {error , success , loading} = registerState

    const dispatch = useDispatch()

    useEffect(() => {
      if (localStorage.getItem("currentUser")) {
        window.location.href = "/login";
      }
    }, []);

    const registerHandler =(e)=>{
      e.preventDefault();
        if(password !== confirmPassword){
            alert('password do not match ')
            
        }else{
            const user = {name,email , password,confirmPassword};
            dispatch(registerUser(user))
        }
    }
    const textCenter = {
      textAlign: "center-important"
  }
  const formSignin = {
    width: "100 %",
    maxWidth: "330px",
    padding: "15px",
    margin: "auto",
    lineHeight : "100px",
    fontFamily: "cursive",
    fontWeight: "bold"
}
  return (
    <>
    
        {loading && <Loader />}
        {success && <Success success="User Register Successfully" />}
        {error && <Error error="something went wrong" />}
        <div style={textCenter}>
        <div className="text-center" style={ {backgroundImage: 'url('+images+')',backgroundSize: "cover" , height: "100vh" }} >
        <Container>
        <Form style={formSignin} >
        <img className="mb-4" src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Dog_Paw_Print.png" alt="" width="72" height="57" />
          <h1 className=''>Register</h1>
          
          <Form.Group className="mb-3" style={{}} controlId="formBasicName">
            
            <Form.Control
              type="text"
              placeholder="enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={email}
              
              onChange={(e) => setEmail(e.target.value)}
            />
            
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" className="w-100 btn btn-lg btn-info animate__animated animate__bounce " onClick={registerHandler} >
            Register
          </Button>
        </Form>
        </Container>
        </div>
        </div>
      
      <footer _ngcontent-serverapp-c52="" className="container-fluid bg-dark my-0 py-3 fixed-bottom text-light">
         <p _ngcontent-serverapp-c52="" className="mb-0 text-center">Copyright © 2020-2021 TherapyPaw.com</p>
      </footer>
    </>
    
    
  )
}

export default Register; 


// import React,{useState} from 'react'
// import { useHistory } from 'react-router-dom'
// import images from '../components/Images/siginbgimage.jpg'

// const Register = () => {
//     const textCenter = {
//         textAlign: "center-important",
//         fontFamily:"cursive"
//     }
//     const formSignin = {
//         width: "100 %",
//         maxWidth: "330px",
//         padding: "15px",
//         margin: "auto"
//     }

//     const [credentials, setCredentials] = useState({email: "", password: "" , name: "" , Number:"" }) 
//     let history  = useHistory();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const {name , password , email} = credentials
//         const response = await fetch("http://localhost:8080/api/auth/createuser", {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({name , email , password})
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



//     return (
//         <>
//         <div style={textCenter}>
//         <div className="text-center" style={ {backgroundImage: 'url('+images+')',backgroundSize: "cover" , height: "100vh" }} >

//             <main className="form-signin" style={formSignin}>
//                 <form onSubmit={handleSubmit}>
//                     <img className="mb-4" src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Dog_Paw_Print.png" alt="" width="72" height="57" />
//                     <h1 className="h3 mb-3 fw-normal">Register</h1>

//                     <div className="form-floating my-1">
//                         <input type="name" className="form-control" id="floatingInput" placeholder="Name" name='name' onChange={onChange}/>
//                         <label htmlFor="floatingInput">Name</label>
//                     </div>
//                     <div className="form-floating my-1">
//                         <input type="number" className="form-control" id="floatingInput" placeholder="0000000000" name='number' minLength={10} required onChange={onChange}/>
//                         <label htmlFor="floatingInput">Phone Number</label>
//                     </div>
//                     <div className="form-floating my-1">
//                         <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name='email' onChange={onChange}/>
//                         <label htmlFor="floatingInput">Email address</label>
//                     </div>
//                     <div className="form-floating my-1">
//                         <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name='password' minLength={5} required onChange={onChange}/>
//                         <label htmlFor="floatingPassword">Password</label>
//                     </div>
                    
//                     <div className="checkbox mb-3">
                        
//                         <label>
//                             <input type="checkbox" value="remember-me" /> <strong>Remember me</strong>
//                         </label>
//                     </div>
//                     <button className="w-100 btn btn-lg btn-info" type="submit" href="/About" >Sign in</button>
//                     <p className="mt-5 mb-3 ">©2021</p>
//                 </form>
//             </main>
//         </div>
//         </div>

//         <footer _ngcontent-serverapp-c52="" className="container-fluid bg-dark my-0 py-3 fixed-bottom text-light">
            
//                 <p _ngcontent-serverapp-c52="" className="mb-0 text-center">Copyright © 2020-2021 TherapyPaw.com</p>
//             </footer>
//         </>
//     )
// }

// export default Register
