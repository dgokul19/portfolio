

// CSS
import classes from "../style/style.module.scss";

import profileImage from "../assets/main_01.png";
// Images

const MainPage = () => {
    return ( 
        <div className={classes.mainPage}>
            <div className={classes.elementcontainer}>
                <div className={classes.contentHome}>
                    <div className={classes.profileImage}>
                        <img src={profileImage} alt="Profile Image"/>
                    </div>

                    <div className={classes.mainContent}>
                        <h1 className={classes.primaryYellow}>.I'M GOKULAN  <span className={classes.hyphen}></span></h1>
                        <h1>DHATCHINAMOORTHY</h1>
                        <h3>Software Engineer</h3>
                        <p>I'm web designer & MERN/MEAN stack developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;