import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes";

const initialeState = {
  loading: false, 
  data: [],
  error: ''
}

export const userReducer = (state = initialeState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_USERS_SUCCESS:
      return {
        loading: false, 
        error: '',
        data: action.payload
      }
    case FETCH_USERS_FAILURE:
      return {
        loading: false, 
        error: action.payload,
        data: []
      }
  
    default:
      return state
  }
}