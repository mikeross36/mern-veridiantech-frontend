import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signupUserAction } from "../actions/authActions";
import { toast } from "react-toastify";

const signupId = "signupId";

export default function SignupUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const dispatch = useDispatch();

  function handleSignupUser(e) {
    e.preventDefault();
    if (!name || !email || !password || !passwordConfirm) {
      toast.error("All the fields are mandatory!");
      return;
    }
    if (password !== passwordConfirm) {
      toast.error("Passwords do not match!", { toastId: signupId });
      return;
    }
    dispatch(signupUserAction(name, email, password));
    setName("");
    setEmail("");
    setPassword("");
    setPasswordConfirm("");
  }

  return (
    <section className="signup section container">
      <h2 className="section__title">signup to create account</h2>
      <div className="signup__content">
        <form className="signup__form" onSubmit={handleSignupUser}>
          <div className="form__field">
            <input
              autoComplete="false"
              type="text"
              className="form__input"
              placeholder="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <span className="span">
              <svg
                className=""
                xmlSpace="preserve"
                viewBox="0 0 512 512"
                y="0"
                x="0"
                height="20"
                width="50"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    className=""
                    data-original="#000000"
                    fill="#6b6b6b"
                    d="M256 0c-74.439 0-135 60.561-135 135s60.561 135 135 135 135-60.561 135-135S330.439 0 256 0zM423.966 358.195C387.006 320.667 338.009 300 286 300h-60c-52.008 0-101.006 20.667-137.966 58.195C51.255 395.539 31 444.833 31 497c0 8.284 6.716 15 15 15h420c8.284 0 15-6.716 15-15 0-52.167-20.255-101.461-57.034-138.805z"
                  ></path>
                </g>
              </svg>
            </span>
          </div>
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
          <div className="form__field">
            <input
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
                viewBox="0 0 512 512"
                y="0"
                x="0"
                height="20"
                width="50"
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
          <div className="form__field">
            <input
              type="password"
              className="form__input"
              placeholder="confirm password"
              name="passwordConfirm"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
            <span className="span">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                y="0"
                x="0"
                height="20"
                width="50"
              >
                <path
                  fill="#6b6b6b"
                  d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                />
              </svg>
            </span>
          </div>
          <button type="submit" className="signup__button button button--small">
            Signup
          </button>
          <div className="login">
            <span>Already have an account?</span>
            <Link to="/login-user">Login</Link>
          </div>
        </form>
      </div>
    </section>
  );
}
