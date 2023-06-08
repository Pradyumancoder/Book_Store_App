import {
  applyMiddleware,
  combineReducers,
  legacy_createStore,
} from "redux";
import thunk from "redux-thunk";
//Redux-persist
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { authReducer } from "./Auth/Auth.reducer";
import { bookReducer } from "./Books/books.reducer";
import { cartReducer } from "./Cart/cart.Reducer";
import { orderReducer } from "./Order/order.Reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  books: bookReducer,
  cart: cartReducer,
  order: orderReducer,
});

const persistConfig = {
  key: "root",
  storage,
};


const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = legacy_createStore(
  persistedReducer,
  applyMiddleware(thunk)
);
export const persistor = persistStore(store);