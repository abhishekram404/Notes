import React from "react";
interface themeInterface {
  colors: {
    primary: string;
    secondary: string;
    black: string;
    white: string;
  };
}
const ThemeContext = React.createContext<themeInterface>({
  colors: {
    primary: "#FF7B34",
    black: "#402E32",
    white: "#DFE0DF",
    secondary: "#6A3B22",
  },
});

export default ThemeContext;
