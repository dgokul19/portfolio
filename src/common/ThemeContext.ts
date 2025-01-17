import { createContext, useContext } from "react";
import { THEME_CONSTANTS } from "./helper";

export const ThemeContext = createContext(THEME_CONSTANTS.DARK);

export const useThemeContext = () => {
    const theme = useContext(ThemeContext);

    if(!theme) {
        console.error(`Error in Theme Context Provider, Theme Not Found !!`);
    }
    return theme;
};