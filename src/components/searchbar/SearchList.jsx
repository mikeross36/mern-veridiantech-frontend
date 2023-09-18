import { useAppContext } from "../../contexts/AppContext";
import SearchItem from "./SearchItem";

export default function SearchList() {
  const { searchResults } = useAppContext();

  return (
    <div className="search__list">
      {searchResults?.map((item) => {
        return <SearchItem key={item.id} item={item} />;
      })}
    </div>
  );
}
