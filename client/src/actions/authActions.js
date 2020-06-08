import axios from 'axios';
import {  returnErrors} from "./errorActions";

import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    REGISTER_FAIL,
    REGISTER_SUCCESS
} from "../actions/types";

// Check token and load user - Need to send token along
export const loadUser = () => (dispatch,getState) =>{
    // User loading
    dispatch({type: USER_LOADING});

    // Fetch user
    axios.get('/api/auth/user', tokenConfig(getState))
    .then(res => dispatch({
        type: USER_LOADED,
        payload: res.data
    }))
    .catch(err =>{
        // Pass in msg, sttaus, id
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
            type: AUTH_ERROR
        })
    })
}

// Setup config headers and token
export const tokenConfig = getState =>{
     // Get token from localStorage by calling authReducer and getting token from state
     const token = getState().auth.token;

     // Headers
     const config = {
         headers: {
             "Content-type": "application/json"
         }
     }
     if (token){
         config.headers['x-auth-token'] = token;
     }

     return config;
}