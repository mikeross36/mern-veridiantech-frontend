import PropTypes from "prop-types";

const apiUrl = import.meta.env.VITE_API_URL;

export default function Pilot({ pilot }) {
  const { photo, name, email } = pilot;
  return (
    <li key={name} className="pilot__card">
      <img
        src={`${apiUrl}/images/users/${photo}`}
        alt="drone pilot pic"
        className="pilot__img"
      />
      <div className="pilot__data">
        <h4 className="pilot__name">{name}</h4>
        <p className="pilot__email">{email}</p>
      </div>
    </li>
  );
}

Pilot.propTypes = {
  pilot: PropTypes.object,
};
