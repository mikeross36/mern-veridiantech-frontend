import { useState } from "react";
import { useDroneDetails } from "../hooks/useCustomHooks";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addItemToPreorderAction } from "../actions/preorderActions";
import { useAppContext } from "../contexts/AppContext";
import { toast } from "react-toastify";
import RatingStars from "./RatingStars";
import DronePilots from "./DronePilots";
import AddReview from "./AddReview";
import DroneReviews from "./DroneReviews";

const apiUrl = import.meta.env.VITE_API_URL;
const detailsId = "detailsId";

export default function ProductDetails() {
  const drone = useDroneDetails();
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
    _id,
  } = drone;

  const [droneRating, setDroneRating] = useState(rating);
  const quantity = 1;

  const authState = useSelector((state) => state.loginUser);
  const { currentUser } = authState;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { setPreorderOpen } = useAppContext();

  function handleAddItemToPreorder() {
    dispatch(addItemToPreorderAction(drone, quantity));
    setPreorderOpen(true);
    toast.success("Item successfully added to preorder!", {
      toastId: detailsId,
    });
  }

  return (
    <section className="product__details section container">
      <div className="product__description">
        <Link
          className="product__description-title"
          onClick={() => navigate(-1)}
        >
          <h3>{`About ${name}`}</h3>
        </Link>
        <p className="product__description-text">{description}</p>
      </div>
      <main className="product__container">
        <article className="product__data">
          <h4 className="product__section-title">{name}</h4>
          <div className="product__data-list">
            <span className="product__price">Price: {price.toFixed(2)}€</span>
            <span>
              <img
                src="/images/icons/flighttime-icon.svg"
                alt="flight time icon"
              />
              <p>Flight time: {flightTime}</p>
            </span>
            <span>
              <img src="/images/icons/speed-icon.svg" alt="drone speed icon" />
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
              <p>Max payload mass: {maxPayloadMass}</p>
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
              itemRating={droneRating}
              setItemRating={setDroneRating}
            />
          </div>
          <div className="product__data-btns">
            <button
              className="button button--small"
              onClick={handleAddItemToPreorder}
            >
              preorder
            </button>
            {!currentUser && (
              <Link to="/login-user">
                <button className="button button--gray button--small">
                  login to add review
                </button>
              </Link>
            )}
          </div>
        </article>
        <div className="product__image">
          <img
            src={`${apiUrl}/images/drones/${coverImage}`}
            alt="drone cover pic"
            className="product__img"
          />
        </div>
      </main>
      {drone.pilots?.length && <DronePilots drone={drone} />}
      {currentUser && <AddReview id={_id} />}
      <DroneReviews id={_id} />
    </section>
  );
}
