import { Fragment } from "react";

// Component
import TitleSection from "../global/TitleSection";

// Helper
// import { THEME_CONSTANTS } from "../../common/helper";

// CSS
import classes from "../../style/subpage.module.scss";
// const { DARK } = THEME_CONSTANTS;

type Props = {}

const ContactComponent = ({ }: Props) => {

    return (
        <Fragment>
            <div className={classes.subPageController}>
                <section>
                    <TitleSection bg={`Contact`} main={`Get In`} mainSub={`Touch`}/>

                    <div className={classes.personalInfo}>

                    </div>
                </section>
            </div>
        </Fragment>
    );
}

export default ContactComponent;