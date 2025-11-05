import React from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch , useSelector} from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { placeOrder } from '../actions/orderAction'
import  Loader  from "./Loader";
import  Error  from "./Error";
import  Success  from "./Success";

const Checkout = ({subTotal}) => {

  const orderState = useSelector(state => state.placeOrderReducer)
  const {loading , error , success} = orderState
    const dispatch = useDispatch()

    const tokenHandler =(token)=>{
        dispatch(placeOrder(token,subTotal));
        console.log(token)

    }
  return (
    <>
    {loading && (<Loader/>) }
    {error && (<Error error="something went wrong"/>) }
    {success && (<Success success="order placed success"/>) }
    <StripeCheckout
    amount={subTotal * 100}
    shippingAddress
    token={tokenHandler}
    stripeKey='pk_test_51KapS2SEeSa8IamZL7vJJYCSmaDLCYCSnwr6JTEl7Zzp4ivg9JSOTNgpfjXz7uRdsrKuG5RQkaKfrfKJC66Wzt9k00mZ3Fzqbh'
    currency='INR'

    
    >
    <Button className='btn btn-info'>Pay now</Button>


    </StripeCheckout>
    
    
    </>
  )
}

export default Checkout