import { createContext, useState, useContext, useMemo } from "react";

import PropTypes from "prop-types";

const AppContext = createContext();

function AppContextProvider({ children }) {
  const [preorderOpen, setPreorderOpen] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showModal1, setShowModal1] = useState(false);

  function closeSearchBar() {
    setShowSearchBar(false);
    setSearchResults([]);
  }

  const value = useMemo(() => {
    return {
      preorderOpen,
      setPreorderOpen,
      showSearchBar,
      setShowSearchBar,
      searchTerm,
      setSearchTerm,
      searchResults,
      setSearchResults,
      closeSearchBar,
      showModal1,
      setShowModal1,
    };
  }, [preorderOpen, searchResults, searchTerm, showModal1, showSearchBar]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

function useAppContext() {
  const context = useContext(AppContext);
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { AppContextProvider, useAppContext };

AppContextProvider.propTypes = {
  children: PropTypes.object,
};
