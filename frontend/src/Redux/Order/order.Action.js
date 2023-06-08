// // get order items
// export const GET_ORDER_ITEMS_LOADING = "order/items/get/laoding";
// export const GET_ORDER_ITEMS_SUCCESS = "order/items/get/success";
// export const GET_ORDER_ITEMS_ERROR = "order/items/get/error";

import {
  ADD_ORDER_ITEM_TO_ERROR,
  ADD_ORDER_ITEM_TO_LOADING,
  ADD_ORDER_ITEM_TO_SUCCESS,
  GET_ORDER_ITEMS_ERROR,
  GET_ORDER_ITEMS_LOADING,
  GET_ORDER_ITEMS_SUCCESS,
  REMOVE_ORDER_ITEMS_ERROR,
  REMOVE_ORDER_ITEMS_LOADING,
  REMOVE_ORDER_ITEMS_SUCCESS,
} from "./order.ActionType";


export const getAllOrdes = (data) => async (disptach) => {
  disptach({ type: GET_ORDER_ITEMS_LOADING });
  try {
    disptach({ type: GET_ORDER_ITEMS_SUCCESS, payload: data });
  } catch (error) {
    disptach({ type: GET_ORDER_ITEMS_ERROR });
  }
};

export const addOrderItems = (orderInfo) => async (dispatch) => {
  dispatch({ type: ADD_ORDER_ITEM_TO_LOADING });
  try {
    dispatch({ type: ADD_ORDER_ITEM_TO_SUCCESS, payload: orderInfo });
  } catch (error) {
    dispatch({ type: ADD_ORDER_ITEM_TO_ERROR });
  }
};

export const removeMoveOrderItem = (cartId) => async (dispatch) => {
  dispatch({ type: REMOVE_ORDER_ITEMS_LOADING });
  try {
    dispatch({ type: REMOVE_ORDER_ITEMS_SUCCESS, payload: { id: cartId } });
  } catch (error) {
    dispatch({ type: REMOVE_ORDER_ITEMS_ERROR });
  }
};
