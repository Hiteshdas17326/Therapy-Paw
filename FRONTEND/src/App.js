import "./App.css";
import { BrowserRouter ,Switch ,Route } from "react-router-dom";
import TopBar from '../src/components/TopBar';
import Navbar from "./components/Navbar";
import HomeScreen from "./screen/HomeScreen";
import CartScreen from "./screen/CartScreen";
import Register from "./screen/Register";
import Login from "./screen/Login";
import OrderScreen from "./screen/OrderScreen";
import AdminScreen from "./screen/AdminScreen";
import About from "./components/About";
import TherapyPaw from "./components/TherapyPaw";
import DoctorScreen from "./screen/DoctorScreen";
import ContactUs from "./components/ContactUs";
function App() {
  return (
    <>
      <BrowserRouter>
      <TopBar/>
      <Navbar/>
      <Switch>
        
        <Route path="/register" component={Register} exact/>
        <Route path="/login" component={Login} exact/>
        <Route path="/contactus" component={ContactUs} exact/>
        <Route path="/orders" component={OrderScreen} exact/>
        <Route path="/cart" component={CartScreen} exact/>
        <Route path="/admin" component={AdminScreen} />
        <Route path="/dogs" component={HomeScreen} exact/>
        <Route path="/doctors" component={DoctorScreen} exact/>
        <Route path="/about" component={About} exact />
        <Route path="/" component={TherapyPaw} exact />
      </Switch>
      </BrowserRouter>
      
    </>
  );
}

export default App;
