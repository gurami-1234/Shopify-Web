import React, { createContext, useState } from "react";
export const ThemeContext = createContext();
const ThemeContextComponent = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const obj = {
    isDark,
    setIsDark,
  };
  return <ThemeContext.Provider value={obj}>{children}</ThemeContext.Provider>;
};

export default ThemeContextComponent;
