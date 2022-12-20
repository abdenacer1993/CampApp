import {
    ADD_CAMP_FAIL,
    DELETE_CAMP_FAIL,
    GET_ALL_CAMPS_FAIL,
    GET_ALL_CAMPS_SUCCESS,
    GET_ONE_CAMP_FAIL,
    GET_ONE_CAMP_SUCCESS,
    LOADING_CAMPS,
    UPDATE_CAMP_FAIL,
  } from "../constants/campConstants";
  
  const initialState = {
    loading: false,
    camps: [],
    errors: null,
    oneCamp: {},
  };
  
  export const campReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case LOADING_CAMPS:
        return { ...state, loading: true };
      case GET_ALL_CAMPS_SUCCESS:
        return { ...state, camps: payload, loading: false };
      case GET_ALL_CAMPS_FAIL:
        return { ...state, loading: false, errors: payload };
      case ADD_CAMP_FAIL:
        return { ...state, errors: payload };
      case DELETE_CAMP_FAIL:
        return { ...state, errors: payload };
      case GET_ONE_CAMP_SUCCESS:
        return { ...state, oneCamp: payload };
      case GET_ONE_CAMP_FAIL:
        return { ...state, errors: payload };
      case UPDATE_CAMP_FAIL:
        return { ...state, errors: payload };
      default:
        return state;
    }
  };
  