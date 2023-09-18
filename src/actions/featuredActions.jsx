import { api } from "../utils/axiosConfig";
import { toast } from "react-toastify";

const featuredId = "featuredId";

export function getAllFeaturedAction() {
  return async function (dispatch) {
    dispatch({ type: "GET_ALL_FEATURED_REQUEST" });
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await api.get("/api/v1/featureds", config);
      dispatch({ type: "GET_ALL_FEATURED_SUCCESS", payload: data });
    } catch (err) {
      dispatch({
        type: "GET_ALL_FEATURED_FAILED",
        payload: err.response?.data.message,
      });
      toast.error(err.response?.data.message, { toastId: featuredId });
    }
  };
}
