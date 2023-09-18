import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginUserAction } from "../actions/authActions";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const loginId = "loginId";

export default function LoginUser({ setShowModal1 }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  function handleLoginUser(e) {
    e.preventDefault();
    if (!email || !password) {
      toast.error("All the fields are mandatory!", { toastId: loginId });
      return;
    }
    dispatch(loginUserAction(email, password));
    setEmail("");
    setPassword("");
  }

  return (
    <section className="login section container">
      <h2 className="section__title">login</h2>
      <div className="login__content">
        <form className="login__form" onSubmit={handleLoginUser}>
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
                // height="1em"
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
          <div className="form__field">
            <input
              required=""
              type="password"
              className="form__input"
              placeholder="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="span">
              <svg
                className=""
                xmlSpace="preserve"
                // style="enable-background:new 0 0 512 512"
                viewBox="0 0 512 512"
                y="0"
                x="0"
                height="20"
                width="50"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    className=""
                    data-original="#000000"
                    fill="#6b6b6b"
                    d="M336 192h-16v-64C320 57.406 262.594 0 192 0S64 57.406 64 128v64H48c-26.453 0-48 21.523-48 48v224c0 26.477 21.547 48 48 48h288c26.453 0 48-21.523 48-48V240c0-26.477-21.547-48-48-48zm-229.332-64c0-47.063 38.27-85.332 85.332-85.332s85.332 38.27 85.332 85.332v64H106.668zm0 0"
                  ></path>
                </g>
              </svg>
            </span>
          </div>
          <div className="forgot__pass">
            <Link to="#" onClick={() => setShowModal1(true)}>
              <span>Forgot password?</span>
            </Link>
          </div>
          <button type="submit" className="login__button button button--small">
            Login
          </button>
          <div className="sign__up">
            <span>Do not have an account?</span>
            <Link to="/signup-user">Signup</Link>
          </div>
        </form>
      </div>
    </section>
  );
}

LoginUser.propTypes = {
  setShowModal1: PropTypes.func,
};
