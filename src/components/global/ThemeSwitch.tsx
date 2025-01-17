import { useMemo } from "react";

// Utils
import { THEME_CONSTANTS } from "../../common/helper";

// CSS
import classes from "../../style/style.module.scss";

type Props = {
    theme: string | 'light' | 'dark'
    changeTheme: Function
}

export const ThemeSwitchComponent = ({ theme, changeTheme }: Props) => {

    const handleThemeSwitch = (theme: string) => {
        changeTheme(theme);
    };

    const renderIcon = useMemo(() => {
        if (theme === THEME_CONSTANTS.DARK) {
            return <i className="fa fa-sun-o" onClick={() => handleThemeSwitch(THEME_CONSTANTS.LIGHT)}></i>;
        }
        return <i className="fa fa-moon-o" onClick={() => handleThemeSwitch(THEME_CONSTANTS.DARK)}></i>;
    }, [theme]);

    // console.log({ theme }, changeTheme);
    return (
        <div className={`${classes.themeIconSetting} ${theme === THEME_CONSTANTS.LIGHT && classes.lightTheme}`}>
            {renderIcon}
        </div>
    );
}