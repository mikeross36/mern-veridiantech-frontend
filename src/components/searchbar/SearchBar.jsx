import { FaTimes } from "react-icons/fa";
import { useAppContext } from "../../contexts/AppContext";
import PropTypes from "prop-types";

export default function SearchBar({ handleSearch }) {
  const { showSearchBar, searchTerm, setSearchTerm, closeSearchBar } =
    useAppContext();

  return (
    <form
      className={`search__form ${showSearchBar ? "active-form" : ""}`}
      onSubmit={handleSearch}
    >
      <input
        type="search"
        className="search__input"
        id="search-input"
        placeholder="search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        autoComplete="off"
      />
      <label htmlFor="search-input" onClick={closeSearchBar}>
        <FaTimes className="close__search-btn" />
      </label>
    </form>
  );
}

SearchBar.propTypes = {
  handleSearch: PropTypes.func,
};
