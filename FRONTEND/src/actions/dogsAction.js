import axios from 'axios'

export const getAllDogs = () => async(dispatch) =>{
  dispatch ({type:'GET_DOGS_REQUEST'})
  try {
      const response = await axios.get('api/dogs/getAllDogs');
      console.log(response.data);
      dispatch ({type:'GET_DOGS_SUCCESS',payload: response.data});
  } catch (error) {
    dispatch ({type:'GET_DOGS_FAIL' ,payload:error})
 
  }
};

export const addDog = (dog) => async(dispatch) =>{
  dispatch ({type:'ADD_DOGS_REQUEST'})
  try {
      const response = await axios.post('api/dogs/adddog',{dog});
      console.log(response.data);
      dispatch ({type:'ADD_DOGS_SUCCESS',payload: response.data});
  } catch (error) {
    dispatch ({type:'ADD_DOGS_FAIL' ,payload:error})
 
  }
};

// export const deleteDog = (dogId) => async (dispatch) => {
//   try {
//     await axios.post("/api/pizzas/deletedog", { dogId });
//     swal("Dog Deleted Succss!", "success");
//     window.location.href = "/admin/doglist";
//     // console.log(res);
//   } catch (error) {
//     swal("Errro While Deleteing Pizza");
//   }
// };