import { Fragment } from "react";
import { Link } from "react-router-dom";


// Component
import TypeComponent from './global/TypeWritter';

// CSS
import classes from "../style/Home.module.scss";

// Static images
import profPic from '../assets/pic_01.jpeg';


const HomeContainer: React.FC = (): JSX.Element => {
    return (
        <Fragment>
            <div className={`${classes.homeContainer}`}>
                <div className={classes.homeContent}>
                    <div className={classes.heloContent}>
                        <TypeComponent />
                        <h1><span>{`Howdy, I'm`}</span><br></br> {`Gokul`} <span>.</span></h1>
                        <p>
                            {`Passion and diligence are two traits that I believe most reflect me as an individual. I love 
                            to generate new ideas and devise feasible solutions to broadly relevant problems.`}</p>
                        <p className='mt-10'>{`I enjoy embracing the lessons 
                            learned from failure, stand up and continue to grow.`}
                        </p>
                        <Link to="/about" className={`knowmore`}> know more <i className="fa fa-angle-double-right"></i></Link>
                    </div>
                    <div className={classes.heloPic}>
                        <div className={classes.outlayer}>
                            <img src={profPic} alt="My profile" />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default HomeContainer;
