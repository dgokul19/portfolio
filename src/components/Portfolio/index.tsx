import { Fragment } from "react";

// Component
import TitleSection from "../global/TitleSection";

// Helper
// import { THEME_CONSTANTS } from "../../common/helper";

// CSS
import classes from "../../style/subpage.module.scss";
// const { DARK } = THEME_CONSTANTS;

type Props = {}

const PortfolioComponent = ({ }: Props) => {

    return (
        <Fragment>
            <div className={classes.subPageController}>
                <section>
                    <TitleSection bg={`Works`} main={`My`} mainSub={`Portfolio`}/>

                    <div className={classes.personalInfo}>

                    </div>
                </section>
            </div>
        </Fragment>
    );
}

export default PortfolioComponent;