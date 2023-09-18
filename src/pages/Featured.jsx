import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllFeaturedAction } from "../actions/featuredActions";
import FeaturedItem from "../components/FeaturedItem";
import Spinner from "../components/Spinner";

/* eslint-disable react/no-unescaped-entities */
export default function Featued() {
  const allFeaturedState = useSelector((state) => state.getAllFeatured);
  const { featureds, loading } = allFeaturedState;

  const dispatch = useDispatch();

  useEffect(
    function () {
      dispatch(getAllFeaturedAction());
    },
    [dispatch]
  );

  return (
    <section className="featureds section container">
      <div className="story__container">
        <div className="story__data">
          <h2 className="section__title">featured</h2>
          <h3 className="story__title">you can trust our reviews</h3>
          <p className="story__description">
            We've flown plenty, and these are the best drones in our tests.
            Since 1982, we have tested and rated thousands of products to help
            you make better buying decisions.
          </p>
        </div>
        <div className="cube__container">
          <div className="cube">
            <div className="face front">
              <img
                src="/images/story-bcg.jpg"
                alt="story background pic"
                className="story__img"
              />
            </div>
            <div className="face back">
              <img
                src="/images/story-bcg.jpg"
                alt="story background pic"
                className="story__img"
              />
            </div>
            <div className="face right">
              <img
                src="/images/story-bcg.jpg"
                alt="story background pic"
                className="story__img"
              />
            </div>
            <div className="face left">
              <img
                src="/images/story-bcg.jpg"
                alt="story background pic"
                className="story__img"
              />
            </div>
            <div className="face top">
              <img
                src="/images/story-bcg.jpg"
                alt="story background pic"
                className="story__img"
              />
            </div>
            <div className="face bottom">
              <img
                src="/images/story-bcg.jpg"
                alt="story background pic"
                className="story__img"
              />
            </div>
          </div>
        </div>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <ul className="featureds__container">
          {featureds?.map(function (featured) {
            return <FeaturedItem key={featured.id} featured={featured} />;
          })}
        </ul>
      )}
    </section>
  );
}
