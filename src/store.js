import * as droneReducers from "./reducers/droneReducers";
import * as authReducers from "./reducers/authReducers";
import * as orderReducers from "./reducers/orderReducers";
import * as reviewReducers from "./reducers/reviewReducers";
import { getAllFeaturedReducer } from "./reducers/featuredReducer";
import { preorderReducer } from "./reducers/preorderReducers";
import { updateUserAccountReducer } from "./reducers/userReducers";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { combineReducers } from "redux";

const appReducer = combineReducers({
  getAllDrones: droneReducers.getAllDronesReducer,
  getDrone: droneReducers.getDroneReducer,
  signupUser: authReducers.signupUserReducer,
  loginUser: authReducers.loginUserReducer,
  logoutUser: authReducers.logoutUserReducer,
  resetPassword: authReducers.resetPasswordReducer,
  getAllFeatured: getAllFeaturedReducer,
  preorder: preorderReducer,
  createOrder: orderReducers.createOrderReducer,
  getUserOrders: orderReducers.getUserOrdersReducer,
  addReview: reviewReducers.addReviewReducer,
  updateUserAccount: updateUserAccountReducer,
  updatePassword: authReducers.updatePasswordReducer,
});

function rootReducer(state, action) {
  if (action.type === "LOGOUT_USER_REQUEST") {
    storage.removeItem("persist:root");
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
}

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;
