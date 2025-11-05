import axios from 'axios'

export const getAllDoctors = () => async(dispatch) =>{
  dispatch ({type:'GET_DOCTORS_REQUEST'})
  try {
      const response = await axios.get('api/doctors/getAllDoctors');
      console.log(response.data);
      dispatch ({type:'GET_DOCTORS_SUCCESS',payload: response.data});
  } catch (error) {
    dispatch ({type:'GET_DOCTORS_FAIL' ,payload:error})
 
  }
};

export const addDoctor = (doctor) => async(dispatch) =>{
  dispatch ({type:'ADD_DOCTORS_REQUEST'})
  try {
      const response = await axios.post('api/dogs/adddoctor',{doctor});
      console.log(response.data);
      dispatch ({type:'ADD_DOCTORS_SUCCESS',payload: response.data});
  } catch (error) {
    dispatch ({type:'ADD_DOCTORS_FAIL' ,payload:error})
 
  }
};