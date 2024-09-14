import { useMemo } from "react";

// Utils
import { THEME_CONSTANTS } from "../../common/helper";

// CSS
import classes from "../../style/style.module.scss";

type Props = {
    theme : string | 'light' | 'dark'
    changeTheme : Function
}

export const ThemeSwitchComponent = ({ theme, changeTheme }: Props) => {

    const renderIcon = useMemo(() => {
        if(theme === THEME_CONSTANTS.DARK){
            return <i className="fa fa-sun-o"></i>;
        }
        return <i className="fa fa-moon-o"></i>;
    }, [theme]);

    console.log({theme});
    return ( 
        <div className={classes.themeIconSetting} onClick={() => changeTheme(theme)}>
            {renderIcon}
        </div>
    );
}