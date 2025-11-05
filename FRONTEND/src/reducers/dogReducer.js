export const getAllDogReducer =(state = {dogs:[]},action) =>{
    switch (action.type) {
        case "GET_DOGS_REQUEST":
          return {
            ...state,
            loading: true,
          };
        case "GET_DOGS_SUCCESS":
          return {
            dogs: action.payload,
            loading: false,
          };
        case "GET_DOGS_FAIL":
          return {
            error: action.payload,
            loading: false,
          };
        default:
          return state;
      }
} 

export const addDogReducer =(state = {},action) =>{
  switch (action.type) {
      case "ADD_DOGS_REQUEST":
        return {
          ...state,
          loading: true,
        };
      case "ADD_DOGS_SUCCESS":
        return {
          success:true,
          loading: false,
        };
      case "ADD_DOGS_FAIL":
        return {
          error: action.payload,
          loading: false,
        };
      default:
        return state;
    }
} 