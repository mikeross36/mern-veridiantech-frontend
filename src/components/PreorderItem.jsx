import { FaChevronUp, FaChevronDown, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  removeItemFromPreorderAction,
  increaseQuantAction,
  decreaseQuantAction,
} from "../actions/preorderActions";
import PropTypes from "prop-types";

const apiUrl = import.meta.env.VITE_API_URL;

export default function PreorderItem({ drone }) {
  const { image, name, price, quantity } = drone;

  const dispatch = useDispatch();
  return (
    <li className="preorder__item">
      <img src={`${apiUrl}/images/drones/${image}`} alt="preorder item pic" />
      <div className="preorder__column">
        <span className="title">{name}</span>
        <span className="price">{price.toFixed(2)}€</span>
        <span className="subtotal">
          Subtotal: {(price * quantity).toFixed(2)}€
        </span>
      </div>
      <div className="preorder__column">
        <button
          className="quant__btn"
          onClick={() => dispatch(increaseQuantAction(drone))}
        >
          <FaChevronUp className="increase" />
        </button>
        <span className="quantity">{quantity}</span>
        <button
          className="quant__btn"
          onClick={() => dispatch(decreaseQuantAction(drone))}
        >
          <FaChevronDown className="decrease" />
        </button>
      </div>
      <span
        className="remove__item"
        onClick={() => dispatch(removeItemFromPreorderAction(drone))}
      >
        <FaTrash size={24} />
      </span>
    </li>
  );
}

PreorderItem.propTypes = {
  drone: PropTypes.object,
};
