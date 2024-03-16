import { createContext, useContext, useState } from "react";

export const Context = createContext();

export const AppContext = ({ children }) => {
  const [imageSearch, setImageSearch] = useState(false);
  const [news, setNews] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("All");

  return (
    <Context.Provider value={{ imageSearch, setImageSearch,
     news, setNews, selectedMenu, setSelectedMenu }}>
      {children}
    </Context.Provider>
  );
};

export const useTheme = () => {
  return useContext(Context);
};
