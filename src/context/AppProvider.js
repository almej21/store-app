// import { createContext, useContext, useEffect } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  useEffect(() => {}, []);

  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export const AppState = () => {
  // return useContext(AppContext);
};

export default AppProvider;
