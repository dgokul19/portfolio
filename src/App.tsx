import { useState } from "react";
import { Routes, Route  } from 'react-router';

// Components
import MainPage from "./components/MainPage";
import AboutComponent from "./components/About";
import PortfolioComponent from "./components/Portfolio";
import SideNavIcons from "./components/SideNav/index";

//Utils
import { THEME_CONSTANTS } from "./common/helper";
import { ThemeContext } from "./common/ThemeContext";

// CSS
import classes from "./style/style.module.scss";
import ContactComponent from "./components/Contact";
import BlogComponent from "./components/Blog";



function App() {
  const [ theme, setTheme ] = useState(THEME_CONSTANTS.DARK);
  return (
      <ThemeContext.Provider value={theme}>
        <div className={classes.contentWrapper} data-theme={theme}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutComponent/>} />
          <Route path="/portfolio" element={<PortfolioComponent/>} />
          <Route path="/contact" element={<ContactComponent/>} />
          <Route path="/blog" element={<BlogComponent/>} />
        </Routes>
          <SideNavIcons updateTheme={setTheme} page={''}/>
      </div>
      </ThemeContext.Provider>
  )
}

export default App;
