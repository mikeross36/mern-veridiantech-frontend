import PropTypes from "prop-types";

export default function UserAccount({ children }) {
  return (
    <section className="account section">
      <div className="user__account-content">{children}</div>
    </section>
  );
}

UserAccount.propTypes = {
  children: PropTypes.array,
};
