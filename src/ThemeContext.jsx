import React, { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const boxShadowColor =
    theme === "light" ? "rgba(0, 0, 0, 0.3)" : "rgba(211, 211, 211, 0.3)";
  const CardColor = theme === "light" ? "#f8f8f8" : "#2c2c2c";
  const TextColor = theme === "light" ? "black" : "white";

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const contextValue = {
    theme,
    TextColor,
    boxShadowColor,
    toggleTheme,
    CardColor,
  };
  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
