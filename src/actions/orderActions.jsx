import { api } from "../utils/axiosConfig";
import { toast } from "react-toastify";

const orderId = "orderId";

export function createOrderAction(token, preorderTotal) {
  return async function (dispatch, getState) {
    const currentUser = getState().loginUser.currentUser;
    const preorderItems = getState().preorder.preorderItems;
    dispatch({ type: "CREATE_ORDER_REQUEST" });
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await api.post(
        "/api/v1/orders/create-order",
        { token, preorderTotal, currentUser, preorderItems },
        config
      );
      dispatch({ type: "CREATE_ORDER_SUCCESS" });
      if (data.status === "success") {
        toast.success("Order created successfully!", { toastId: orderId });
      }
    } catch (err) {
      dispatch({
        type: "CREATE_ORDER_FAILED",
        payload: err.response?.data.message,
      });
      toast.error(err.response?.data.message, { toastId: orderId });
    }
  };
}

export function getUsertOrdersAction() {
  return async function (dispatch, getState) {
    const currentUser = getState().loginUser.currentUser;
    dispatch({ type: "GET_USER_OREDERS_REQUEST" });
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await api.post(
        "/api/v1/orders/get-user-orders",
        { userId: currentUser.user._id },
        config
      );
      dispatch({ type: "GET_USER_ORDERS_SUCCESS", payload: data });
    } catch (err) {
      dispatch({
        type: "GET_USER_ORDERS_FAILED",
        payload: err.response?.data.message,
      });
      toast.error(err.response?.data.message, { toastId: orderId });
    }
  };
}
