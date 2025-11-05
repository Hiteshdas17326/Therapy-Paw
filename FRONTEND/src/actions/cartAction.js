export const addToCart = (DogData, quantity) => (dispatch, getState) => {
    var cartItem = {
      name:DogData.name,
      _id:DogData._id,
      image:DogData.urlToImage,
      breed: DogData.breed,
      description: DogData.description,
      quantity: Number(quantity),
      price: DogData.price,
      prices: DogData.price[0] * quantity,
    };
    if (cartItem.quantity > 10) {
      alert("you Can only add 10 DogDatas");
    } else {
      if (cartItem.quantity < 1) {
        dispatch({ type: "DELETE_FROM_CART", payload: DogData });
      } else {
        dispatch({ type: "ADD_TO_CART", payload: cartItem });
        localStorage.setItem(
          "cartItems",
          JSON.stringify(getState().cartReducer.cartItems)
        );
      }
    }
  };
  
  export const deleteFromCart = (DogData) => (dispatch, getState) => {
    dispatch({ type: "DELETE_FROM_CART", payload: DogData });
    const cartItems = getState().cartReducer.cartitems;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
  
// export const addToCart = (DogData, quantity) => (dispatch, getState) => {

//     var cartItems = {
//         name: DogData.name,
//         _id: DogData._id,
//         image: DogData.urlToImage,
//         breed: DogData.breed,
//         price: DogData.price,
//         description: DogData.description,
//         quantity: Number(quantity),

//     };
//     if (cartItems.quantity > 10) {
//         alert('you can only add 10 hours')
//     } else {
//         if (cartItems.quantity < 1) {
//             dispatch({ type: 'DELETE_FROM_CART', payload: DogData })
//         } else {
//             dispatch({ type: "ADD_TO_CART", payload: cartItems });
//             localStorage.setItem('cartItems', JSON.stringify(getState().cartReducer.cartItems))
//         }

//     }

// }

// export const deleteFromCart = (DogData) => (dispatch, getState) => {
//     dispatch({ type: 'DELETE_FROM_CART', payload: DogData })
//     const cartItems = getState().cartReducer.cartItems
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
// };