import { useState } from "react";
import { useDispatch } from "react-redux";
import { addReviewAction } from "../actions/reviewActions";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const addReviewId = "addReviewId";

export default function AddReview({ id }) {
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  function handleAddReview(e) {
    e.preventDefault();
    if (!content) {
      toast.error("Review content is mandatory!", { toastId: addReviewId });
      return;
    }
    dispatch(addReviewAction(id, content));
    setContent("");
  }
  return (
    <section className="add__review">
      <div className="review__form-bcg">
        <form className="review__form" onSubmit={handleAddReview}>
          <div className="form__control">
            <label htmlFor="review-content" className="form__label">
              add review
            </label>
            <textarea
              className="form__input"
              id="review-content"
              cols="4"
              rows="5"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <button type="submit" className="button button--small">
            save
          </button>
        </form>
      </div>
    </section>
  );
}

AddReview.propTypes = {
  id: PropTypes.string,
};
