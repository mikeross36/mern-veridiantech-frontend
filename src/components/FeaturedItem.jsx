import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import RatingStars from "./RatingStars";

const apiUrl = import.meta.env.VITE_API_URL;

export default function FeaturedItem({ featured }) {
  const { coverImage, name, price, rating, id } = featured;

  const [featuredRating, setFeaturedRating] = useState(rating);

  return (
    <li className="featured__card">
      <span className="featured__tag"></span>
      <img
        src={`${apiUrl}/images/featured/${coverImage}`}
        alt="featured pic"
        className="featured__img"
      />
      <div className="featured__data">
        <h3 className="featured__title">{name}</h3>
        <RatingStars
          value={rating}
          starSize={15}
          colorInactive="#bfbfbf"
          colorActive="#FFBA5A"
          itemRating={featuredRating}
          setItemRating={setFeaturedRating}
        />
        <span className="featured__price">price: {price.toFixed(2)}€</span>
        <Link to={`/featured/${id}`}>
          <button className="button button--gray button--xSmall">
            details
          </button>
        </Link>
      </div>
    </li>
  );
}

FeaturedItem.propTypes = {
  featured: PropTypes.object,
};
