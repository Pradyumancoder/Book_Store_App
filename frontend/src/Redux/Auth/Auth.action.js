// Auth Actions here
import axios from "axios";
import {
  ERROR_TRUE,
  LOADING_TRUE,
  LOG_IN_SUCCESS,
  LOG_OUT_SUCCESS,
  SIGN_UP_SUCCESS,
} from "./Auth.actionType";

const baseURL = "https://witty-puffer.cyclic.app/user";

//sign in
export const signUp = (creds) => async (dispatch) => {
  dispatch({ type: LOADING_TRUE });
  try {
    let res = await axios.post(`${baseURL}/register`, creds);
    if (res.data) {
      dispatch({ type: SIGN_UP_SUCCESS });
    }
  } catch (error) {
    dispatch({ type: ERROR_TRUE, payload: error.message });
  }
};

//login function
export const login = (creds) => async (dispatch) => {
  dispatch({ type: LOADING_TRUE });
  try {
    let res = await axios.post(`${baseURL}/login`, creds);
    // const { user, token } = res.data;
    dispatch({ type: LOG_IN_SUCCESS, payload: res.data });
  } catch (error) {
    const errorMessage = error.response.data.message;
    // console.log(errorMessage);
    dispatch({ type: ERROR_TRUE, payload: errorMessage });
  }
};

//logout function
export const logout = () => async (dispatch) => {
  dispatch({ type: LOADING_TRUE });
  try {
    // await axios.get(`${baseURL}/logout`);
    dispatch({ type: LOG_OUT_SUCCESS });
  } catch (error) {
    // console.log(error.message);
    dispatch({ type: ERROR_TRUE, payload: error.message });
  }
};
