import { useState, useRef } from "react";
import {
  FaArrowDown,
  FaTimes,
  FaUserAlt,
  FaWaze,
  FaSignOutAlt,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { logoutUserAction } from "../../actions/authActions";
import { Link, useNavigate } from "react-router-dom";
import { useOutsideClick } from "../../hooks/useCustomHooks";
import PropTypes from "prop-types";

const apiUrl = import.meta.env.VITE_API_URL;

export default function DropdownMenu({ currentUser, closeMobMenu }) {
  const [showDropdown, setShowDropdown] = useState(false);

  function toggleDropdown() {
    setShowDropdown(!showDropdown);
  }

  const dropRef = useRef(null);
  useOutsideClick(dropRef, function () {
    setShowDropdown(false);
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogoutUser() {
    dispatch(logoutUserAction());
    navigate("/");
  }

  return (
    <main className="dropdown" ref={dropRef}>
      <div
        className={`dropdown__content ${showDropdown ? "show-dropdown" : ""}`}
      >
        <button className="dropdown__button" onClick={toggleDropdown}>
          <img
            src={`${apiUrl}/images/users/${currentUser?.user.photo}`}
            alt="logged in usr pic"
            className="dropdown__user-img"
          />

          <span className="dropdown__user-name">
            <em> {currentUser?.user.name.split(" ")[0]} </em>
          </span>

          <div className="dropdown__icons">
            <FaArrowDown className="dropdown__arrow" />
            <FaTimes className="dropdown__close" />
          </div>
        </button>
        <ul
          className="dropdown__menu"
          onClick={() => {
            closeMobMenu();
            setShowDropdown(false);
          }}
        >
          <Link to="/user-account">
            <li className="dropdown__item">
              <FaUserAlt className="dropdown__icon" />
              <span className="dropdown__name">my account</span>
            </li>
          </Link>
          <Link to="/user-orders">
            <li className="dropdown__item">
              <FaWaze className="dropdown__icon" />
              <span className="dropdown__name">my orders</span>
            </li>
          </Link>
          <li className="dropdown__item" onClick={handleLogoutUser}>
            <FaSignOutAlt className="dropdown__icon" />
            <span className="dropdown__name">logout</span>
          </li>
        </ul>
      </div>
    </main>
  );
}

DropdownMenu.propTypes = {
  currentUser: PropTypes.object,
  closeMobMenu: PropTypes.func,
};
