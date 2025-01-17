import classes from "../../style/style.module.scss";

type Props = {
 main : String,
 mainSub : String,
 bg : String
}
export default ({main, mainSub, bg}: Props) => {
    return ( 
        <div className={classes.subPageTitleContent}>
            <h1 className={classes.absoluteTitleBg}>{bg}</h1>
            <h3>{main} <span>{mainSub}</span></h3>
        </div>
    );
}