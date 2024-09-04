import { Fragment } from "react";

import classes from '../../style/common.module.scss';

const BackgroundImageComp = ({ image }:any) => {
    return (
        <Fragment>
            <span className={classes.imageAfter}>
                <img className={classes.staticBackground} src={image} alt={'Home page background '}/>
            </span>
        </Fragment>
    );
};

export default BackgroundImageComp;