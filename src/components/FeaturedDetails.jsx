import { useState } from "react";
import { useFeaturedDetails } from "../hooks/useCustomHooks";
import { Link, useNavigate } from "react-router-dom";
import RatingStars from "./RatingStars";

const apiUrl = import.meta.env.VITE_API_URL;

export default function FeaturedDetails() {
  const featured = useFeaturedDetails();
  const {
    name,
    description,
    price,
    flightTime,
    cruisingSpeed,
    vehicleMass,
    flightRange,
    maxPayloadMass,
    operatingDifficulty,
    rating,
    coverImage,
  } = featured;
  const [featuredRating, setFeaturedRating] = useState(rating);

  const navigate = useNavigate();

  return (
    <section className="featured section container">
      <div className="featured__description">
        <Link
          className="featured__description-title"
          onClick={() => navigate(-1)}
        >
          <h3>About {name}</h3>
        </Link>
        <p className="featured__description-text">{description}</p>
      </div>
      <div className="featured__container">
        <article className="featured__data">
          <h4 className="featured__section-title">{name}</h4>
          <div className="featured__data-list">
            <span className="featured__price">Price: {price.toFixed(2)}€</span>
            <span>
              <img
                src="/images/icons/flighttime-icon.svg"
                alt="flight time icon"
              />
              <p>Flight time: {flightTime}</p>
            </span>
            <span>
              <img src="/images/icons/speed-icon.svg" alt="speed icon" />
              <p>Cruising speed: {cruisingSpeed}</p>
            </span>
            <span>
              <img
                src="/images/icons/vehicle-mass-icon.svg"
                alt="vehicle mass icon"
              />
              <p>Vehicle mass: {vehicleMass}</p>
            </span>
            <span>
              <img
                src="/images/icons/flight-range.svg"
                alt="flight range icon"
              />
              <p>Flight range: {flightRange}</p>
            </span>
            <span>
              <img
                src="/images/icons/payload-mass-icon.svg"
                alt="payload mass icon"
              />
              <p>Payload mass: {maxPayloadMass}</p>
            </span>
            <span>
              <img
                src="/images/icons/difficulty-icon.svg"
                alt="difficulty icon"
              />
              <p>Operating difficulty: {operatingDifficulty}</p>
            </span>
            <RatingStars
              value={rating}
              starSize={17}
              colorInactive="#bfbfbf"
              colorActive="#FFBA5A"
              itemRating={featuredRating}
              setItemRating={setFeaturedRating}
            />
          </div>
        </article>
        <div className="featured__image">
          <img
            src={`${apiUrl}/images/featured/${coverImage}`}
            alt="featured details pic"
            className="featured__img"
          />
        </div>
      </div>
    </section>
  );
}
