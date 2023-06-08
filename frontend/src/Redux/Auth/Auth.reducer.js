import {
  ERROR_TRUE,
  LOADING_TRUE,
  LOG_IN_SUCCESS,
  LOG_OUT_SUCCESS,
  SIGN_UP_SUCCESS,
} from "./Auth.actionType";

// Note: Do not update/change the initial state

let token = localStorage.getItem("token");

export const authInitalState = {
  loading: false,
  authData: {
    token: token ? token : null,
    isAuthenticated: false,
    userDetail: null,
  },
  error: {
    message: "",
    isError: false,
  },
};

export const authReducer = (state = authInitalState, { type, payload }) => {
  switch (type) {
    case LOADING_TRUE: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case ERROR_TRUE: {
      return {
        ...state,
        loading: false,
        error: {
          isError: true,
          message: payload,
        },
      };
    }
    case SIGN_UP_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case LOG_IN_SUCCESS: {
      const { user, token } = payload;
      localStorage.setItem("token", token);
      return {
        ...state,
        loading: false,
        authData: {
          token: token,
          isAuthenticated: true,
          userDetail: user,
        },
      };
    }
    case LOG_OUT_SUCCESS: {
      localStorage.removeItem("token");
      return {
        ...state,
        loading: false,
        authData: {
          token: null,
          isAuthenticated: false,
          userDetail: null,
        },
      };
    }

    default: {
      return state;
    }
  }
};
