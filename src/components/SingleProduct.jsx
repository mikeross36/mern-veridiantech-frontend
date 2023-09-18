import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import RatingStars from "./RatingStars";

const apiUrl = import.meta.env.VITE_API_URL;

export default function SingleProduct({ drone }) {
  const { coverImage, name, operatingDifficulty, summary, price, id, rating } =
    drone;
  const [droneRating, setDroneRating] = useState(rating);

  return (
    <li className="product__card">
      <div className="product__data">
        <h4 className="product__name">{name}</h4>
        <p className="product__operating">operating: {operatingDifficulty}</p>
        <p className="product__summary">{summary}</p>
        <span className="product__price">price: {price.toFixed(2)}€</span>
        <RatingStars
          value={rating}
          starSize={17}
          colorInactive="#6b6b6b"
          colorActive="#faa250"
          itemRating={droneRating}
          setItemRating={setDroneRating}
        />
        <Link to={`/product/${id}`}>
          <button className="button button--xSmall">details</button>
        </Link>
      </div>
      <img
        src={`${apiUrl}/images/drones/${coverImage}`}
        alt="single drone pic"
        className="product__img"
      />
    </li>
  );
}

SingleProduct.propTypes = {
  drone: PropTypes.object,
};
