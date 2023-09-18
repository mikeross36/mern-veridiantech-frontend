import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { resetPasswordAction } from "../actions/authActions";

const resetId = "resetId";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const token = useParams();
  const dispatch = useDispatch();

  function handleResetPassword(e) {
    e.preventDefault();
    if (!password || !passwordConfirm) {
      toast.error("All the fields are mandatory!", { toastId: resetId });
      return;
    } else if (password !== passwordConfirm) {
      toast.error("Passwords do not match!", { toastId: resetId });
      return;
    } else {
      dispatch(resetPasswordAction(token, password));
      setPassword("");
      setPasswordConfirm("");
    }
  }

  return (
    <section className="reset section container">
      <h2 className="section__title">reset password</h2>
      <div className="reset__content">
        <form className="reset__form" onSubmit={handleResetPassword}>
          <div className="form__field">
            <input
              type="password"
              className="form__input"
              placeholder="new password"
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
                // height="1em"
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
          <button type="submit" className="button button--small">
            reset
          </button>
        </form>
      </div>
    </section>
  );
}
