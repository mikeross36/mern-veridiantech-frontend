import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserAccountAction } from "../../actions/userActions";
import { logoutUserAction } from "../../actions/authActions";
import { useNavigate } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL;

export default function UpdateAccount() {
  const authState = useSelector((state) => state.loginUser);
  const { currentUser } = authState;

  const [currentUserName, setCurrentUserName] = useState(
    currentUser?.user ? currentUser.user.name : ""
  );
  const [currentUserEmail, setCurrentUserEmail] = useState(
    currentUser?.user ? currentUser.user.email : ""
  );
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(
    `${apiUrl}/images/users/default.jpg`
  );

  function checkPhoto(e) {
    const file = e.target.files[0];
    setPhoto(file);
    if (e.target.files.length !== 0) {
      setPhotoPreview(URL.createObjectURL(file));
    }
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleUpdateUserAccount(e) {
    e.preventDefault();
    const photoData = new FormData();
    photoData.append("photo", photo);
    if (
      currentUserName === currentUser.user.name &&
      currentUserEmail === currentUser.user.email &&
      (photoData === photoPreview || photoData === currentUser.user.photo)
    ) {
      return;
    }
    const formData = { currentUserName, currentUserEmail, newPhoto: photoData };
    dispatch(updateUserAccountAction(formData));
    const timer = setTimeout(function () {
      dispatch(logoutUserAction());
      navigate("/login-user");
    }, 3500);
    return function () {
      clearTimeout(timer);
    };
  }

  return (
    <div className="update__form-container">
      <form className="form__user-data" onSubmit={handleUpdateUserAccount}>
        <h3 className="form__title">update account</h3>
        <div className="form__control">
          <label htmlFor="name" className="form__label">
            name
          </label>
          <input
            autoComplete="false"
            type="text"
            className="form__input"
            id="name"
            value={currentUserName}
            onChange={(e) => setCurrentUserName(e.target.value)}
          />
        </div>
        <div className="form__control">
          <label htmlFor="email" className="form__label">
            email
          </label>
          <input
            autoComplete="false"
            type="email"
            className="form__input"
            id="email"
            value={currentUserEmail}
            onChange={(e) => setCurrentUserEmail(e.target.value)}
          />
        </div>
        <div className="form__control form__photo-upload">
          <img
            src={
              photoPreview ||
              `${apiUrl}/images/users/default.jpg` ||
              `${apiUrl}/images/users/${currentUser.user.photo}`
            }
            alt="upload user pic"
            className="form__user-photo"
          />
          <input
            type="file"
            className="form__upload"
            id="photo"
            name="photo"
            accept={`${apiUrl}/images/*`}
            onChange={checkPhoto}
          />
          <label htmlFor="photo">upload image</label>
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
