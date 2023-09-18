import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  updatePasswordAction,
  logoutUserAction,
} from "../../actions/authActions";
import { toast } from "react-toastify";

const updatePassId = "updatePassId";

export default function UpdatePassword() {
  const [loginPassword, setLoginPassword] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleUpdatePassword(e) {
    e.preventDefault();
    if (!loginPassword || !password || !passwordConfirm) {
      toast.error("All the fields are mandatory!", { toastId: updatePassId });
      return;
    } else if (password !== passwordConfirm) {
      toast.error("Passwords do not match!", { toastId: updatePassId });
      return;
    } else {
      dispatch(updatePasswordAction(loginPassword, password));
      const timer = setTimeout(function () {
        dispatch(logoutUserAction());
        navigate("/login-user");
      }, 3500);
      return function () {
        clearTimeout(timer);
      };
    }
  }

  return (
    <div className="update__form-container">
      <form className="form__user-password" onSubmit={handleUpdatePassword}>
        <h3 className="form__title">update password</h3>
        <div className="form__control">
          <label htmlFor="login-password" className="form__label">
            current password
          </label>
          <input
            type="password"
            id="login-password"
            className="form__input"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
        </div>
        <div className="form__control">
          <label htmlFor="password" className="form__label">
            new password
          </label>
          <input
            type="password"
            id="password"
            className="form__input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form__control">
          <label htmlFor="password-confirm" className="form__label">
            confirm password
          </label>
          <input
            type="password"
            id="password-confirm"
            className="form__input"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </div>
        <div className="form__control">
          <button type="submit" className="button button--small">
            save
          </button>
        </div>
      </form>
    </div>
  );
}
