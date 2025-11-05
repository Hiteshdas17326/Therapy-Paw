export const getAllDoctorReducer =(state = {doctors:[]},action) =>{
    switch (action.type) {
        case "GET_DOCTORS_REQUEST":
          return {
            ...state, 
            load: true,
          };
        case "GET_DOCTORS_SUCCESS":
          return {
            doctors: action.payload,
            load: false,
          };
        case "GET_DOCTORS_FAIL":
          return {
            error: action.payload,
            load: false,
          };
        default:
          return state;
      }
} 

export const addDoctorReducer =(state = {},action) =>{
  switch (action.type) {
      case "ADD_DOCTORS_REQUEST":
        return {
          ...state,
          loading: true,
        };
      case "ADD_DOCTORS_SUCCESS":
        return {
          success:true,
          loading: false,
        };
      case "ADD_DOCTORS_FAIL":
        return {
          error: action.payload,
          loading: false,
        };
      default:
        return state;
    }
} 