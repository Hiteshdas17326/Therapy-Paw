import {createStore, combineReducers , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools } from  'redux-devtools-extension'
import {getAllDogReducer , addDogReducer} from './reducers/dogReducer'
import { cartReducer } from './reducers/cartReducer'
import {registerUserReducer , loginUserReducer , getAllUsersReducer  } from './reducers/userReducer'
import {placeOrderReducer , getUserOrdersReducer , allUserOrdersReducer} from './reducers/orderReducer'
import { getAllDoctorReducer } from './reducers/doctorReducer'



const rootReducer = combineReducers({
    getAllDogReducer: getAllDogReducer,
    cartReducer : cartReducer,
    registerUserReducer : registerUserReducer,
    loginUserReducer : loginUserReducer,
    placeOrderReducer : placeOrderReducer,
    getUserOrdersReducer : getUserOrdersReducer,
    addDogReducer : addDogReducer,
    allUserOrdersReducer: allUserOrdersReducer,
    getAllUsersReducer : getAllUsersReducer,
    getAllDoctorReducer : getAllDoctorReducer
});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;

 const initialState = {
    cartReducer: {
      cartItems: cartItems,
    },
    loginUserReducer: {
      currentUser: currentUser,
    },
  };
  const middleware = [thunk];

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  export default store;

