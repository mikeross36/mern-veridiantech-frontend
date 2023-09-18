import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { FaAlignJustify } from "react-icons/fa";
import { useAppContext } from "../../contexts/AppContext";
import { toast } from "react-toastify";
import { api } from "../../utils/axiosConfig";
import NavMenu from "./NavMenu";
import SearchBar from "../searchbar/SearchBar";
import SearchList from "../searchbar/SearchList";

const contextId = "contextId";

export default function Header() {
  const [showMobMenu, setShowMobMenu] = useState(false);
  const [scrollHeader, setScrollHeader] = useState(false);

  const {
    setShowSearchBar,
    searchResults,
    closeSearchBar,
    searchTerm,
    setSearchResults,
    setSearchTerm,
  } = useAppContext();

  useEffect(function () {
    window.onscroll = function () {
      if (window.scrollY >= 40) {
        setScrollHeader(true);
      } else {
        setScrollHeader(false);
      }
    };
  });

  function toggleMobMenu() {
    setShowMobMenu(!showMobMenu);
    closeSearchBar();
  }

  function closeMobMenu() {
    setShowMobMenu(false);
  }

  async function handleSearch(e) {
    e.preventDefault();
    if (!searchTerm) {
      toast.error("Please enter search term!", { toastId: contextId });
      return;
    }
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await api.get(
        `/api/v1/drones/search-drones?search=${searchTerm}`,
        config
      );
      setSearchResults(data);
      setSearchTerm("");
    } catch (err) {
      toast.error(err.response?.data.message, { toastId: contextId });
    }
  }

  return (
    <header className={`header ${scrollHeader ? "scroll-header" : ""}`}>
      <nav className="nav container">
        <div className="nav__logo">
          <Link to="/">
            <img src="../images/drone-logo.svg" alt="nav logo" />
          </Link>
        </div>
        <NavMenu
          showMobMenu={showMobMenu}
          closeMobMenu={closeMobMenu}
          scrollHeader={scrollHeader}
        />
        <menu className="nav__btns">
          <button
            className="nav__search"
            onClick={() => setShowSearchBar(true)}
          >
            <GoSearch className="nav__search-btn" />
          </button>
          <button className="nav__toggle" onClick={toggleMobMenu}>
            <FaAlignJustify className="nav__toggle-btn" />
          </button>
        </menu>
        <div className="nav__search-container">
          <SearchBar handleSearch={handleSearch} />
          {searchResults && searchResults.length > 0 && <SearchList />}
        </div>
      </nav>
    </header>
  );
}
