import { api } from "../utils/axiosConfig";
import { toast } from "react-toastify";

const droneId = "droneId";

export function getAllDronesAction() {
  return async function (dispatch) {
    dispatch({ type: "GET_ALL_DRONES_REQUEST" });
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await api.get("/api/v1/drones", config);
      dispatch({ type: "GET_ALL_DRONES_SUCCESS", payload: data });
    } catch (err) {
      dispatch({
        type: "GET_ALL_DRONES_FAILED",
        payload: err.response?.data.message,
      });
      toast.error(err.response?.data.message, { toastId: droneId });
    }
  };
}

export function getDroneAction(id) {
  return async function (dispatch) {
    dispatch({ type: "GET_DRONE_REQUEST" });
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await api.get(`/api/v1/drones/${id}`, config);
      dispatch({ type: "GET_DRONE_SUCCESS", payload: data });
    } catch (err) {
      dispatch({
        type: "GET_DRONE_FAILED",
        payload: err.response?.data.message,
      });
      toast.error(err.response?.data.message, { toastId: droneId });
    }
  };
}
