// Cart Actions here
import axios from "axios";
import {
  ADD_ITEM_TO_CART_ERROR,
  ADD_ITEM_TO_CART_LOADING,
  ADD_ITEM_TO_CART_SUCCESS,
  GET_CART_ITEMS_ERROR,
  GET_CART_ITEMS_LOADING,
  GET_CART_ITEMS_SUCCESS,
  REMOVE_CART_ITEMS_ERROR,
  REMOVE_CART_ITEMS_LOADING,
  REMOVE_CART_ITEMS_SUCCESS,
  RESET_CART_ITEMS,
  UPDATE_CART_ITEMS_ERROR,
  UPDATE_CART_ITEMS_LOADING,
  UPDATE_CART_ITEMS_SUCCESS,
} from "./cart.ActionType";

export const getCartItems = () => async (disptach) => {
  disptach({ type: GET_CART_ITEMS_LOADING });
  try {
    let res = axios.get("http://localhost:8080/cartItems");
    disptach({ type: GET_CART_ITEMS_SUCCESS, payload: res.data });
  } catch (error) {
    disptach({ type: GET_CART_ITEMS_ERROR });
  }
};

export const addItemToCart = (cartInfo) => async (dispatch) => {
  dispatch({ type: ADD_ITEM_TO_CART_LOADING });
  try {
    dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: cartInfo });
  } catch (error) {
    dispatch({ type: ADD_ITEM_TO_CART_ERROR });
  }
};

export const removeItemFromCart = (cartId) => async (dispatch) => {
  dispatch({ type: REMOVE_CART_ITEMS_LOADING });
  try {
    dispatch({ type: REMOVE_CART_ITEMS_SUCCESS, payload: { id: cartId } });
  } catch (error) {
    dispatch({ type: REMOVE_CART_ITEMS_ERROR });
  }
};

export const updateCartItem = (cartId, qty) => async (dispatch) => {
  dispatch({ type: UPDATE_CART_ITEMS_LOADING });
  try {
    dispatch({
      type: UPDATE_CART_ITEMS_SUCCESS,
      payload: { id: cartId, qty: qty },
    });
  } catch (error) {
    dispatch({ type: UPDATE_CART_ITEMS_ERROR });
  }
};

export const cartRest = () => (dispatch) => {
  dispatch({ type: UPDATE_CART_ITEMS_LOADING });
  try {
    dispatch({
      type: RESET_CART_ITEMS,
    });
  } catch (err) {
    dispatch({ type: UPDATE_CART_ITEMS_ERROR });
  }
};
