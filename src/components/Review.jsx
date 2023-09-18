import { useState } from "react";
import PropTypes from "prop-types";
import RatingStars from "./RatingStars";

const apiUrl = import.meta.env.VITE_API_URL;

export default function Review({ review }) {
  const { user, content, rating } = review;
  const [reviewRating, setReviewRating] = useState(rating);

  return (
    <li className="review__card">
      <figure className="review__avatar">
        <img
          src={`${apiUrl}/images/users/${user.photo}`}
          alt="user review pic"
          className="review__avatar-img"
        />
        <p className="review__user">{user.name}</p>
      </figure>
      <p className="review__content">{content}</p>
      <RatingStars
        value={rating}
        starSize={17}
        colorInactive="#bfbfbf"
        colorActive="#FFBA5A"
        itemRating={reviewRating}
        setItemRating={setReviewRating}
      />
    </li>
  );
}

Review.propTypes = {
  review: PropTypes.object,
};
