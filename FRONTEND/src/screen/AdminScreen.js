import React, { useEffect } from "react";
import { Row, Col, Container, Button, ButtonGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import AddNewDog from '../components/Admin/AddNewDog';
 import Orderlist from '../components/Admin/Orderlist';
 import Userlist from '../components/Admin/Userlist';
 import Doglist from '../components/Admin/Doglist';
const AdminScreen = ({ history }) => {
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  useEffect(() => {
    if (localStorage.getItem("currentUser") === null || !currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, [currentUser]);
  return (
    <>
      <Container>
        <Row>
          <h1 className="text-center bg-dark text-light p-2">Admin Panel</h1>
          <Col md={3}>
            <ButtonGroup vertical style={{ minHeight: "400px" }} >
              <Button onClick={() => history.push("/admin/userlist")} className="btn btn-info ">
                All Users
              </Button>
              <Button onClick={() => history.push("/admin/doglist")} className="btn btn-info ">
                All Dogs
              </Button>
              <Button onClick={() => history.push("/admin/addnewdog")} className="btn btn-info ">
                Add New dogs
              </Button>
              <Button onClick={() => history.push("/admin/orderlist")} className="btn btn-info ">
                All Orders
              </Button>
            </ButtonGroup>
          </Col>
          <Col md={9}>
            <Switch>
              
              <Route path="/admin/userlist" component={Userlist} exact />
              {/* <Route
                path="/admin/editpizza/:pizzaId"
                component={EditPizza}
                exact
              /> */}
             <Route path='/admin/doglist' component={Doglist} exact />
              <Route path="/admin/addnewdog" component={AddNewDog} exact />
             <Route path="/admin/orderlist" component={Orderlist} exact />
             <Route path="/admin" component={Userlist} exact />
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminScreen;




// import React from 'react'
// import { Row, Col, Container, Button, ButtonGroup } from "react-bootstrap";
// import { Switch, Route } from "react-router-dom";
// import AddNewDog from '../components/Admin/AddNewDog';
// import Orderlist from '../components/Admin/Orderlist';
// import Userlist from '../components/Admin/Userlist';
// import Doglist from '../components/Admin/Doglist';

// const AdminScreen = ({history}) => {
//   return (
//     <>
//     <Container>
//     <Row>
//     <h1 className="text-center bg-dark text-light p-2">Admin Panel</h1>        <Col md={4}>
//           <ButtonGroup vertical style={{ minHeight: "400px" }}>
//           <Button onClick={() => history.push("/admin/userlist")}>ALL USERS</Button>
//           <Button onClick={() => history.push("/admin/doglist")}>ALL DOGS</Button> 
//           <Button onClick={() => history.push("/admin/addnewpizza")}>add new dogs</Button> 
//           <Button onClick={() => history.push("/admin/orderlist")}>all Orders</Button>   
//           </ButtonGroup>  
//         </Col>

//         <Col md={10}>
//             <Switch>
//               <Route path="/admin" component={Userlist} exact />
//               <Route path="/admin/userlist" component={Userlist} exact />
//               {/* <Route
//                 path="/admin/editpizza/:pizzaId"
//                 component={EditPizza}
//                 exact
//               /> */}
//               <Route path='/admin/doglist' component={Doglist} exact />
//               <Route path="/admin/addnewpizza" component={AddNewDog} exact />
//               <Route path="/admin/orderlist" component={Orderlist} exact />
//             </Switch>
//           </Col>


//     </Row>
//     </Container>
    
    
//     </>
//   )
// }

// export default AdminScreen