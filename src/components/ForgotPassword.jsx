import { useState } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import { api } from "../utils/axiosConfig";

const forgotId = "forgotId";

export default function ForgotPassword({ setShowModal1 }) {
  const [email, setEmail] = useState("");

  async function handleForgotPassword(e) {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter email!", { toastId: forgotId });
      return;
    }
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await api.post(
        "/api/v1/users/forgot-password",
        { email },
        config
      );
      if (data.status === "success") {
        toast.success("Reset token sent by email!", { toastId: forgotId });
      }
      setEmail("");
      setShowModal1(false);
    } catch (err) {
      toast.error(err.response?.data.message, { toastId: forgotId });
    }
  }

  return (
    <div className="forgot__content">
      <form className="forgot__form" onSubmit={handleForgotPassword}>
        <h3 className="forgot__title">enter email</h3>
        <div className="form__field">
          <input
            autoComplete="false"
            type="email"
            className="form__input"
            placeholder="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="span">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              y="0"
              x="0"
              height="20"
              width="50"
            >
              <path
                fill="#6b6b6b"
                d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
              />
            </svg>
          </span>
        </div>
        <button type="submit" className="button button--gray button--small">
          send
        </button>
      </form>
    </div>
  );
}

ForgotPassword.propTypes = {
  setShowModal1: PropTypes.func,
};
