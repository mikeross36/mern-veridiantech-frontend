import { NavLink, Link } from "react-router-dom";
import { FaTimesCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useAppContext } from "../../contexts/AppContext";
import PropTypes from "prop-types";
import DropdownMenu from "./DropdownMenu";

export default function NavMenu({ showMobMenu, closeMobMenu, scrollHeader }) {
  const userState = useSelector((state) => state.loginUser);
  const { currentUser } = userState;
  const { setPreorderOpen } = useAppContext();

  const preorderState = useSelector((state) => state.preorder);
  const { preorderItems, itemsTotal } = preorderState;

  return (
    <div
      className={`nav__menu ${showMobMenu ? "show-menu" : ""}`}
      onClick={closeMobMenu}
    >
      <ul className={`nav__list ${scrollHeader && "scroll-header"}`}>
        <li className="nav__item">
          <NavLink to="/" className="nav__link">
            home
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/products" className="nav__link">
            products
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/featured" className="nav__link">
            featured
          </NavLink>
        </li>
        {currentUser ? (
          <li className="nav__item" onClick={(e) => e.stopPropagation()}>
            <DropdownMenu
              currentUser={currentUser}
              closeMobMenu={closeMobMenu}
            />
          </li>
        ) : (
          <li className="nav__item">
            <NavLink to="/login-user" className="nav__link">
              login
            </NavLink>
          </li>
        )}
        <li className="nav__item" onClick={() => setPreorderOpen(true)}>
          <Link className="nav__link link-preorders">
            preorders{" "}
            {preorderItems.length > 0 && (
              <span className="preorder__items">{itemsTotal}</span>
            )}
          </Link>
        </li>
      </ul>
      <button className="nav__close" onClick={closeMobMenu}>
        <FaTimesCircle className="nav__close-btn" />
      </button>
    </div>
  );
}

NavMenu.propTypes = {
  showMobMenu: PropTypes.bool,
  closeMobMenu: PropTypes.func,
  scrollHeader: PropTypes.bool,
};
