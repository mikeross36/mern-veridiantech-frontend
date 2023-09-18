import { api } from "../utils/axiosConfig";
import { toast } from "react-toastify";

const userId = "userId";

export function updateUserAccountAction(formData) {
  return async function (dispatch) {
    dispatch({ type: "UPDATE_ACCOUNT_REQUEST" });
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await api.patch(
        "/api/v1/users/update-user-account",
        {
          name: formData.currentUserName,
          email: formData.currentUserEmail,
          photo: formData.newPhoto,
        },
        config
      );
      dispatch({ type: "UPDATE_ACCOUNT_SUCCESS", payload: data });
      if (data.status === "success") {
        toast.success(
          "Data updated successfully! Please login again with new data",
          { autoClose: 3000, toastId: userId }
        );
      }
    } catch (err) {
      dispatch({
        type: "UPDATE_ACCOUNT_FAILED",
        payload: err.response?.data.message,
      });
      toast.error(err.response?.data.message, { toastId: userId });
    }
  };
}
