import { FaStar } from "react-icons/fa6";
import PropTypes from "prop-types";

export default function RatingStars({
  value,
  starSize,
  colorInactive,
  colorActive,
  itemRating,
  setItemRating,
}) {
  return (
    <div
      className="rating__stars"
      style={{
        display: "flex",
        margin: "1rem 0.5rem",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      {[...Array(5).keys()].map(function (_, idx) {
        const ratingValue = idx + 1;
        return (
          <label key={idx}>
            <input
              style={{ display: "none" }}
              type="radio"
              name="rating"
              value={value}
              onClick={function () {
                setItemRating(ratingValue);
              }}
            />
            <FaStar
              style={{
                cursor: "pointer",
                transition: "color 0.2s",
              }}
              size={starSize}
              className="rating__star"
              color={ratingValue <= itemRating ? colorActive : colorInactive}
            />
          </label>
        );
      })}
    </div>
  );
}

RatingStars.propTypes = {
  value: PropTypes.number,
  starSize: PropTypes.number,
  colorInactive: PropTypes.string,
  colorActive: PropTypes.string,
  itemRating: PropTypes.number,
  setItemRating: PropTypes.func,
};
