import {
    ADD_CAMP_FAIL,
    ADD_CAMP_SUCCESS,
    DELETE_CAMP_FAIL,
    DELETE_CAMP_SUCCESS,
    GET_ALL_CAMPS_FAIL,
    GET_ALL_CAMPS_SUCCESS,
    GET_ONE_CAMP_FAIL,
    GET_ONE_CAMP_SUCCESS,
    LOADING_CAMPS,
    UPDATE_CAMP_FAIL,
    UPDATE_CAMP_SUCCESS,
  } from "../constants/campConstants";
  import axios from "axios";
  
  export const getALLCamps = () => async (dispatch) => {
    dispatch({ type: LOADING_CAMPS });
    try {
      const response = await axios.get("http://localhost:5000/camping/Camping");
      dispatch({
        type: GET_ALL_CAMPS_SUCCESS,
        payload: response.data.allCamping,
      });
    } catch (error) {
      dispatch({ type: GET_ALL_CAMPS_FAIL, payload: error });
    }
  };
  
  export const addCamping = (newCamping,navigate) => async (dispatch) => {
      try {
      const response = await axios.post(
        "http://localhost:5000/camping/addCamping",
        newCamping,
        {headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}}
      );
      dispatch({ type: ADD_CAMP_SUCCESS });
      dispatch(getALLCamps())
      navigate("/Camping")
    } catch (error) {
      console.log(error);
      alert(error.response.data.msg)
      dispatch({ type: ADD_CAMP_FAIL,payload:error });
    }
  };
  
  export const deleteCamp = (id) => async (dispatch) => {
      try {
        const response = await axios.delete(`http://localhost:5000/Camping/${id}`);
        dispatch({
          type: DELETE_CAMP_SUCCESS,
        });  
        dispatch(getALLCamps())
      } catch (error) {
        dispatch({ type: DELETE_CAMP_FAIL, payload: error });
      }
    };
  
    
  export const getOneCamp = (id) => async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:5000/Camping/${id}`);
      dispatch({
        type: GET_ONE_CAMP_SUCCESS,
        payload: response.data
      }); 
    } catch (error) {
      dispatch({ type: GET_ONE_CAMP_FAIL, payload: error });
    }
  };
  export const updateOneCamp = (id, newOne, navigate) => async (dispatch) => {
    try {
      const response = await axios.put(`http://localhost:5000/Camping/${id}`, newOne);
      dispatch({
        type: UPDATE_CAMP_SUCCESS,
      });      
      dispatch(getALLCamps())
      navigate("/Camping")
    } catch (error) {
      dispatch({ type: UPDATE_CAMP_FAIL, payload: error });
    }
  };