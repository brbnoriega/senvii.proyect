import axios from "axios";

export const CREATE_USER = "CREATE_USER";

// export function createUser(payload) {

//     return async function (){
//         var response = await axios.post('http://localhost:3001/api/auth/register', payload)
//         console.log(payload)
//        console.log(response)
//        return response
//     };
//   };

  export function createUser(payload, errorCallback) {
    return async (dispatch) => {
      try {
        const response = await axios.post(`http://localhost:3001/api/auth/register`, payload); //chequeada con yei-barbi
        if (response?.data) {
          return dispatch({
            type: CREATE_USER,
            payload: response.data,
          });
          //dispatch(getProducts());
        }
      } catch (error) {
        errorCallback && errorCallback(error);
      }
    };
  }
