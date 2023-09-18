import { api } from "../utils/axiosConfig";
import { toast } from "react-toastify";

const reviewId = "reviewId";

export function addReviewAction(id, content) {
  return async function (dispatch) {
    dispatch({ type: "ADD_REVIEW_REQUEST" });
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await api.post(
        `/api/v1/drones/${id}/reviews`,
        { content },
        config
      );
      dispatch({ type: "ADD_REVIEW_SUCCESS", payload: data });
      if (data.status === "success") {
        toast.success("Review added successfully!", { toastId: reviewId });
      }
    } catch (err) {
      dispatch({
        type: "ADD_REVIEW_FAILED",
        payload: err.response?.data.message,
      });
      toast.error(err.response?.data.message, { toastId: reviewId });
    }
  };
}
