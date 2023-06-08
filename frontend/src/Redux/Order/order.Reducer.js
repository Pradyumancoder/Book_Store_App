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

// Note: Do not update/change the initial state
const orderInitalState = {
  getOrderItems: {
    loading: false,
    error: false,
  },
  addOrderItem: {
    loading: false,
    error: false,
  },
  removeOrderItem: {
    loading: false,
    error: false,
  },
  allOrder: [],
};
export const orderReducer = (state = orderInitalState, { type, payload }) => {
  switch (type) {
    case GET_ORDER_ITEMS_LOADING: {
      return { ...state, getOrderItems: { loading: true, error: false } };
    }
    case GET_ORDER_ITEMS_SUCCESS: {
      return { ...state, allOrder: payload, getOrderItems: { loading: false } };
    }
    case GET_ORDER_ITEMS_ERROR: {
      return { ...state, getOrderItems: { loading: false, error: true } };
    }
    case ADD_ORDER_ITEM_TO_LOADING: {
      return { ...state, addOrderItem: { loading: true, error: false } };
    }
    case ADD_ORDER_ITEM_TO_SUCCESS: {
      return {
        ...state,
        allOrder: [...state.allOrder, ...payload],
        addOrderItem: { loading: false },
      };
    }
    case ADD_ORDER_ITEM_TO_ERROR: {
      return { ...state, addOrderItem: { loading: false, error: true } };
    }

    case REMOVE_ORDER_ITEMS_LOADING: {
      return { ...state, removeOrderItem: { loading: true, error: false } };
    }
    case REMOVE_ORDER_ITEMS_SUCCESS: {
      const newItems = state.allOrder.filter((ele) => ele._id !== payload.id);
      return {
        ...state,
        allOrder: newItems,
        removeOrderItem: { loading: false },
      };
    }
    case REMOVE_ORDER_ITEMS_ERROR: {
      return { ...state, removeOrderItem: { loading: false, error: true } };
    }
    default: {
      return state;
    }
  }
};
