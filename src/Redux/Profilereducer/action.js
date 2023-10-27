import axios from 'axios';


// for get profile data
export const getProfile = (userId) => {
  return async (dispatch) => {
    dispatch({ type: 'GET_PROFILE_LOADING' });

    try {
      const response = await axios.get(`http://43.205.182.249:4001/get/user?id=${userId}`);
      dispatch({ type: 'GET_PROFILE_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'GET_PROFILE_ERROR', payload: error.message });
    }
  };
};


// for editing profile
export const editProfile = (userId, updatedProfile) => {
  return async (dispatch) => {
    dispatch({ type: 'EDIT_PROFILE_LOADING' });

    try {
      const response = await axios.post('http://43.205.182.249:4001/user/editUserProfile', updatedProfile);
      dispatch({ type: 'EDIT_PROFILE_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'EDIT_PROFILE_ERROR', payload: error.message });
    }
  };
};
