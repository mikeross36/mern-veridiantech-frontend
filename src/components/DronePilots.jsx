import PropTypes from "prop-types";
import Pilot from "./Pilot";

export default function DronePilots({ drone }) {
  return (
    <div className="drone__pilots">
      <h3 className="drone__pilots-title">drone pilots</h3>
      <ul className="drone__pilots-list">
        {drone?.pilots?.map((pilot) => {
          return <Pilot key={pilot.email} pilot={pilot} />;
        })}
      </ul>
    </div>
  );
}

DronePilots.propTypes = {
  drone: PropTypes.object,
};
