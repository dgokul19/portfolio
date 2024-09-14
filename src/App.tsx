import { useState } from "react";

// Components
import MainPage from "./components/MainPage";
import SideNavIcons from "./components/SideNav/index";

//Utils
import { THEME_CONSTANTS } from "./common/helper";
import { ThemeContext } from "./common/ThemeContext";

// CSS
import classes from "./style/style.module.scss";



function App() {
  const [ theme, setTheme ] = useState(THEME_CONSTANTS.DARK);
  return (
    <ThemeContext.Provider value={theme}>
      <div className={classes.contentWrapper} data-theme={theme}>
        <MainPage />

        <SideNavIcons updateTheme={setTheme} page={''}/>
    </div>
    </ThemeContext.Provider>
  )
}

export default App;
