import { Link } from "react-router-dom";
import { useAppContext } from "../../contexts/AppContext";
import PropTypes from "prop-types";

export default function SearchItem({ item }) {
  const { closeSearchBar, setSearchTerm } = useAppContext();

  return (
    <Link
      to={`/product/${item.id}`}
      onClick={() => {
        closeSearchBar();
        setSearchTerm("");
      }}
    >
      <div className="search__item">
        <span>{item.name}</span>
      </div>
    </Link>
  );
}

SearchItem.propTypes = {
  item: PropTypes.object,
};
