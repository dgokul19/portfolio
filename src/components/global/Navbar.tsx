import { Fragment } from "react";
import { Link } from "react-router-dom";

import classes from '../../style/common.module.scss';

import LogoGokul from '../../assets/my_logo.jpeg';

export default function Navbar() {
    return (
        <Fragment>
            <div className={classes.navbarContainer}>
                <ul>
                   <li><Link to={`about`}>About</Link></li> 
                   <li><Link to={`resume`}>Resume</Link></li> 
                   <li className={classes.logo_li}><Link to={`/`}><img src={LogoGokul} alt={`Gokul Logo`}/></Link></li> 
                   <li><Link to={`Portfolio`}>Portfolio</Link></li> 
                   <li><Link to={`blog`}>Contact</Link></li> 
                </ul>
            </div>
        </Fragment>
    );

};