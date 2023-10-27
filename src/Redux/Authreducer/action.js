import axios from 'axios';

export const login = (user) => {
  return async (dispatch) => {
    dispatch({ type: 'LOGIN_LOADING' });

    try {
       
      const response = await axios.post('http://43.205.182.249:4001/login', user);
      dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'LOGIN_ERROR', payload: error.message });
    }
  };
};
