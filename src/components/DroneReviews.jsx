import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDroneAction } from "../actions/droneActions";
import PropTypes from "prop-types";
import Review from "./Review";

export default function DroneReviews({ id }) {
  const dispatch = useDispatch();

  useEffect(
    function () {
      dispatch(getDroneAction(id));
    },
    [dispatch, id]
  );

  const droneState = useSelector((state) => state.getDrone);
  const { drone } = droneState;

  const reviewsNum = drone?.reviews.length;

  return (
    <section className="drone__reviews">
      {!reviewsNum ? (
        <h3 className="drone__reviews-title">no reviews for this drone</h3>
      ) : (
        <h3 className="drone__reviews-title">user reviews</h3>
      )}
      <ul className="reviews__list">
        {drone?.reviews?.map((review) => {
          return <Review key={review.id} review={review} />;
        })}
      </ul>
    </section>
  );
}

DroneReviews.propTypes = {
  id: PropTypes.string,
};
