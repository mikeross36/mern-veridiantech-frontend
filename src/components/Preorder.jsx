import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useAppContext } from "../contexts/AppContext";
import { getPreorderTotalsAction } from "../actions/preorderActions";
import { Link } from "react-router-dom";
import { clearPreorderAction } from "../actions/preorderActions";
import PreorderItem from "./PreorderItem";
import Checkout from "./Checkout";

export default function Preorder() {
  const preorderState = useSelector((state) => state.preorder);
  const { preorderItems, preorderTotal } = preorderState;

  const { preorderOpen, setPreorderOpen } = useAppContext();

  const authState = useSelector((state) => state.loginUser);
  const { currentUser } = authState;

  const dispatch = useDispatch();

  useEffect(
    function () {
      dispatch(getPreorderTotalsAction());
    },
    [preorderItems, dispatch]
  );

  const preorderItemsNum = preorderItems.length;

  return (
    <section className="preorder">
      <aside className={`sidebar ${preorderOpen ? "expand" : "shrink"}`}>
        <div className="sidebar__bg"></div>
        <div className="sidebar__blob"></div>
        <button
          className="close__preorder"
          onClick={() => setPreorderOpen(false)}
        >
          <FaTimes />
        </button>
        {preorderItemsNum === 0 ? (
          <h4>no preorders</h4>
        ) : (
          <h4>your preorders</h4>
        )}
        <ul>
          {preorderItemsNum > 0 &&
            preorderItems.map(function (drone) {
              return <PreorderItem key={drone.id} drone={drone} />;
            })}
        </ul>
        <footer className="preorder__footer">
          {preorderItemsNum !== 0 && (
            <>
              <div className="preorder__total">
                {!currentUser ? (
                  <Link to="/login-user">
                    <button className="login__preorder">login to order</button>
                  </Link>
                ) : (
                  <Checkout preorderTotal={preorderTotal} />
                )}
                <h4>Total: {preorderTotal.toFixed(2)}€</h4>
              </div>
              <button
                className="clear__preorder"
                onClick={() => dispatch(clearPreorderAction())}
              >
                clear preorder
              </button>
            </>
          )}
        </footer>
      </aside>
    </section>
  );
}
