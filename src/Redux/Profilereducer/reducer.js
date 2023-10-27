const initialState = {
    profile: {},
    loading: false,
    error: null,
  };
  
  const profileReducer = (state = initialState, action)=> {
    switch (action.type) {
      case 'GET_PROFILE_LOADING':
        return {
          ...state,
          profile:{},
          loading: true,
          error: null,
        };
      case 'GET_PROFILE_SUCCESS':
        return {
          ...state,
          profile: action.payload,
          loading: false,
          error: null,
        };
      case 'GET_PROFILE_ERROR':
        return {
          ...state,
          profile: {},
          loading: false,
          error: action.payload,
        };
      case 'EDIT_PROFILE_LOADING':
        return {
          ...state,
          profile:{},
          loading: true,
          error: null,
        };
      case 'EDIT_PROFILE_SUCCESS':
        return {
          ...state,
          profile: action.payload,
          loading: false,
          error: null,
        };
      case 'EDIT_PROFILE_ERROR':
        return {
          ...state,
          profile:{},
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  

  export  {profileReducer}