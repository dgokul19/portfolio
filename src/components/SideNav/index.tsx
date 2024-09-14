import { Fragment, useCallback, useContext } from "react";

// Component
import { ThemeSwitchComponent } from "../global/ThemeSwitch";


// CSS
import classes from "./index.module.scss";
import { ThemeContext } from "../../common/ThemeContext";
import { THEME_CONSTANTS } from "../../common/helper";

const { DARK } = THEME_CONSTANTS;

type Props = {
    page : string
    updateTheme: Function
}

const SideNavIcons = ({ updateTheme }: Props) => {
    const theme = useContext(ThemeContext);

    const handleThemeChange = useCallback((themeVal: string) => {
        updateTheme(themeVal)
    }, []);

    return (
        <Fragment>
            <div className={classes.sideNavWrapper}>
                <ThemeSwitchComponent theme={theme} changeTheme={handleThemeChange} />

                <ul className={`${theme === DARK ? classes.darkIcons : classes.lightIcons}`}>
                    <li className={classes.activePage}><i className="fa fa-home"></i> <span>HOME</span></li>
                    <li><i className="fa fa-user"></i> <span>ABOUT</span></li>
                    <li><i className="fa fa-briefcase"></i> <span>PORTFOLIO</span></li>
                    <li><i className="fa fa-envelope"></i> <span>CONTACT</span></li>
                    <li><i className="fa fa-comments"></i> <span>BLOG</span></li>
                </ul>
            </div>
        </Fragment>
    );
}

export default SideNavIcons;