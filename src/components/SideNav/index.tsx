import { Fragment } from "react";
import { Link } from "react-router" 
// Component
import { ThemeSwitchComponent } from "../global/ThemeSwitch";


import { useThemeContext } from "../../common/ThemeContext";
import { THEME_CONSTANTS } from "../../common/helper";

// CSS
import classes from "./index.module.scss";
const { DARK } = THEME_CONSTANTS;

type Props = {
    page : string
    updateTheme: Function
}

const SideNavIcons = ({ updateTheme }: Props) => {
    const theme = useThemeContext();

    const handleThemeChange = (themeVal: string) => {
        console.log(themeVal);
        updateTheme(themeVal)
    };

    return (
        <Fragment>
            <div className={classes.sideNavWrapper}>
                <ThemeSwitchComponent theme={theme} changeTheme={handleThemeChange} />

                <ul className={`${theme === DARK ? classes.darkIcons : classes.lightIcons}`}>
                    <li className={classes.activePage}><i className="fa fa-home"></i><span><Link to="/">HOME</Link></span></li>
                    <li><i className="fa fa-user"></i><span><Link to="/about">ABOUT</Link></span></li>
                    <li><i className="fa fa-briefcase"></i><span> <Link to="/portfolio">PORTFOLIO</Link></span></li>
                    <li><i className="fa fa-envelope"></i><span> <Link to="/contact">CONTACT</Link></span></li>
                    <li><i className="fa fa-comments"></i><span><Link to="/blog"> BLOG</Link></span></li>
                </ul>
            </div>
        </Fragment>
    );
}

export default SideNavIcons;