const initialState = {
    user: {},
    loading: false,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    
    switch (action.type) {
      case 'LOGIN_LOADING':
        return {
          ...state,
          user:{},
          loading: true,
          error: null,
        };
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          user: action.payload,
          loading: false,
          error: null,
        };
      case 'LOGIN_ERROR':
        return {
          ...state,
          user: {},
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  

  export  {authReducer}